import React from "react";
import BannerImage from "../Assets/banner.png";
import "./Banner.scss";
import { RiArrowRightDoubleLine } from "react-icons/ri";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-left">
        <h2>FAST, EASY, RELIABLE SHOPPING</h2>
        <h1>shop now</h1>
        <h1>and experience</h1>
        <h1>
          <span className="banner-left__highlight">swift</span> savings
        </h1>
        <div className="banner-left__button">
          Check out our latest collection
          <RiArrowRightDoubleLine size={24} />
        </div>
      </div>
      <div className="banner-right">
        <img src={BannerImage} alt="banner" />
      </div>
    </div>
  );
};

export default Banner;
