import React from "react";
import "./NewsLetter.scss";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <p>get the best offers on your email</p>
      <h1>SUBSCRIBE TO OUR NEWSLETTER AND STAY UPDATED</h1>
      <div className="newsletter-field">
        <input type="email" placeholder="Input your email here" />
        <button className="newsletter-button">Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
