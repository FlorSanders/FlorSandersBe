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
      file(relativePath: { eq: "profile-picture.jpg" }) {
        childImageSharp {
          fixed {
            src
          }
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
  const { src: profo } = data.file.childImageSharp.fixed;

  let _description = description || siteDescription;
  let _title = title ? `${siteTitle} | ${title}` : siteTitle;

  return (
    <Helmet
      title={_title}
      htmlAttributes={{
        lang: "en",
        itemscope: undefined,
        itemtype: "http://schema.org/WebSite",
        itemID: siteUrl,
      }}
      meta={[
        {
          itemprop: "name",
          content: _title,
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
          itemprop: "url",
          content: siteUrl,
        },
        {
          property: "og:url",
          content: siteUrl,
        },
        {
          itemprop: "description",
          content: _description,
        },
        {
          name: "description",
          content: _description,
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
          itemprop: "creator",
          content: `${siteUrl}/#me`,
        },
        {
          property: "twitter:creator",
          content: siteCreator,
        },
        {
          property: "twitter:image",
          content: `${siteUrl}${profo}`,
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
