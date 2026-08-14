import React from "react";
import { useState } from "react";
import "./Home.css";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Feed from "../../components/Feed/Feed.jsx";

function Home({ sidebar }) {
  const [category, setCategory] = useState(0);

  return (
    <div>
      <Sidebar
        sidebar={sidebar}
        category={category}
        setCategory={setCategory}
      />
      <div className={`container container-animation ${sidebar ? "" : "large-container"}`}>
        <Feed category={category} />
      </div>
    </div>
  );
}

export default Home;
