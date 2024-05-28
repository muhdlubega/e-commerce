import React, { useContext } from "react";
import "./NewCollections.scss";
import Item from "../Items/Item";
import Loader from "../Loader/Loader";
import { ShopContext } from "../../Context/ShopContext";

const NewCollections = () => {
  const { loading, products } = useContext(ShopContext);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="new-collections-item">
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

export default NewCollections;
