import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import fuzzysort from "fuzzysort";
import { IoLogoGithub } from "react-icons/io5";
import { A, MDXContent, Layout, Input } from "../components";
import { formatIsoDate, formatGithubUrl } from "../utils";

export default function Projects({ data }) {
  // State
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");
  // Effects
  useEffect(() => {
    const allProjects = (data?.allMdx?.nodes || []).map(
      ({ frontmatter, ...project }) => ({
        ...project,
        ...frontmatter,
        technologiesString: (frontmatter?.technologies || [])
          .map(({ label }) => label)
          .join(" "),
        organizationsString: (frontmatter?.for || [])
          .map(({ label }) => label)
          .join(" "),
      })
    );

    const sortedProjects = allProjects.sort((a, b) =>
      a.date < b.date ? 1 : -1
    );

    if (search) {
      const delayedSearch = setTimeout(() => {
        const results = fuzzysort.go(search, sortedProjects, {
          keys: ["title", "technologiesString", "organizationsString"],
        });
        console.log(results.map((result) => result.obj.technologiesString));
        setProjects(results.map((result) => result.obj));
      }, 200);
      return () => clearTimeout(delayedSearch);
    } else {
      setProjects(sortedProjects);
    }
  }, [search, data?.allMdx?.nodes]);

  return (
    <Layout
      page="projects"
      title="Projects"
      image={
        <StaticImage
          src="../assets/images/projects-cover.jpg"
          className="w-full brightness-75"
          height={680}
          quality={90}
          alt="Projects cover image"
        />
      }
    >
      <h2 className="text-4xl font-poppins pt-6 pb-8">Timeline</h2>
      <Input
        onChange={setSearch}
        value={search}
        className="w-3/4 lg:w-1/2 mb-8"
        placeholder="Search"
      />
      <div className="w-full flex flex-col">
        <div className="w-12 h-2 bg-black rounded-lg relative left-7 lg:self-center lg:left-0" />
        {projects.map((project, index) => {
          const {
            id,
            body,
            cover,
            date,
            github,
            technologies,
            title,
            url,
            for: organizations,
          } = project;

          return (
            <div
              key={id}
              className={`hover:child-opacity-100 relative w-full flex items-center ${
                index % 2 ? "flex-row-reverse" : "flex-row"
              } `}
              // hover:child-opacity-100 is a custom className defined in `../styles/global.css`
            >
              <div
                className={`hidden lg:flex opacity-0 transition-opacity duration-300 lg:flex-col lg:flex-1 ${
                  index % 2 ? "" : "items-end"
                }`}
              >
                <div className="w-3/4 mx-6">
                  <MDXContent>{body}</MDXContent>
                </div>
              </div>
              <div
                className="left-timeline absolute top-8 w-8 h-8 z-10 bg-white border-black border-4 rounded-full"
                // left-timeline is a custom className defined in `../styles/global.css`
              />
              <div
                className={`ml-12 lg:ml-0 flex-1 flex flex-col border-black border-l-8 ${
                  index % 2 ? "lg:border-r-8 lg:border-l-0" : ""
                }`}
              >
                <div
                  className={`w-3/4 mx-6 py-8 flex flex-col space-y-1 ${
                    index % 2 ? "lg:self-end lg:items-end" : ""
                  }`}
                >
                  {url ? (
                    <A to={url} className="text-2xl font-poppins">
                      {title}
                    </A>
                  ) : (
                    <h3 className="text-2xl font-poppins">{title}</h3>
                  )}
                  <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row flex-wrap">
                    {organizations
                      ? organizations.map(({ label, url }) => (
                          <A key={url} to={url} className="pr-1">
                            @{label}
                          </A>
                        ))
                      : null}
                  </div>
                  {github && Array.isArray(github) ? (
                    <div className="flex flex-row items-center flex-wrap">
                      {github.map((ghUrl) => (
                        <A
                          key={ghUrl}
                          to={ghUrl}
                          className={`flex flex-row items-center pr-1 ${
                            index % 2 ? "justify-end" : ""
                          }`}
                        >
                          <IoLogoGithub className="mr-1" />
                          {formatGithubUrl(ghUrl)}
                        </A>
                      ))}
                    </div>
                  ) : null}
                  <span className="font-poppins">{formatIsoDate(date)}</span>
                  <GatsbyImage
                    image={getImage(cover)}
                    width={750}
                    quality={95}
                    className="w-full aspect-video border-2 border-black rounded-lg"
                    alt={`${title} cover image`}
                  />
                  {technologies && Array.isArray(technologies) ? (
                    <div className="flex flex-row flex-wrap">
                      {technologies.map(({ label, url }) => (
                        <A key={label} to={url} className="pr-1">
                          #{label}
                        </A>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}
        <div className="w-12 h-2 bg-black rounded-lg relative left-7 lg:self-center lg:left-0" />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ProjectsQuery {
    allMdx(filter: { fileAbsolutePath: { regex: "/.*/projects/.*/" } }) {
      nodes {
        id
        fileAbsolutePath
        body
        frontmatter {
          cover {
            childImageSharp {
              gatsbyImageData(width: 600)
            }
          }
          date
          github
          title
          url
          technologies {
            label
            url
          }
          for {
            label
            url
          }
        }
      }
    }
  }
`;
