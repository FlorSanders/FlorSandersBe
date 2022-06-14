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
        h1: (props) => <h1 {...props} className="font-poppins text-6xl" />,
        h2: (props) => <h2 {...props} className="font-poppins text-5xl" />,
        h3: (props) => <h3 {...props} className="font-poppins text-4xl" />,
        h4: (props) => <h4 {...props} className="font-poppins text-3xl" />,
        h5: (props) => <h5 {...props} className="font-poppins text-2xl" />,
        h6: (props) => <h6 {...props} className="font-poppins text-xl" />,
        // blockquote: <blockqoute {...props} className="" />, // TODO
        ul: (props) => <Ul {...props} />,
        ol: (props) => <Ol {...props} />,
        li: (props) => <Li {...props} />,
        // table: TODO,---
        // tr: TODO,
        // td: TODO,
        // th: TODO,
        // code: TODO,
        em: (props) => (
          <em {...props} className="text-lg font-poppins font-bold" />
        ),
        strong: (props) => (
          <strong {...props} className="text-lg font-poppins font-bold" />
        ),
        delete: (props) => <P {...props} className="line-through" />,
        // inlineCode: TODO,
        // hr: TODO,
        a: (props) => <A {...props} />,
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
