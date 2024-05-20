import React, { createContext, useEffect, useState } from "react";
import { fetchProducts } from "../Components/Assets/data";

export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const products = await fetchProducts();
        setProductsData(products);
      } catch (error) {
        console.error("Error loading products:", error);
      }
    };

    getProducts();
  }, []);

  const contextValue = {
    products: productsData,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
