import React from "react";

export default function CartItem({ name, pictureClass, price, quantity }) {
  return (
    <>
      <div className={pictureClass}></div>
      <div>{name}</div>
      <div>{price}</div>
      <div>{quantity}</div>
    </>
  );
}
