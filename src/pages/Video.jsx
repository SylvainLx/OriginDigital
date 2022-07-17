import React from "react";
import { useQuery, gql } from "@apollo/client";
import { GET_VIDEOS, GET_VIDEO_BY_ID } from "../GraphQL/Queries";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import "../styles/Video.css";
import Background from "../assets/OTT-Whitelabel-Background.png";

function DisplayFunzone() {
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
