import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
  Router,
  useSearchParams,
  useNavigate,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";
import Video from "./pages/Video/Video.jsx";
import Search from "./pages/Search/Search.jsx";

function App() {
  const [sidebar, setSidebar] = useState(true);

  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path="/results" element={<Search sidebar={sidebar} />} />
        <Route
          path="/video/:categoryId/:videoId"
          element={<Video sidebar={sidebar} />}
        />
      </Routes>
    </div>
  );
}

export default App;
