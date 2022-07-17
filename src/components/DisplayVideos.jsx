import { useQuery } from "@apollo/client";
import { GET_VIDEOS } from "../GraphQL/Queries";
import { Link } from "react-router-dom";

export default function DisplayVideos() {
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
