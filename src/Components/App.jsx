import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "../CSS/app.css";
import { getItems } from "../Arrays/ItemsArray";
import Home from "./Home";
import Cart from "./Cart";

function App() {
  const [cart, setCart] = useState([]);
  const [cartAmount, setCartAmount] = useState(0);
  const [cartAmountClass, setCartAmountClass] = useState("cart-amount");
  const items = getItems();

  useEffect(() => {
    let number = 0;
    let newCart = [...cart];
    newCart.map((cartItem) => (number += cartItem.quantity));
    setCartAmount(number);

    if (cartAmount > 9 && cartAmount < 100)
      setCartAmountClass("cart-amount-10-plus");
    if (cartAmount > 99) setCartAmountClass("cart-amount-99-plus");
    console.log(number);
    console.log(cart);
  }, [cart, cartAmount]);

  function handleAddToCart(index) {
    const newItem = items[index];
    let newCart = [...cart];
    if (newCart.includes(newItem)) {
      let itemIndex = newCart.findIndex((obj) => obj.name === newItem.name);
      newCart[itemIndex].quantity += 1;
      setCart(newCart);
    } else {
      let additionalCart = [...cart, newItem];
      setCart(additionalCart);
    }
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            cartAmountClass={cartAmountClass}
            cartAmount={cartAmount}
            handleAddToCart={handleAddToCart}
          />
        }
      ></Route>
      <Route path="/cart" element={<Cart cart={cart} />}></Route>
    </Routes>
  );
}

export default App;
