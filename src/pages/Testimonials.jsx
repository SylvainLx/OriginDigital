import React from "react";
import { useQuery } from "@apollo/client";
import { GET_TESTIMONIALES_VIDEOS } from "../GraphQL/Queries";

import "../styles/Funzone.css";

function DisplayTestimonials() {
  const { loading, error, data } = useQuery(GET_TESTIMONIALES_VIDEOS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.allVideos.items.map((video) => (
    <div key={video.id} className="videoCard">
      <img
        src={video.poster}
        alt="posterFunzone"
        className="imgPlaceholder"
      ></img>
      <h3 className="titleCard">{video.name}</h3>
    </div>
  ));
}
export default function Testimonials() {
  return (
    <div>
      <h2>Testimonials</h2>
      <div className="cardContainer">
        {" "}
        <DisplayTestimonials />
      </div>
      <p className="showMore">SHOW MORE</p>
    </div>
  );
}
