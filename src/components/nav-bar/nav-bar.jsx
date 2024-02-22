import React from "react";
import "./nav-bar.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";

function NavBar() {
  return (
    <nav>
      <NavLink to="/">
        <Logo />
      </NavLink>
    </nav>
  );
}

export default NavBar;
