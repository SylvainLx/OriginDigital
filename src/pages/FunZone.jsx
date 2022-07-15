import React from "react";
import { useQuery } from "@apollo/client";
import { GET_FUNZONE_VIDEOS } from "../GraphQL/Queries";

import "../styles/videoCard.css";
import "../styles/Funzone.css";

function DisplayFunzone() {
  const { loading, error, data } = useQuery(GET_FUNZONE_VIDEOS);
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

export default function FunZone() {
  return (
    <div className="funzone">
      <h2>FunZone</h2>
      <div className="cardContainer">
        {" "}
        <DisplayFunzone />
      </div>
      <p className="showMore">SHOW MORE</p>
    </div>
  );
}
