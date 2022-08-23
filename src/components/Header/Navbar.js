import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_db19166c75710883691a33de7418ade1/grepsr.png"></img>
      <ul className="forms">
        <Link className="link" to="/form1">
          <li> Form 1</li>
        </Link>

        <Link className="link" to="/form2">
          <li>Form 2</li>
        </Link>

        <Link className="link" to="/form3">
          <li>Form 3</li>
        </Link>

        <Link className="link" to="/form4">
          <li>Form 4</li>
        </Link>

        <Link className="link" to="/form5">
          <li>Form 5</li>
        </Link>

        <Link className="link" to="/form6">
          <li>Form 6</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
