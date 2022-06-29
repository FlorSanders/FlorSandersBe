import React from "react";
import PropTypes from "prop-types";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import { P, Ul, Ol, Li, A, H1, H2, H3, H4, H5, H6 } from ".";

function MDXContent({ children, ...props }) {
  return (
    <MDXProvider
      components={{
        p: (props) => <P {...props} />,
        /* eslint-disable jsx-a11y/heading-has-content */
        h1: (props) => <H1 {...props} />,
        h2: (props) => <H2 {...props} />,
        h3: (props) => <H3 {...props} />,
        h4: (props) => <H4 {...props} />,
        h5: (props) => <H5 {...props} />,
        h6: (props) => <H6 {...props} />,
        blockquote: (props) => (
          <div
            {...props}
            className="bg-gray-200 dark:bg-gray-700 px-6 py-4 border-l-4 border-gray-500"
          />
        ),
        ul: (props) => (
          <Ul className="list-outside ml-6 space-y-1" {...props} />
        ),
        ol: (props) => (
          <Ol className="list-outside ml-6 space-y-1" {...props} />
        ),
        li: (props) => <Li {...props} />,
        // table: TODO,
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
    >
      <div {...props}>
        <MDXRenderer>{children}</MDXRenderer>
      </div>
    </MDXProvider>
  );
}

MDXContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MDXContent;
