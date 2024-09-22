import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowTurnDown,faArrowTurnUp, faPlane} from "@fortawesome/free-solid-svg-icons"
function Navbar() {
  const [isVisible,setIsVisible]=useState(false)
  const handleBtn = ()=>{
    setTimeout(() => {
      setIsVisible(!isVisible)
    }, 200);
  }
    return (
      <>
        <nav className="navbar">
        
          <div className="navbar-container">
            <div className="right-section">
              <Link to="/">Home</Link>
              <Link to="/service">Service</Link>
              <Link to="/products">Products</Link>
              <Link id="signup" to="/signup">Sign up</Link>
            </div>
            <div className="left-section">
              <a className="brand" href="#">
                TRVL <FontAwesomeIcon icon={faPlane}/>
              </a>
            </div>
            <div className="hidden-items">
              <button className="Menu-Btn" type="button"  onClick={handleBtn} style={{color:isVisible?'red':'orange'}}>
                Menu<FontAwesomeIcon icon={isVisible?faArrowTurnUp:faArrowTurnDown}   />
              </button>
              {
                isVisible && (
                  <div className="hidden-list">
                    <Link to="/home">Home</Link>
                    <Link to="/service">Sevice</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/signup">Sign up</Link>
                  </div>
                )
              }
            </div>
          </div>
        </nav>
      </>
    );
}

export default Navbar;