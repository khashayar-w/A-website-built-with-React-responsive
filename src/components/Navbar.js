import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain,faAnchor } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    return (
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <div className="right-section">
              <Link to="/">Home</Link>
              <Link to="/service">Service</Link>
              <Link to="/products">Products</Link>
              <Link id="sign-up" to="/signup">Sign up</Link>
            </div>
            <div className="left-section">
              <a className="brand" href="#">
                Vision <FontAwesomeIcon icon={faBrain}/>
              </a>
            </div>
          </div>
        </nav>
      </>
    );
}

export default Navbar;