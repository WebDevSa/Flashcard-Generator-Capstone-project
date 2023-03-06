/*in this file we are making the header of our website, header contains the image of Almabetter logo  */
import React from "react";
import logo from "../images/alma log edfc81b31b.png";

const Header = () => {
  return (
    <div className=" shadow-lg shadow-zinc-600 bg-white ">
      <img className=" pt-1 pb-0 ml-2 sm:w-auto  " src={logo} alt="logo" />
    </div>
  );
};

export default Header;