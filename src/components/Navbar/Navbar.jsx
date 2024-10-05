import React from "react";

import logo from "../../assets/logo.png";
import search from "../../assets/search_icon.svg";
import bellicon from "../../assets/bell_icon.svg";
const Navbar = () => {
  return (
    <div>
      <div className="flex bg-zinc-900 text-white">
        <img src={logo} className="w-32 p-2 h-10 mx-2" alt="" />
        <ul className="flex gap-4 font-mono font-sm items-center text-xl">
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

        <img src={bellicon} alt="icons " />
      </div>
    </div>
  );
};

export default Navbar;
