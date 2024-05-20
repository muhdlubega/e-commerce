import React from "react";
import Banner from "../../Components/Banner/Banner";
import "./Shop.scss";
import Popular from "../../Components/Popular/Popular";
import Offers from "../../Components/Offers/Offers";
import NewCollections from "../../Components/NewCollections/NewCollections";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";

const Shop = () => {
  return (
    <div className="shop">
      <Banner />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  );
};

export default Shop;
