import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { IoLogoGithub } from "react-icons/io5";
import { A } from ".";
import { formatIsoDate, formatGithubUrl } from "../utils";

function ProjectContent({ project }) {
  const {
    cover,
    date,
    github,
    technologies,
    title,
    url,
    for: organizations,
  } = project;

  return (
    <>
      {url ? (
        <A to={url} className="text-xl sm:text-2xl font-poppins">
          {title}
        </A>
      ) : (
        <h3 className="text-xl sm:text-2xl font-poppins">{title}</h3>
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
        width={750}
        quality={95}
        className="w-full aspect-video border-2 border-black rounded-lg"
        alt={`${title} cover image`}
      />
      {technologies && Array.isArray(technologies) ? (
        <div className="flex flex-row flex-wrap">
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
