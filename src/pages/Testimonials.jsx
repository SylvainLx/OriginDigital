import React from "react";
import { useQuery } from "@apollo/client";
import { GET_TESTIMONIALES_VIDEOS } from "../GraphQL/Queries";
import { Link } from "react-router-dom";

import "../styles/videoCard.css";
import "../styles/Testimonials.css";

function DisplayTestimonials() {
  const { loading, error, data } = useQuery(GET_TESTIMONIALES_VIDEOS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.allVideos.items.map((video) => (
    <Link key={video.id} className="videoCard" to={`/video/${video.id}`}>
      <img
        src={video.poster}
        alt="posterFunzone"
        className="imgPlaceholder"
      ></img>
      <h3 className="titleCard">{video.name}</h3>
    </Link>
  ));
}
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
