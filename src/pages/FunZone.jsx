import React from "react";
import { Link } from "react-router-dom";
import DisplayFunzone from "../components/DisplayFunzone";

import "../styles/videoCard.css";
import "../styles/Funzone.css";

export default function FunZone() {
  return (
    <div className="funzone">
      <h2>FunZone</h2>
      <div className="cardContainer">
        {" "}
        <DisplayFunzone />
      </div>
      <Link className="showMore" to="/">
        SHOW MORE
      </Link>{" "}
    </div>
  );
}
