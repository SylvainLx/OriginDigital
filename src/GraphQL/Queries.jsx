import { gql } from "@apollo/client";

export const GET_VIDEOS = gql`
  query allVideos {
    allVideos(limit: 4) {
      items {
        id
        name
        poster
      }
      cursor {
        after
      }
    }
  }
`;

export const GET_FUNZONE_VIDEOS = gql`
  query allVideos {
    allVideos(tags: "Funzone", limit: 4) {
      items {
        id
        name
        poster
      }
      cursor {
        after
      }
    }
  }
`;

export const GET_TESTIMONIALES_VIDEOS = gql`
  query allVideos {
    allVideos(tags: "Testimoniales", limit: 4) {
      items {
        id
        name
        poster
      }
      cursor {
        after
      }
    }
  }
`;

export const GET_VIDEO_BY_ID = gql`
  query video {
    video(id: $id) {
      id
      name
      poster
    }
  }
`;
