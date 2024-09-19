import img9 from "../pictures/img-9.jpg";
import img2 from "../pictures/img-2.jpg";
import img3 from "../pictures/img-3.jpg";
import img4 from "../pictures/img-4.jpg";
import img8 from "../pictures/img-8.jpg";
import { Link } from "react-router-dom";
const Cards = () => {
  return (
    <>
      <h5
        className="text-center"
        style={{ fontWeight: "bold", background: "black", color: "white" }}
      >
        Make a bunch of these memories for yourself
      </h5>
      <div id="cards" className="row">
        <div className="col-lg-4 col-sm-12 ">
          <img src={img9} alt="" />
          <Link to={"/products"}>
            Explore the hidden Waterfall deep inside the Amazon Jungle
          </Link>
        </div>
        <div className="col-lg-4 col-sm-12 m-2">
          <img src={img2} alt="" />
          <Link to={"/products"}>
            {" "}
            Travel through the Islands of Bali in a Private Cruise
          </Link>
        </div>
        <div className="col-lg-4 col-sm-12 m-2">
          <img src={img3} alt="" />
          <Link to={"/products"}>
            Set sail in the Atlantic Ocean visiting Uncharted Waters
          </Link>
        </div>
        <div className="col-lg-4 col-sm-12">
          <img src={img4} alt="" />
          <Link to={"/products"}>
            Explore football islan on top of the Himalayan Mountains
          </Link>
        </div>
        <div className="col-lg-4 col-sm-12">
          <img src={img8} alt="" />
          <Link to={"/products"}>
            Ride through the Desert on a guided Camel tour
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cards;
