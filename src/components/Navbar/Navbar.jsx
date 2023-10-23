import React from "react";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <h1> FORM </h1>
        </Link>
        <p className="navbar-description">A BASIC FORM USING REACT.JS</p>
      </div>
    </nav>

  );
}
