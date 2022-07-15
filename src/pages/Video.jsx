import React from "react";
import { useQuery, gql } from "@apollo/client";
import { GET_VIDEOS, GET_VIDEO_BY_ID } from "../GraphQL/Queries";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";

import "../styles/Video.css";

function DisplayFunzone() {
  const { loading, error, data } = useQuery(GET_VIDEOS);
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
        url="https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8"
        controls={true}
        width="100%"
        height="100%"
      />
      {/* ) : null} */}
      <div className="cardContainer">
        {" "}
        <DisplayFunzone />
        <p className="showMore">SHOW MORE</p>
      </div>
    </div>
  );
}
