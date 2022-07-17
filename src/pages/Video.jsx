import React from "react";
import { gql } from "@apollo/client";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import DisplayFunzone from "../components/DisplayFunzone";

import "../styles/Video.css";
import Background from "../assets/OTT-Whitelabel-Background.png";

export default function Video() {
  const { id } = useParams();
  const GET_VIDEO_BY_ID = gql`
    query video {
      video(id: "${id}") {
        id
        name
        poster
      }
    }
  `;
  console.log(GET_VIDEO_BY_ID);

  return (
    <div className="videoContainer">
      {/* {id === video.id ? ( */}
      <ReactPlayer
        url={`${process.env.REACT_APP_LIVE_STREAM_URL}`}
        controls={true}
        light={Background}
        width="100%"
        height="100%"
      />
      {/* ) : null} */}
      <h2 className="title">More Videos</h2>
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
