import { Avatar } from "@material-ui/core";
import React from "react";
import HeaderOption from "../Header/HeaderOption";
import "./Sidebar.css";
import HomeWorkOutlinedIcon from "@material-ui/icons/HomeWorkOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://www.setaswall.com/wp-content/uploads/2017/06/Linkedin-Backgrounds-14-1400-x-350-340x220.png"
          alt=""
        />
        <Avatar
          src="https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-vector-user-young-boy-avatar-icon-png-image_1538408.jpg"
          className="sidebar__avatar"
        />

        <h2>Admin</h2>
        <h4>connecté</h4>
      </div>
      <div className="sidebar__stats">
        <Link to="/home">
          <HeaderOption title="Accueil" Icon={HomeWorkOutlinedIcon} />
        </Link>
        <br></br>
        <Link to="/supplier">
          <HeaderOption title="Fournisseurs" Icon={PeopleAltOutlinedIcon} />
        </Link>

        <br></br>
        <HeaderOption title="Emails" Icon={MailOutlineOutlinedIcon} />
        <br></br>
        <HeaderOption title="Employés" Icon={PeopleAltOutlinedIcon} />
        <br></br>
        <HeaderOption title="Commandes" Icon={LocalMallOutlinedIcon} />
        <br></br>
        <HeaderOption title="Parametres" Icon={SettingsOutlinedIcon} />
      </div>
    </div>
  );
};

export default Sidebar;
