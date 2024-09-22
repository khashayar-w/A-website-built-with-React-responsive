import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons"
import {faInstagramSquare,faFacebookSquare,faTwitterSquare, faYoutubeSquare} from "@fortawesome/free-brands-svg-icons"


function Footer() {
    return (
      <div className="all">
        <div className="container">
          <div className="top-part">
            <h3>
              Join the Adventure newsietter to recive our best vacation deala
            </h3>
            <p>You can unsubscribe at any time.</p>
            <input type="email" placeholder="Your Email" />
            <input type="submit" value={"Subscribe"} />
          </div>
          <div className="main-part">
            <div className="contents">
              <h5>About Us</h5>
              <a href="#">How it works</a>
              <a href="#">Testimonials</a>
              <a href="#">Careers</a>
              <a href="#">Investos</a>
              <a href="#">Trems of service</a>
            </div>
            <div className="contents">
              <h5>Contact Us</h5>
              <a href="#">Contact</a>
              <a href="#">Support</a>
              <a href="#">Destinations</a>
              <a href="#">Sponsorships</a>
            </div>
            <div className="contents">
              <h5>Video</h5>
              <a href="#">Submit Video</a>
              <a href="#">Ambassadors</a>
              <a href="#">Agency</a>
              <a href="#">Influencer</a>
            </div>
            <div className="contents">
              <h5>Social Media</h5>
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">Youtube</a>
              <a href="#">X(twitter)</a>
            </div>
          </div>
          <div className="bottom-part">
            <div className="brand">
              <a href="#">
                {" "}
                TRVL <FontAwesomeIcon icon={faPlane} />
              </a>
            </div>
            <div className="copyright">
              TRVL<span>{"\u00a9"}</span>
            </div>
            <div className="social-medias">
            
              <a href="#" id="insta"><FontAwesomeIcon icon={faInstagramSquare} /></a>
              <a href="#"><FontAwesomeIcon icon={faYoutubeSquare} /></a>
              <a href="#"><FontAwesomeIcon icon={faFacebookSquare} /></a>
              <a href="#"><FontAwesomeIcon icon={faTwitterSquare} /></a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Footer;