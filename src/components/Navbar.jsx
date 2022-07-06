import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__text">
        <Link to="/">
          <h2>AUMA</h2>
        </Link>
        <p>UPCYCLING - SECONDE MAIN</p>
      </div>
      <div className="navbar__text__link">
        <Link to="/">Accueil</Link>

        <Link to="/boutique">Boutique</Link>

        <Link to="/instagram">Instagram</Link>

        <Link to="/contact">Contact</Link>

        <Link to="/se connecter">Se connecter</Link>
      </div>
    </div>
  );
};

export default Navbar;
