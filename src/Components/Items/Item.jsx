import React from "react";
import "./Item.scss";
import { Link } from "react-router-dom";

const Item = (product) => {
  return (
    <li className="item" key={product.id}>
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.id} />
      </Link>
      <p>{product.title}</p>
      <h4>$ {product.price.toFixed(2)}</h4>
    </li>
  );
};

export default Item;
