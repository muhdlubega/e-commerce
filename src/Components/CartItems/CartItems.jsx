import React, { useContext, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { FaTrash } from "react-icons/fa6";
import Loader from "../Loader/Loader";
import "./CartItems.scss";

const CartItems = () => {
  const {
    loading,
    products,
    cartItems,
    removeFromCart,
    totalCartAmount,
    updateCartItemQuantity,
  } = useContext(ShopContext);
  const [showSubmitMessage, setShowSubmitMessage] = useState(false);

  if (loading) return <Loader />;

  return (
    <div className="cart-items">
      <div className="cart-items__main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {products.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div className="cart-items__format" key={e.id}>
              <img src={e.image} alt={e.id} className="cart-items__img" />
              <p>{e.title}</p>
              <p>$ {e.price.toFixed(2)}</p>
              <input
                type="number"
                className="cart-items__quantity"
                value={cartItems[e.id]}
                onChange={(event) =>
                  updateCartItemQuantity(e.id, event.target.value)
                }
                min="1"
                max="20"
              />
              <p>$ {(e.price * cartItems[e.id]).toFixed(2)}</p>
              <FaTrash
                className="cart-items__remove"
                onClick={() => removeFromCart(e.id)}
              />
            </div>
          );
        }
        return null;
      })}
      <div className="cart-items__down">
        <div className="cart-items__total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cart-items__total-item">
              <p>Subtotal</p>
              <p>${totalCartAmount.toFixed(2)}</p>
            </div>
            <hr />
            <div className="cart-items__total-item">
              <p>Shipping Fee</p>
              <p>Free!</p>
            </div>
            <hr />
            <div className="cart-items__total-item">
              <p>Total</p>
              <p>${totalCartAmount.toFixed(2)}</p>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-items__promocode">
          <p>If you have a promo code, enter it here:</p>
          <div className="cart-items__promobox">
            <input type="text" placeholder="promo code" />
            <button onClick={() => setShowSubmitMessage(true)}>Submit</button>
          </div>
          {showSubmitMessage && <h5>This promo code is invalid</h5>}
        </div>
      </div>
    </div>
  );
};

export default CartItems;
