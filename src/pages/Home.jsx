import React from "react";
import ReactPlayer from "react-player";
import DisplayVideos from "../components/DisplayVideos";
import { Link } from "react-router-dom";

import "../styles/videoCard.css";
import "../styles/Home.css";
import Background from "../assets/OTT-Whitelabel-Background.png";

export default function Home() {
  return (
    <div className="home">
      <ReactPlayer
        url={`${process.env.REACT_APP_LIVE_STREAM_URL}`}
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
