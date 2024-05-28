import React, { useContext } from "react";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import "./ShopCategories.scss";
import { Link } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import Item from "../../Components/Items/Item";
import { ShopContext } from "../../Context/ShopContext";

const ShopCategories = ({ bannerImage, category, promotion }) => {
  const { loading, products } = useContext(ShopContext);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="shop-categories">
      <div className="shop-categories-banner">
        <div className="shop-categories-banner-left">
          <h2>
            {promotion} off for {category} products. Offer ends in 2 days!
          </h2>
          <h1>FLAT {promotion} OFF</h1>
          <Link to="/" className="shop-categories-banner-left__button">
            Return to main page
            <RiArrowRightDoubleLine size={24} />
          </Link>
        </div>
        <div className="shop-categories-banner-right">
          <img src={bannerImage} alt="banner" />
        </div>
      </div>
      <div className="shop-categories-products">
        <h3>
          {category.toUpperCase()} PRODUCTS
          <span> Showing 1-20 out of 60 products</span>
        </h3>
        <div className="shop-categories-products__item">
          {products.map((product, index) => (
            <Item
              key={index}
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopCategories;
