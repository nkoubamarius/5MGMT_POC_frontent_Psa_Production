import React, { useState } from "react";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import HomeWorkOutlinedIcon from "@material-ui/icons/HomeWorkOutlined";
import BusinessCenterOutlinedIcon from "@material-ui/icons/BusinessCenterOutlined";
import NotificationsActiveOutlinedIcon from "@material-ui/icons/NotificationsActiveOutlined";
import LocationCityOutlinedIcon from "@material-ui/icons/LocationCityOutlined";
import { Link } from "react-router-dom";
const Header = () => {
  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (e, { title }) => this.setActiveItem(title);

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Groupe_PSA_logo.svg/1200px-Groupe_PSA_logo.svg.png"
          alt="PSA logo"
        />
      </div>
      <div className="header__right">
        <Link to="/home">
          <HeaderOption
            active={activeItem === "Accueil"}
            onClick={handleItemClick}
            title="Accueil"
            Icon={HomeWorkOutlinedIcon}
          />
        </Link>
        <Link to="/supplier">
          <HeaderOption title="Fournisseurs" Icon={LocationCityOutlinedIcon} />
        </Link>
        <Link to="/home">
          <HeaderOption title="Process" Icon={BusinessCenterOutlinedIcon} />
        </Link>

        <HeaderOption
          title="Notifications"
          Icon={NotificationsActiveOutlinedIcon}
        />
        <HeaderOption avatar="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png" />
      </div>
    </div>
  );
};

export default Header;
