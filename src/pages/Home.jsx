import { useQuery } from "@apollo/client";
import { GET_VIDEOS } from "../GraphQL/Queries";

function DisplayVideos() {
  const { loading, error, data } = useQuery(GET_VIDEOS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.allVideos.items.map((video) => (
    <div key={video.id}>
      <h3>{video.name}</h3>
      <br />
      <b>About this location:</b>
      <p>{video.description}</p>
      <br />
    </div>
  ));
}

export default function Home() {
  return <DisplayVideos />;
}
