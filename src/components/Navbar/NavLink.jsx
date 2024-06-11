import React from "react";
import { Link } from "react-scroll";
const NavLink = ({ href, link }) => {
  return (
    <li className="list-none cursor-pointer mr-8">
      <Link
        to={href}
        spy={true}
        smooth={true}
        duration={500}
        offset={-50}
        className="font-medium font-dm_sans hover:text-pink-500 transition-all duration-300"
      >
        {link}
      </Link>
    </li>
  );
};

export default NavLink;
