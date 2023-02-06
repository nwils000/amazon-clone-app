import React from "react";
import CartList from "./CartList";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Cart({
  cart,
  cartTotal,
  cartAmount,
  cartAmountClass,
  navbarCartAmountClass,
}) {
  return (
    <>
      <Navbar
        navbarCartAmountClass={navbarCartAmountClass}
        cartAmountClass={cartAmountClass}
        cartAmount={cartAmount}
      />
      <div className="cart-flex">
        <div className="checkout__flex">
          <div className="cart-list-heading-flex">
            <div className="shopping-cart-title">Shopping Cart</div>
            <div className="price-title">Price</div>
          </div>
          <div className="cart-items__container">
            <CartList cart={cart} />
          </div>

          <div className="cart-list-footer__wrapper">
            <div className="cart-list-footer-flex">
              <div className="cart-list-footer-filler"></div>
              <span className="cart-list-footer-text">
                {`Subtotal (${cartAmount} items): `}
              </span>
              <span className="cart-list-footer-total">{` $${cartTotal}`}</span>
            </div>
          </div>
        </div>
        <div className="cart-checkout">
          <div className="cart-checkout-shipping-text">
            Your order qualifies for FREE Shipping.
          </div>
          <div>
            <span className="subtotal">{`Subtotal (${cartAmount} items): `}</span>
            <span className="cart-total">{`$${cartTotal}`}</span>
          </div>
          <div className="checkout-button">
            <a href="/sign-in">Proceed to checkout</a>
          </div>
        </div>
      </div>
      <Footer top={"/cart"} />
    </>
  );
}
