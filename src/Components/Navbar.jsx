import React from "react";
import { Link } from "react-router-dom";
import shoppingCart from "../Photos/shoppingCart.png";
import NavbarUpper from "./NavbarUpper";
import NavbarLower from "./NavbarLower";

export default function Navbar({
  cartAmount,
  cartAmountClass,
  navbarCartAmountClass,
}) {
  return (
    <>
      <NavbarUpper
        navbarCartAmountClass={navbarCartAmountClass}
        cartAmount={cartAmount}
      />
      <NavbarLower />
      <div className="checkout__wrapper">
        <div></div>
        <Link className="checkout" to="/cart">
          <img className="shopping-cart__photo" src={shoppingCart} alt="" />
          <p className={cartAmountClass}>{cartAmount}</p>
        </Link>
      </div>
    </>
  );
}
