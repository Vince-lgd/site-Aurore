import React from "react";
import { Link } from "react-router-dom";
import Categorys from "./Categorys";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="home__img">
          <img src="img1.png" alt="home" />
        </div>
        <div className="home__img__text">
          <p>UPCYCLING - SECONDE MAIN</p>
          <div className="home__img__text__dec">
            <Link to="/boutique">
              <p>Découvrir</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="infos">
        <h2>Nos Articles</h2>
        <p>Printemps / Été / Automne / Hiver</p>
        <p>100 % à partir de tissus recyclé.</p>
      </div>
      <div>
        <Categorys />
      </div>
    </>
  );
};

export default Home;
