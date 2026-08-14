import React from "react";
import "./Video.css";
import PlayVideo from "../../components/PlayVideo/PlayVideo";
import Recommended from "../../components/Recommended/Recommended";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

function Video() {
  const { videoId, categoryId } = useParams();

  return (
    <div className="play-container">
      <PlayVideo videoId={videoId} />
      <Recommended videoId={videoId} categoryId={categoryId} />
    </div>
  );
}

export default Video;
