import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { Layout, Input, P, A, Pagination } from "../components";
import { formatIsoDate } from "../utils";

export default function Writing({ data }) {
  // Constants
  const pageSize = 3;
  // State
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  // Effect
  useEffect(() => {
    const allPosts = (data?.allMdx?.nodes || []).map(
      ({ frontmatter, ...post }) => ({
        ...post,
        ...frontmatter,
        tagsString: (frontmatter?.tags || []).join(" "),
      })
    );

    const sortedPosts = allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));

    setPosts(sortedPosts);
  }, [data?.allMdx?.nodes]);

  return (
    <Layout
      page="writing"
      title="Writing"
      image={
        <StaticImage
          src="../assets/images/writing-cover.jpg"
          className="w-full brightness-75"
          width={1920}
          height={680}
          quality={90}
          alt="Writing cover image"
        />
      }
    >
      <h2 className="text-4xl font-poppins pt-6 pb-8">Articles</h2>
      <Input
        onChange={(value) => {
          setPage(1);
          setSearch(value);
        }}
        value={search}
        className="w-3/4 lg:w-1/2 mb-8"
        placeholder="Search"
      />
      <div className="w-10/12 grid grid-cols-3">
        {posts
          .map(
            (
              { id, slug, title, subtitle, excerpt, date, author, tags, cover },
              index
            ) => {
              let containerClassName = "";
              let imageClassName = "";

              const groupIndex = Math.floor(index / 3);
              if (
                (index % 3 === 0 && groupIndex % 2 === 0) ||
                (index % 3 === 2 && groupIndex % 2 === 1)
              ) {
                containerClassName = "flex-row col-span-2 row-span-1";
                imageClassName = "rounded-l-lg";
              } else if (
                (index % 3 === 1 && groupIndex % 2 === 0) ||
                (index % 3 === 0 && groupIndex % 2 === 1)
              ) {
                containerClassName = "flex-col col-span-1 row-span-2";
                imageClassName = "rounded-t-lg";
              } else if (
                (index % 3 === 2 && groupIndex % 2 === 0) ||
                (index % 3 === 1 && groupIndex % 2 === 1)
              ) {
                containerClassName = "flex-row-reverse col-span-2 row-span-1";
                imageClassName = "rounded-r-lg";
              }

              return (
                <div
                  key={id}
                  className={`flex m-8 border border-black rounded-lg ${containerClassName}`}
                >
                  <A to={`/${slug}`} className="flex-1 overflow-hidden">
                    <GatsbyImage
                      image={getImage(cover)}
                      alt={`${title} cover image`}
                      className={`aspect-square h-full ${imageClassName}`}
                    />
                  </A>
                  <div className="flex-1 py-4 px-8 flex flex-col justify-center space-y-2">
                    <A to={`/${slug}`}>
                      <h1 className="text-3xl font-poppins">{title}</h1>
                    </A>
                    <h2 className="text-xl font-poppins">{subtitle}</h2>
                    <P>{excerpt}</P>
                    <span className="font-poppins">{formatIsoDate(date)}</span>
                  </div>
                </div>
              );
            }
          )
          .slice((page - 1) * pageSize, page * pageSize)}
      </div>
      <Pagination
        page={page}
        setPage={setPage}
        maxPage={Math.ceil(posts.length / pageSize)}
      />
    </Layout>
  );
}

export const pageQuery = graphql`
  query PostsQuery {
    allMdx(filter: { fileAbsolutePath: { regex: "/.*/posts/.*/" } }) {
      nodes {
        id
        slug
        excerpt
        frontmatter {
          title
          subtitle
          date
          author
          tags
          cover {
            childImageSharp {
              gatsbyImageData(width: 600)
            }
          }
        }
      }
    }
  }
`;
