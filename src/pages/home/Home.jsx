import React from "react";
import "./Home.css";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Feed from "../../components/Feed/Feed.jsx";

function Home({ sidebar }) {
  return (
    <div>
      <Sidebar sidebar={sidebar} />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <Feed />
      </div>
    </div>
  );
}

export default Home;
