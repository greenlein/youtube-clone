import React from "react";
import "./Sidebar.css";
import home from "../../assets/home.png";
import gameIcon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";

function Sidebar({ sidebar, category, setCategory }) {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="shortcut-links">
        <div
          className={`side-link ${category === 0 ? "active" : ""}`}
          onClick={() => setCategory(0)}
        >
          <span className='category-img'><img src={home} alt="" /></span>
          <p>Home</p>
        </div>
        <div
          className={`side-link ${category === 20 ? "active" : ""}`}
          onClick={() => setCategory(20)}
        >
          <span className='category-img'><img src={gameIcon} alt="" /></span>
          <p>Gaming</p>
        </div>
        <div
          className={`side-link ${category === 2 ? "active" : ""}`}
          onClick={() => setCategory(2)}
        >
          <span className='category-img'><img src={automobiles} alt="" /></span>
          <p>Automobiles</p>
        </div>
        <div
          className={`side-link ${category === 17 ? "active" : ""}`}
          onClick={() => setCategory(17)}
        >
          <span className='category-img'><img src={sports} alt="" /></span>
          <p>Sports</p>
        </div>
        <div
          className={`side-link ${category === 24 ? "active" : ""}`}
          onClick={() => setCategory(24)}
        >
          <span className='category-img'><img src={entertainment} alt="" /></span>
          <p>Entertainment</p>
        </div>
        <div
          className={`side-link ${category === 28 ? "active" : ""}`}
          onClick={() => setCategory(28)}
        >
          <span className='category-img'><img src={tech} alt="" /></span>
          <p>Technology</p>
        </div>
        <div
          className={`side-link ${category === 10 ? "active" : ""}`}
          onClick={() => setCategory(10)}
        >
          <span className='category-img'><img src={music} alt="" /></span>
          <p>Music</p>
        </div>
        <div
          className={`side-link ${category === 22 ? "active" : ""}`}
          onClick={() => setCategory(22)}
        >
          <span className='category-img'><img src={blogs} alt="" /></span>
          <p>Blogs</p>
        </div>
        <div
          className={`side-link ${category === 25 ? "active" : ""}`}
          onClick={() => setCategory(25)}
        >
          <span className='category-img'><img src={news} alt="" /></span>
          <p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className={`side-link`} onClick={() => setCategory(0)}>
          <img src={jack} alt="" />
          <p>PewDiePie</p>
        </div>
        <div className={`side-link`} onClick={() => setCategory(0)}>
          <img src={simon} alt="" />
          <p>MrBeast</p>
        </div>
        <div className={`side-link`} onClick={() => setCategory(0)}>
          <img src={tom} alt="" />
          <p>Justin Bieber</p>
        </div>
        <div className={`side-link`} onClick={() => setCategory(0)}>
          <img src={megan} alt="" />
          <p>5-Minute Crafts</p>
        </div>
        <div className={`side-link`} onClick={() => setCategory(0)}>
          <img src={cameron} alt="" />
          <p>Nas Daily</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
