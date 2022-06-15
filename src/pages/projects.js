import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import fuzzysort from "fuzzysort";
import {
  MDXContent,
  Layout,
  Input,
  Timeline,
  TimelineElement,
  ProjectContent,
} from "../components";

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
          width={1920}
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
      <Timeline pageSize={2}>
        {projects.map((project, index) => {
          const { id, body } = project;

          return (
            <TimelineElement
              key={id}
              description={<MDXContent>{body}</MDXContent>}
              index={index}
            >
              <ProjectContent project={project} />
            </TimelineElement>
          );
        })}
      </Timeline>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ProjectsQuery {
    allMdx(filter: { fileAbsolutePath: { regex: "/.*/projects/.*/" } }) {
      nodes {
        id
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
