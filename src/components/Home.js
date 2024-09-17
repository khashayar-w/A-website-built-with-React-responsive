import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons"



function Home() {
    return ( 
        <>
            <div className="home">
                <div className="content">
                    <div className="text">
                        <h2>ADVENTURE AWAITS</h2>
                        <h5>what are you waiting for?</h5>
                    </div>
                    <div className="buttons">
                        <a href="#">GET STARTED</a>
                        <a href="#" id="watchBTN">WATCH TRAILER <FontAwesomeIcon icon={faPlay}/></a>
                    </div>
                </div>
                <div className="slider"></div>
            </div>
        </>
     );
}

export default Home;