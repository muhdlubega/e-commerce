import React from "react";

const ProductDisplay = ({ product }) => {
  return (
    <div>
      <img src={product.image} alt={product.id} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDisplay;
