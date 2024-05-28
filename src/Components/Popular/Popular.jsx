import React, { useContext } from "react";
import "./Popular.scss";
import Item from "../Items/Item";
import Loader from "../Loader/Loader";
import { ShopContext } from "../../Context/ShopContext";

const Popular = () => {
  const { loading, products } = useContext(ShopContext);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="popular">
      <h1>TRENDING PRODUCTS</h1>
      <hr />
      <div className="popular-item">
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
  );
};

export default Popular;
