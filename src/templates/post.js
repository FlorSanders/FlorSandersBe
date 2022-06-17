import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Layout, MDXContent } from "../components";
import { formatIsoDate } from "../utils";

export default function post({ data }) {
  const { body, frontmatter } = data.mdx;
  const { title, subtitle, date, cover } = frontmatter;

  return (
    <Layout
      image={
        <GatsbyImage image={getImage(cover)} alt={`${title} cover image`} />
      }
    >
      <div className="my-6 space-y-4 w-11/12 md:w-3/4">
        <h1 className="text-5xl font-poppins">{title}</h1>
        <h2 className="text-3xl font-poppins pb-2">{subtitle}</h2>
        <span className="text-xl font-poppins">{formatIsoDate(date)}</span>
        <MDXContent>{body}</MDXContent>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
        subtitle
        date
        cover {
          childImageSharp {
            gatsbyImageData(width: 1920)
          }
        }
      }
    }
  }
`;
