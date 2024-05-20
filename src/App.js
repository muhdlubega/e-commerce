import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop/Shop";
import ShopCategories from "./Pages/ShopCategories/ShopCategories";
import Products from "./Pages/Products/Products";
import { Cart } from "./Pages/Cart/Cart";
import Login from "./Pages/Login/Login";
import Footer from "./Components/Footer/Footer";
import kidsBanner from "./Components/Assets/kids.png";
import menBanner from "./Components/Assets/men.png";
import womenBanner from "./Components/Assets/women.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/men"
            element={
              <ShopCategories
                bannerImage={menBanner}
                category="men"
                promotion="15%"
              />
            }
          />
          <Route
            path="/women"
            element={
              <ShopCategories
                bannerImage={womenBanner}
                category="women"
                promotion="20%"
              />
            }
          />
          <Route
            path="/kids"
            element={
              <ShopCategories
                bannerImage={kidsBanner}
                category="kids"
                promotion="40%"
              />
            }
          />
          <Route path="/product" element={<Products />}>
            <Route path=":productId" element={<Products />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
