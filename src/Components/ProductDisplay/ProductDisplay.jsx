import React, { useContext } from "react";
import ReactStars from "react-rating-stars-component";
import "./ProductDisplay.scss";
import { ShopContext } from "../../Context/ShopContext";
import Loader from "../Loader/Loader";

const ProductDisplay = ({ product }) => {
  const { addToCart, loading } = useContext(ShopContext);

  if (loading) return <Loader />;

  return (
    <div className="product-display">
      <div className="product-display__left">
        <div className="product-display__left-img-list">
          <img src={product.image} alt={product.id} />
          <img src={product.image} alt={product.id} />
          <img src={product.image} alt={product.id} />
        </div>
        <div className="product-display__left-img">
          <img
            className="product-display__left-main-img"
            src={product.image}
            alt={product.id}
          />
        </div>
      </div>
      <div className="product-display__right">
        <h1>{product.title}</h1>
        <div className="product-display__right-rating">
          <ReactStars value={product.rating.rate} />
          <span>({product.rating.count})</span>
        </div>
        <div className="product-display__right-price">
          ${product.price.toFixed(2)}
        </div>
        <div className="product-display__right-category">
          <strong>Category:</strong> {product.category}
        </div>
        <p>{product.description}</p>
        <h4>Select size</h4>
        <div className="product-display__right-size">
          <div>S</div>
          <div>M</div>
          <div>L</div>
          <div>XL</div>
          <div>XXL</div>
        </div>
        <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
      </div>
    </div>
  );
};

export default ProductDisplay;
