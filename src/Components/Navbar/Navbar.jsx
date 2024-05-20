import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import shopswift from "../Assets/shopswift.png";
import { FaCartShopping } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category");

    if (category) {
      setMenu(category);
    } else {
      const path = location.pathname.split("/")[1];
      setMenu(path || "shop");
    }
  }, [location]);

  return (
    <div className="navbar">
      <Link to="/" className="navbar-logo">
        <img className="navbar-logo__image" src={shopswift} alt="logo" />
        <p className="navbar-logo__title">
          Shop<strong>Swift</strong>
        </p>
      </Link>
      <ul className="navbar-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/">Shop</Link>
          {menu === "shop" && <hr />}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link to="/men">Men</Link>
          {menu === "men" && <hr />}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link to="/women">Women</Link>
          {menu === "women" && <hr />}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids">Kids</Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>
      <div className="navbar-user">
        <Link to="/login">
          <button>
            Log<strong>In</strong>
          </button>
        </Link>
        <Link className="navbar-cart" to="/cart">
          <FaCartShopping size={22} color="teal" />
          <div className="navbar-cart__count">0</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
