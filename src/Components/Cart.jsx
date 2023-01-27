import React from "react";
import CartList from "./CartList";

export default function Cart({ cart }) {
  return (
    <div>
      <CartList cart={cart} />
    </div>
  );
}
