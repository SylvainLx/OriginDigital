import React from "react";
import { Link } from "react-router-dom";
import DisplayTestimonials from "../components/DisplayTestimonials";

import "../styles/videoCard.css";
import "../styles/Testimonials.css";

export default function Testimonials() {
  return (
    <div className="testimonials">
      <h2>Testimonials</h2>
      <div className="cardContainer">
        {" "}
        <DisplayTestimonials />
      </div>
      <Link className="showMore" to="/">
        SHOW MORE
      </Link>
    </div>
  );
}
