import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bulma/css/bulma.min.css";
import "../../App.css"

export default function Navbar() {
  const [isActive, setisActive] = useState(false);

  return (
    <nav
      className="navbar is-primary is-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand image px-5 py-4">
        <div className="navbar-item">
        </div>

        <div
          onClick={() => {
            setisActive(!isActive);
          }}
          role="button"
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        id="navbarBasicExample"
        className={`navbar-menu ${isActive ? "is-active" : ""}`}
      >
        <div className="navbar-end">
          <div className="navbar-item">
            <Link className="navbar-item is-size-5" to="form1">
              Form 1
            </Link>
            <Link className="navbar-item is-size-5" to="form2">
              Form 2
            </Link>
            <Link className="navbar-item is-size-5" to="form3">
              Form 3
            </Link>
            <Link className="navbar-item is-size-5" to="form4">
              Form 4
            </Link>
            <Link className="navbar-item is-size-5" to="form5">
              Form 5
            </Link>
            <Link className="navbar-item is-size-5" to="form6">
              Form 6
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
