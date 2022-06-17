import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import fuzzysort from "fuzzysort";
import { Layout, Input, Pagination, PostPreview } from "../components";

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

    if (search) {
      const results = fuzzysort.go(search, sortedPosts, {
        keys: ["title", "subtitle", "tagsString"],
      });
      setPosts(results.map((result) => result.obj));
    } else {
      setPosts(sortedPosts);
    }
  }, [search, data?.allMdx?.nodes]);

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
          .map((post, index) => <PostPreview post={post} index={index} />)
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
          tags
          cover {
            childImageSharp {
              gatsbyImageData(width: 1920)
            }
          }
        }
      }
    }
  }
`;
