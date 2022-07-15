import React from "react";
import { useQuery } from "@apollo/client";
import { GET_VIDEOS } from "../GraphQL/Queries";
import ReactPlayer from "react-player";

import Master from "../assets/master.m3u8";
import Background from "../assets/OTT-Whitelabel-Background.png";
import Video from "./Video";

import "../styles/videoCard.css";
import "../styles/Home.css";
import { Link } from "react-router-dom";
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
        url="https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8"
        controls={true}
        width="100%"
        height="100%"
      />
      <h2 className="title">ALL VIDEOS</h2>
      <div className="cardContainer">
        {" "}
        <DisplayVideos />
      </div>
      <p className="showMore">SHOW MORE</p>
    </div>
  );
}
