import React from "react";
import shopshwift from "../Assets/shopshwift.png";
import { Link } from "react-router-dom";
import { IoLogoFacebook, IoLogoWhatsapp } from "react-icons/io";
import { AiFillTwitterCircle } from "react-icons/ai";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <Link to="/" className="footer-logo">
          <img className="footer-logo__image" src={shopshwift} alt="logo" />
          <p className="footer-logo__title">
            Shop<strong>Shwift</strong>
          </p>
        </Link>
        <ul className="footer-links">
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
          <Link to="/">
            <IoLogoWhatsapp size={28} />
          </Link>
          <Link to="/">
            <IoLogoFacebook size={28} />
          </Link>
          <Link to="/">
            <AiFillTwitterCircle size={28} />
          </Link>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Rights Reserved </p>
      </div>
    </div>
  );
};

export default Footer;
