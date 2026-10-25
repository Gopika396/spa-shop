import React, { useState, useEffect, useRef } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";

import Home from "./components/Home";
import Products from "./components/Products";
import Seasons from "./components/Seasons";
import Cart from "./components/Cart";
import About from "./components/About";
import Treatments from "./components/Treatments";
import Contact from "./components/Contact";

import "./assets/style/style.css";

// Scroll to top and re-run AOS animations on every page change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const t = setTimeout(() => AOS.refreshHard(), 100);
    return () => clearTimeout(t);
  }, [pathname]);
  return null;
}

function App() {
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState("");
  const timer = useRef(null);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const addToCart = (product) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (existing) {
        return current.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...current, { ...product, quantity: 1 }];
    });

    setToast(`${product.name} added to your cart`);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(""), 2200);
  };

  const updateQuantity = (id, amount) => {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((current) => current.filter((item) => item.id !== id));
  };

  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home cartCount={cartCount} />} />
        <Route path="/products" element={<Products addToCart={addToCart} cartCount={cartCount} />} />
        <Route path="/seasons" element={<Seasons addToCart={addToCart} cartCount={cartCount} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              cartCount={cartCount}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route path="/about" element={<About cartCount={cartCount} />} />
        <Route path="/treatments" element={<Treatments addToCart={addToCart} cartCount={cartCount} />} />
        <Route path="/contact" element={<Contact cartCount={cartCount} />} />
      </Routes>

      {toast && (
        <div
          role="status"
          style={{
            position: "fixed",
            bottom: 24,
            right: 24,
            zIndex: 2000,
            background: "#293c35",
            color: "#fff",
            padding: "14px 22px",
            borderRadius: 8,
            boxShadow: "0 8px 24px rgba(0,0,0,.25)",
            fontSize: 15,
          }}
        >
          ✓ {toast}
        </div>
      )}
    </HashRouter>
  );
}

export default App;