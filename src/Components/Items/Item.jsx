import React from "react";
import "./Item.scss";

const Item = (product) => {
  return (
    <li className="item" key={product.id}>
      <img src={product.image} alt={product.id} />
      <p>{product.title}</p>
      <h4>$ {product.price.toFixed(2)}</h4>
    </li>
  );
};

export default Item;
