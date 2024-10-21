import React from "react";
import NavPart2 from "./NavPart2";

const Navbar = () => {
  return (
    <nav className="bg-white flex py-5 px-10 items-center justify-between">
      <h2 className="text-2xl">Paritosh</h2>
      <NavPart2/>
    </nav>
  );
};

export default Navbar;
