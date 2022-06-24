import React from "react";
import PropTypes from "prop-types";
import { Header, Footer, Seo } from ".";
import { useColorTheme } from "../utils";

function Layout({ page, title, image, children, className, ...props }) {
  const [colorTheme, toggleColorTheme] = useColorTheme();

  return (
    <div className={`w-full ${colorTheme}`}>
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
          theme={[colorTheme, toggleColorTheme]}
        >
          <h1 className="text-6xl sm:text-8xl md:text-9xl text-center text-white font-poppins font-bold">
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
