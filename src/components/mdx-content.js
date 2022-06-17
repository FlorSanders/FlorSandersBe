import React from "react";
import PropTypes from "prop-types";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import { P, Ul, Ol, Li, A } from ".";

function MDXContent({ children, ...props }) {
  return (
    <MDXProvider
      components={{
        p: (props) => <P {...props} />,
        /* eslint-disable jsx-a11y/heading-has-content */
        h1: (props) => <h1 {...props} className="font-poppins pt-2 text-4xl" />,
        h2: (props) => <h2 {...props} className="font-poppins pt-2 text-3xl" />,
        h3: (props) => <h3 {...props} className="font-poppins pt-2 text-2xl" />,
        h4: (props) => <h4 {...props} className="font-poppins pt-2 text-xl" />,
        h5: (props) => <h5 {...props} className="font-poppins pt-2 text-xl" />,
        h6: (props) => <h6 {...props} className="font-poppins pt-2 text-xl" />,
        blockquote: (props) => (
          <div
            {...props}
            className="bg-gray-200 px-6 py-4 border-l-4 border-gray-400"
          />
        ),
        ul: (props) => (
          <Ul className="list-outside ml-6 space-y-2" {...props} />
        ),
        ol: (props) => (
          <Ol className="list-outside ml-6 space-y-2" {...props} />
        ),
        li: (props) => <Li {...props} />,
        // table: TODO,---
        // tr: TODO,
        // td: TODO,
        // th: TODO,
        // code: TODO,
        em: ({ className, ...props }) => (
          <em
            {...props}
            className={`text-lg font-poppins font-bold ${className}`}
          />
        ),
        strong: ({ className, ...props }) => (
          <strong
            {...props}
            className={`text-lg font-poppins font-bold ${className}`}
          />
        ),
        delete: (props) => <P {...props} className="line-through" />,
        // inlineCode: TODO,
        // hr: TODO,
        a: ({ href, ...props }) => <A to={href} {...props} />,
      }}
      {...props}
    >
      <MDXRenderer>{children}</MDXRenderer>
    </MDXProvider>
  );
}

MDXContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MDXContent;
