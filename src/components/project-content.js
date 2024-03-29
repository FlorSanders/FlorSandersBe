import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { IoLogoGithub } from "react-icons/io5";
import { A, H4 } from ".";
import { formatIsoDate, formatGithubUrl } from "../utils";

function ProjectContent({ project, index }) {
  const {
    cover,
    date,
    github,
    technologies,
    title,
    url,
    for: organizations,
  } = project;

  const Heading = (
    <H4
      className={`sm:text-2xl ${index % 2 ? "lg:text-right" : ""}`}
      itemProp="name"
    >
      {title}
    </H4>
  );

  return (
    <>
      {url ? (
        <A to={url} itemProp="url">
          {Heading}
        </A>
      ) : (
        Heading
      )}
      <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row flex-wrap">
        {organizations
          ? organizations.map(({ label, url }) => (
              <A key={url} to={url} className="pr-1">
                @{label}
              </A>
            ))
          : null}
      </div>
      {github && Array.isArray(github) ? (
        <div className="flex flex-row items-center flex-wrap">
          {github.map((ghUrl) => (
            <A
              key={ghUrl}
              to={ghUrl}
              className="flex flex-row items-center pr-1"
              itemProp="url"
            >
              <IoLogoGithub className="mr-1" />
              {formatGithubUrl(ghUrl)}
            </A>
          ))}
        </div>
      ) : null}
      <span className="font-poppins">
        {formatIsoDate(date, { day: undefined })}
      </span>
      <GatsbyImage
        image={getImage(cover)}
        className="w-full aspect-video border-2 border-black dark:border-white rounded-lg"
        alt={`${title} cover image`}
        itemProp="image"
      />
      {technologies && Array.isArray(technologies) ? (
        <div className="flex flex-row flex-wrap" itemProp="keywords">
          {technologies.map(({ label, url }) => (
            <A key={label} to={url} className="pr-1">
              #{label}
            </A>
          ))}
        </div>
      ) : null}
    </>
  );
}

ProjectContent.propTypes = {
  project: PropTypes.shape({
    cover: PropTypes.object,
    date: PropTypes.string,
    github: PropTypes.arrayOf(PropTypes.string),
    technologies: PropTypes.arrayOf(
      PropTypes.shape({ label: PropTypes.string, url: PropTypes.string })
    ),
    title: PropTypes.string,
    url: PropTypes.string,
    for: PropTypes.arrayOf(
      PropTypes.shape({ label: PropTypes.string, url: PropTypes.string })
    ),
  }),
};

export default ProjectContent;
