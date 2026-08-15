import React from "react";
import "./Navbar.css";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import menuIcon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search.png";
import uploadIcon from "../../assets/upload.png";
import moreIcon from "../../assets/more.png";
import notificationIcon from "../../assets/notification.png";
import profileIcon from "../../assets/jack.png";

function Navbar({ setSidebar }) {
  const navigate = useNavigate();

  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          src={menuIcon}
          className="menu-icon"
          alt=""
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
        />
        <Link to="/">
          <img src={logo} className="logo" alt="" />
        </Link>
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input
            type="text"
            placeholder="search"
            onKeyDown={(e) =>
              e.key === "Enter" &&
              navigate({
                pathname: `/results`,
                search: `?search_query=${e.target.value}`,
              })
            }
          />
          <img src={searchIcon} alt="" />
        </div>
      </div>
      <div className="nav-right flex-div">
        <img src={uploadIcon} alt="" data-disabled />
        <img src={moreIcon} alt="" data-disabled />
        <img src={notificationIcon} alt="" data-disabled />
        <img src={profileIcon} className="user-icon" alt="" data-disabled />
      </div>
    </nav>
  );
}

export default Navbar;
