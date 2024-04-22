import React from "react";
import "../App.css";

function Navbar() {
  return (
    <nav>
      <div className="column">
        <a className="nav" href="/">
          Home
        </a>
        <a className="nav" href="/about">
          About
        </a>
        <a className="nav" href="/contact">
          Contact
        </a>
      </div>
    </nav>
  );
}
export default Navbar;
