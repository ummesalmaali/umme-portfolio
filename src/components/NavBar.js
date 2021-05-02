import React from "react";

import './NavBar.css'
// React font-awesome//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark w-100">
<div >

  <a className="navbar-brand" href="#">Umme Salma Ali</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}></FontAwesomeIcon>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#about">About Me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#blogs">Blogs</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#services">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#portfolio">Portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#contact">Contact</a>
      </li>
      
    </ul>
   
  </div>
</div>
</nav>
    );
};

export default NavBar;