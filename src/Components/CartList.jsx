import React from "react";
import CartItem from "./CartItem";

export default function CartList({ cart }) {
  return cart.map((cart) => {
    return <CartItem key={cart.id} {...cart} />;
  });
}
