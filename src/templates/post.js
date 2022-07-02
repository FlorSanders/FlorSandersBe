import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { H2, Layout, MDXContent } from "../components";
import { formatIsoDate } from "../utils";

export default function post({ data }) {
  const { body, frontmatter, slug } = data.mdx;
  const { title, subtitle, date, cover } = frontmatter;

  return (
    <Layout
      image={
        <GatsbyImage
          image={getImage(cover)}
          alt={`${title} cover image`}
          itemProp="image"
          id="blog-thumbnail"
        />
      }
      page={slug}
    >
      <div
        className="my-6 space-y-4 w-11/12 md:w-3/4"
        itemScope
        itemType="https://schema.org/BlogPosting"
        itemRef="blog-thumbnail"
      >
        <h1 className="text-5xl font-poppins" itemProp="headline">
          {title}
        </h1>
        <H2 className="pb-2" itemProp="alternativeHeadline">
          {subtitle}
        </H2>
        <span className="text-xl font-poppins" itemProp="dateCreated">
          {formatIsoDate(date)}
        </span>
        <MDXContent itemProp="articleBody" className="space-y-4">
          {body}
        </MDXContent>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      slug
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
