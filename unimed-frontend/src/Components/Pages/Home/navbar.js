import React from "react";
import "./nav.css";

function NavBar() {
  return (
    <nav>
      <div className="nav__logo">UniMed</div>
      <ul className="nav__links">
        <li className="link">
          <a href="./">Home</a>
        </li>
        <li className="link">
          <a href="/Services">Services</a>
        </li>
        <li className="link">
          <a href="/Members">Staff</a>
        </li>
        <li className="link">
          <a href="/ContactUs">Contact</a>
        </li>
      </ul>
      <div className="nav__buttons">
        <a href="/CommonLogin">
          <button className="btnhp">Sign In</button>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
