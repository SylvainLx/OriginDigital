import React from "react";
import { useQuery } from "@apollo/client";
import { GET_VIDEOS } from "../GraphQL/Queries";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

import "../styles/videoCard.css";
import "../styles/Home.css";
import Background from "../assets/OTT-Whitelabel-Background.png";

function DisplayVideos() {
  const { loading, error, data } = useQuery(GET_VIDEOS);
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

export default function Home() {
  return (
    <div className="home">
      <ReactPlayer
        url={`${process.env.LIVE_STREAM_URL}`}
        controls={true}
        light={Background}
        width="100%"
        height="100%"
      />
      <h2 className="title">ALL VIDEOS</h2>
      <div className="cardContainer">
        {" "}
        <DisplayVideos />
      </div>
      <Link className="showMore" to="/">
        SHOW MORE
      </Link>{" "}
    </div>
  );
}
