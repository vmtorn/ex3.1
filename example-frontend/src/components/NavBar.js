import React from "react";
import toskalogo from "../assets/toskalogo.svg";

const NavBar = () => (
  <div className="navbar">
    <img src={toskalogo} style={{ height: "100%" }} alt="toska" />
    <p>Terve</p>
  </div>
);

export default NavBar
