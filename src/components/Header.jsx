import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/logo.png";
import search from "../assets/search.png";

export default function Header() {
  return (
    <header className="header">
      <ul className="leftHeader">
        <li>
          <NavLink to="/">
            <img src={logo} alt="logo" className="logo" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/funzone" className="links">
            FUNZONE
          </NavLink>
        </li>
        <li>
          <NavLink to="/testimonials" className="links">
            TESTIMONIALS
          </NavLink>
        </li>
      </ul>
      <ul className="rightHeader">
        <li>
          {" "}
          <img src={search} alt="search" className="search" />
        </li>
      </ul>
    </header>
  );
}
