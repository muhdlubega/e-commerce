import React, { useEffect, useState } from "react";
import "./Popular.scss";
import { fetchProducts } from "../Assets/data";
import Item from "../Items/Item";
import Loader from "../Loader/Loader";

const Popular = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
        setLoading(false);
      } catch (error) {
        console.error("Error loading products:", error);
        setLoading(false);
      }
    };

    getProducts();
  }, []);

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
