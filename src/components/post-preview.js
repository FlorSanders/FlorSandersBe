import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { A, P, H3, H4 } from ".";
import { formatIsoDate } from "../utils";

function PostPreview({ post, index, className, ...props }) {
  const { id, slug, title, subtitle, excerpt, date, cover } = post;

  let containerClassName = "";
  const groupIndex = Math.floor(index / 3);
  if (
    (index % 3 === 0 && groupIndex % 2 === 0) ||
    (index % 3 === 2 && groupIndex % 2 === 1)
  ) {
    containerClassName = "xl:flex-row xl:col-span-2 xl:row-span-1";
  } else if (
    (index % 3 === 1 && groupIndex % 2 === 0) ||
    (index % 3 === 0 && groupIndex % 2 === 1)
  ) {
    containerClassName = "xl:flex-col xl:col-span-1 xl:row-span-2";
  } else if (
    (index % 3 === 2 && groupIndex % 2 === 0) ||
    (index % 3 === 1 && groupIndex % 2 === 1)
  ) {
    containerClassName = "xl:flex-row-reverse xl:col-span-2 xl:row-span-1";
  }

  return (
    <div
      key={id}
      className={`flex my-4 md:my-8 md:mx-8 border border-black dark:border-white rounded-lg overflow-hidden col-span-3 flex-col ${
        index % 2 ? "lg:flex-row-reverse" : "lg:flex-row"
      } ${containerClassName} ${className}`}
      {...props}
    >
      <A to={`/${slug}`} className="flex-1 overflow-hidden">
        <GatsbyImage
          image={getImage(cover)}
          alt={`${title} cover image`}
          className="lg:aspect-square w-full h-full"
        />
      </A>
      <div className="flex-1 py-4 px-8 flex flex-col justify-center">
        <A to={`/${slug}`}>
          <H3 className="md:text-3xl">{title}</H3>
        </A>
        <H4>{subtitle}</H4>
        <P className="pt-2">{excerpt}</P>
        <span className="font-poppins pt-2">{formatIsoDate(date)}</span>
      </div>
    </div>
  );
}

PostPreview.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    excerpt: PropTypes.node,
    date: PropTypes.string,
    cover: PropTypes.object,
  }),
  index: PropTypes.number,
  className: PropTypes.string,
};

export default PostPreview;
