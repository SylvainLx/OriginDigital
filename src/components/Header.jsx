import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import logoHeader from "../assets/logoHeader.png";
import character from "../assets/character.png";
import search from "../assets/search.png";

export default function Header() {
  return (
    <header className="header">
      <ul className="leftHeader">
        <li>
          <NavLink to="/">
            <img src={logoHeader} alt="logo header" className="logoHeader" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/funzone" className="links">
            FUN ZONE
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
          <img src={character} alt="character" className="character" />
        </li>
        <li>
          {" "}
          <img src={search} alt="search" className="search" />
        </li>
      </ul>
    </header>
  );
}
