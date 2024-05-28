import React from "react";
import OffersImage from "../Assets/offers.png";
import { RiArrowLeftDoubleLine } from "react-icons/ri";
import "./Offers.scss";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h2>exclusive offers for you</h2>
        <h1>ONLY ON</h1>
        <h1>BESTSELLER PRODUCTS</h1>
        <div className="offers-left__button">
          <RiArrowLeftDoubleLine size={24} />
          Check it out here
        </div>
      </div>
      <div className="offers-right">
        <img src={OffersImage} alt="offers" />
      </div>
    </div>
  );
};

export default Offers;
