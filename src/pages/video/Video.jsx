import React from "react";
import "./Video.css";
import PlayVideo from "../../components/PlayVideo/PlayVideo";
import Recommended from "../../components/Recommended/Recommended";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useState } from "react";

function Video({ sidebar }) {
  const [category, setCategory] = useState(0);
  const { videoId, categoryId } = useParams();

  return (
    <div>
      <Sidebar
        sidebar={sidebar}
        category={category}
        setCategory={setCategory}
      />
      <div
        className={`play-container container container-animation ${sidebar ? "small-container" : ""}`}
      >
        <PlayVideo videoId={videoId} />
        <Recommended videoId={videoId} categoryId={categoryId} />
      </div>
    </div>
  );
}

export default Video;
