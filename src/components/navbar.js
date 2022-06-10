import React, { useState } from "react";
import PropTypes from "prop-types";
import { IoMenu } from "react-icons/io5";
import { Navlink } from ".";

function Navbar({ links, ...props }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="relative flex flex-row justify-between items-center py-5 px-10 lg:px-20"
      {...props}
    >
      <Navlink
        to="/"
        className="w-48 text-center md:px-4 text-2xl sm:text-3xl sm:w-56 md:text-4xl md:w-64"
      >
        Flor Sanders
      </Navlink>
      <button
        type="button"
        className="block hover:bg-gray-100 p-2 rounded-lg transition-colors duration-300 lg:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <IoMenu className="text-3xl md:text-4xl" />
      </button>
      <nav
        className={`font-poppins text-center rounded-lg px-4 z-50 absolute right-10 top-20 bg-white ${
          menuOpen ? "block" : "hidden"
        } lg:block lg:relative lg:right-0 lg:top-0 lg:px-0`}
      >
        <ul className="flex flex-col lg:flex-row items-center lg:space-x-10">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Navlink className="text-xl md:text-2xl w-32" to={`/${to}`}>
                {label}
              </Navlink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string,
      label: PropTypes.string,
    })
  ).isRequired,
};

export default Navbar;
