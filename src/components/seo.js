import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function Seo({ page, title, description, ...props }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          creator
        }
      }
    }
  `);

  const {
    title: siteTitle,
    description: siteDescription,
    siteUrl,
    creator: siteCreator,
  } = data.site.siteMetadata;

  let _description = description || siteDescription;
  let _title = title ? `${siteTitle} | ${title}` : siteTitle;

  return (
    <Helmet
      title={_title}
      meta={[
        {
          name: "description",
          content: _description,
        },
        {
          property: "dc:title",
          content: _title,
        },
        {
          property: "og:title",
          content: _title,
        },
        {
          property: "og:url",
          content: siteUrl,
        },
        {
          property: "og:description",
          content: _description,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "twitter:card",
          content: "summary",
        },
        {
          property: "twitter:title",
          content: _title,
        },
        {
          property: "twitter:url",
          content: siteUrl,
        },
        {
          property: "twitter:description",
          content: _description,
        },
        {
          property: "twitter:creator",
          content: siteCreator,
        },
      ]}
    />
  );
}

Seo.propTypes = {
  page: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Seo;
