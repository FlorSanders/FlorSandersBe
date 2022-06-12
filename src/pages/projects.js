import React from "react";
import { graphql } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { IoLogoGithub } from "react-icons/io5";
import { A, Layout } from "../components";
import { formatIsoDate, formatGithubUrl } from "../utils";

export default function Projects({ data }) {
  let projects = data?.allMdx?.nodes || [];
  projects = projects.sort((a, b) =>
    a.frontmatter.date < b.frontmatter.date ? 1 : -1
  );

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
          alt="About cover image"
        />
      }
    >
      <h2 className="text-4xl font-poppins pt-6 pb-8">Timeline</h2>
      <div className="w-full flex flex-col">
        {projects.map((project, index) => {
          const { id, slug, frontmatter, body } = project;
          const { cover, date, github, technologies, title, url } = frontmatter;
          return (
            <div
              key={id}
              className={`w-11/12 sm:w-4/5 lg:w-1/2 relative border-black inline-grid self-end border-l-8 py-4 -left-1 ${
                index % 2
                  ? "lg:self-start lg:border-r-8 lg:-right-1 lg:left-auto lg:border-l-0"
                  : ""
              }`}
            >
              <div
                className={`w-11/12 lg:w-5/6 xl:w-8/12 relative flex flex-col items-start pl-8 before:-left-4 ${
                  index % 2
                    ? "lg:items-end lg:text-right lg:justify-self-end lg:pr-8 lg:before:left-auto lg:before:-right-4"
                    : ""
                }
                before:absolute before:bg-white before:border-2 before:z-10 before:border-black before:w-6 before:h-6 before:rounded-full before:top-1
                `}
              >
                {url ? (
                  <A to={url} className="text-2xl font-poppins">
                    {title}
                  </A>
                ) : (
                  <h3 className="text-2xl font-poppins">{title}</h3>
                )}
                {github && Array.isArray(github) ? (
                  <div className="flex flex-row items-center space-x-2">
                    {github.map((ghUrl) => (
                      <A
                        key={ghUrl}
                        to={ghUrl}
                        className={`flex flex-row items-center ${
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
                  width={600}
                  quality={95}
                  className="w-3/4 lg:w-full aspect-video border-2 border-black rounded-lg"
                  alt={`${title} cover image`}
                />
                {technologies && Array.isArray(technologies) ? (
                  <div className="flex flex-row space-x-2">
                    {technologies.map(({ label, url }) => (
                      <A key={label} to={url}>
                        #{label}
                      </A>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ProjectsQuery {
    allMdx(filter: { fileAbsolutePath: { regex: "/.*/projects/.*/" } }) {
      nodes {
        id
        slug
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
          technologies {
            label
            url
          }
          title
          url
        }
      }
    }
  }
`;
