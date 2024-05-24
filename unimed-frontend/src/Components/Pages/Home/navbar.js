import React from "react";
import "./nav.css";

function NavBar() {
  return (
    <nav>
      <div className="nav__logo">UniMed</div>
      <ul className="nav__links">
        <li className="link">
          <a href="#">Home</a>
        </li>
        <li className="link">
          <a href="#">About Us</a>
        </li>
        <li className="link">
          <a href="#">Blog</a>
        </li>
        <li className="link">
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="nav__buttons">
        <a href="/logincat">
          <button className="btnhp">Sign In</button>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
