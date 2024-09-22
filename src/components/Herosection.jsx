import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <>
      <div className="home">
        <div className="content">
          <div className="text">
            <h2>ADVENTURE AWAITS</h2>
            <h5>what are you waiting for?</h5>
          </div>
          <div className="buttons">
            <Link to="/signup">GET STARTED</Link>
            <Link to="/trailer" id="watchBTN">
              WATCH TRAILER <FontAwesomeIcon style={{fontSize:"1em", paddingLeft:'10px'}} icon={faCirclePlay} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
