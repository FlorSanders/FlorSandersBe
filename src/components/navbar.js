import React, { useState } from "react";
import PropTypes from "prop-types";
import { IoSunnyOutline, IoMoonOutline, IoMenu } from "react-icons/io5";
import { Navlink, Button } from ".";

function Navbar({ links, theme, ...props }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, toggleDarkMode] = theme;

  return (
    <header
      className="relative flex flex-row justify-between items-center py-5 px-10 lg:px-20 dark:bg-gray-900"
      itemScope
      itemType="https://schema.org/WPHeader"
      {...props}
    >
      <Navlink
        to="/"
        className="w-48 text-center md:px-4 text-2xl sm:text-3xl sm:w-56 md:text-4xl md:w-64"
      >
        Flor Sanders
      </Navlink>
      <div className="flex flex-row items-center space-x-4">
        <nav
          className={`font-poppins text-center rounded-lg z-50 absolute right-10 top-20 bg-white dark:bg-gray-900 ${
            menuOpen ? "block" : "hidden"
          } lg:block lg:relative lg:right-0 lg:top-0`}
          itemScope
          itemType="https://schema.org/SiteNavigationElement"
        >
          <ul className="flex flex-col lg:flex-row items-center lg:space-x-4">
            {links.map(({ to, label }) => (
              <li key={to}>
                <Navlink className="text-xl md:text-2xl w-36" to={`/${to}`}>
                  {label}
                </Navlink>
              </li>
            ))}
          </ul>
        </nav>
        <Button onClick={toggleDarkMode} className="text-3xl md:text-4xl px-2">
          {isDarkMode ? <IoMoonOutline /> : <IoSunnyOutline />}
        </Button>
        <Button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl md:text-4xl px-2 lg:hidden"
        >
          <IoMenu />
        </Button>
      </div>
    </header>
  );
}

Navbar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string,
      label: PropTypes.string,
    })
  ).isRequired,
  theme: PropTypes.array.isRequired,
};

export default Navbar;
