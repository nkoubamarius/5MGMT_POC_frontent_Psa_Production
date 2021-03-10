import React from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Image from "../images/delivery.svg";
import Work from "../images/work.svg";
import Pref from "../images/pref.svg";
import Email from "../images/emails.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Header />
      <div className="home__body">
        <Sidebar />
        <div className="body">
          <div className="banner">
            <h2>Bienvenue sur PSA Production</h2>
          </div>
          <div className="home__header">
            <Link to="/supplier">
              <div className="card__model">
                <img src={Image} alt="Fournisseurs" height="170" width="170" />
                <h2 className="description">Fournisseurs</h2>
              </div>
            </Link>
            <Link to="/home">
              <div className="card__model">
                <img src={Work} alt="Fournisseurs" height="170" width="170" />
                <h2 className="description">Employés</h2>
              </div>
            </Link>
            <Link to="/home">
              <div className="card__model">
                <img src={Email} alt="Fournisseurs" height="170" width="170" />
                <h2 className="description">Emails</h2>
              </div>
            </Link>
            <Link to="/home">
              <div className="card__model">
                <img src={Pref} alt="Fournisseurs" height="170" width="170" />
                <h2 className="description">Monitoring</h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
