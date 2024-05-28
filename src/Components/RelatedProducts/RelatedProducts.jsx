import React, { useContext, useState, useEffect, useCallback } from "react";
import "./RelatedProducts.scss";
import Item from "../Items/Item";
import Loader from "../Loader/Loader";
import { ShopContext } from "../../Context/ShopContext";

const RelatedProducts = () => {
  const { loading, products } = useContext(ShopContext);
  const [relatedProducts, setRelatedProducts] = useState([]);

  const shuffleProducts = useCallback(() => {
    const shuffledProducts = [...products]
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    setRelatedProducts(shuffledProducts);
  }, [products]);

  useEffect(() => {
    shuffleProducts();
  }, [products, shuffleProducts]);

  const handleProductClick = () => {
    shuffleProducts();
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="related-products">
      <h1>RELATED PRODUCTS</h1>
      <hr />
      <div className="related-products-item">
        {relatedProducts.map((product, index) => (
          <div key={index} onClick={handleProductClick}>
            <Item
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
