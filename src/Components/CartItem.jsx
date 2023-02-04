import React from "react";

export default function CartItem({ name, pictureClass, price, quantity }) {
  return (
    <div>
      <div className="custom-border"></div>
      <div className="cart-item__flex">
        <div className={pictureClass}></div>
        <div className="details__flex">
          <div className="cart-name">{name}</div>
          <div className="in-stock">In Stock</div>
          <div className="shipment-speed-text">
            Usually ships within 2 to 3 days.
          </div>
          <div className="shipping-text-div">
            <span className="shipping-text1">Eligible for FREE Shipping &</span>
            <span className="shipping-text2">&nbsp;FREE Returns</span>
          </div>
          <div className="cart-quantity">{`Qty: ${quantity}`}</div>
        </div>
        <div className="cart-price">{`$${price}`}</div>
      </div>
    </div>
  );
}
