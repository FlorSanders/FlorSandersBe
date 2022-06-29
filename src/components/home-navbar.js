import React from "react";
import PropTypes from "prop-types";
import { Navlink } from ".";

function HomeNavbar({ links, ...props }) {
  return (
    <nav className="w-full justify-self-end" {...props}>
      <ul className="w-full flex flex-row justify-center items-center py-10 space-x-36 text-4xl text-center ">
        {links.map(({ to, label }) => (
          <li key={to}>
            <Navlink to={`/${to}`} size="4xl">
              {label}
            </Navlink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

HomeNavbar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string,
      label: PropTypes.string,
    })
  ),
};

export default HomeNavbar;
