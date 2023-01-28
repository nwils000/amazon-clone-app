import React, { useState } from "react";
import "../CSS/app.css";
import { getItems } from "../Arrays/ItemsArray";
import Navbar from "./Navbar";
import Body from "./Body";
import Cart from "./Cart";
import Footer from "./Footer";

function App() {
  const [cart, setCart] = useState([]);

  const items = getItems();

  function handleAddToCart(index) {
    const newItem = items[index];
    if (cart.includes(newItem)) {
      setCart([...cart, newItem.quantity++]);
    } else {
      let newCart = [...cart, newItem];
      setCart(newCart);
    }
  }

  return (
    <>
      <Navbar />
      <Body handleAddToCart={handleAddToCart} />
      <Cart cart={cart} />
      <Footer />
    </>
  );
}

export default App;
