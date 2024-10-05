import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search from "../../assets/search_icon.svg";
import bellicon from "../../assets/bell_icon.svg";
const Navbar = () => {
  return (
    <div>
      <div className="Nav-left">
        <img src={logo} alt="" />
        <ul>
          <li>home</li>
          <li>Tv shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My-list</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="Nav-right">
        <img src={search} alt="icons " />
        <p>Children</p>
        <img src={bellicon} alt="icons " />
      </div>
    </div>
  );
};

export default Navbar;
