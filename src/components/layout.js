import React from "react";
import PropTypes from "prop-types";
import useDarkMode from "use-dark-mode";
import { graphql, useStaticQuery } from "gatsby";
import { Header, Footer, Seo } from ".";

function Layout({ page, title, image, children, className, ...props }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);
  const siteUrl = data.site.siteMetadata.siteUrl;

  const { value, toggle } = useDarkMode(false, {
    classNameDark: "dark",
    classNameLight: "light",
    storageKey: "theme",
    minify: true,
  });

  return (
    <div
      itemScope
      itemType="https://schema.org/WebPage"
      itemRef="license"
      itemID={page ? `${siteUrl}/${page}` : null}
    >
      <Seo page={page} title={title} />
      <div className="min-h-screen flex flex-col">
        <Header
          links={[
            {
              to: "",
              label: "About",
            },
            {
              to: "projects",
              label: "Projects",
            },
            {
              to: "writing",
              label: "Writing",
            },
          ]}
          page={page}
          image={image}
          theme={[value, toggle]}
        >
          <h1
            className="text-6xl sm:text-8xl md:text-9xl text-center text-white font-poppins font-bold"
            itemProp="name"
          >
            {title}
          </h1>
        </Header>
        <main
          className={`flex flex-col flex-grow items-center py-4 dark:bg-gray-900 dark:text-white ${className}`}
          {...props}
        >
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  page: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Layout;
