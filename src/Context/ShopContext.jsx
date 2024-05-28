import React, { createContext, useEffect, useState } from "react";
import { fetchProducts } from "../Components/Assets/data";

export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState({});
  const [totalCartAmount, setTotalCartAmount] = useState(0);
  const [totalCartItems, setTotalCartItems] = useState(0);

  useEffect(() => {
    const getProducts = async () => {
      try {
        let cart = {};

        const products = await fetchProducts();
        setProductsData(products);
        for (let index = 0; index < products.length + 1; index++) {
          cart[index] = 0;
        }
        setCartItems(cart);
        setLoading(false);
      } catch (error) {
        console.error("Error loading products:", error);
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  useEffect(() => {
    const calculateTotalCartAmount = () => {
      let total = 0;
      productsData.forEach((product) => {
        if (cartItems[product.id] > 0) {
          total += product.price * cartItems[product.id];
        }
      });
      setTotalCartAmount(total);
    };

    const calculateTotalCartItems = () => {
      let total = 0;
      productsData.forEach((product) => {
        if (cartItems[product.id] > 0) {
          total += cartItems[product.id];
        }
      });
      setTotalCartItems(total);
    };

    calculateTotalCartAmount();
    calculateTotalCartItems();
  }, [cartItems, productsData]);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max(prev[itemId] - 1, 0),
    }));
  };

  const updateCartItemQuantity = (itemId, quantity) => {
    const newQuantity = Math.max(0, parseInt(quantity, 10));
    setCartItems((prev) => ({ ...prev, [itemId]: newQuantity }));
  };

  const contextValue = {
    products: productsData,
    cartItems,
    loading,
    addToCart,
    removeFromCart,
    updateCartItemQuantity,
    totalCartAmount,
    totalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
