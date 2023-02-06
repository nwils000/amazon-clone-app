import React from "react";
import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";

export default function Home({
  handleAddToCart,
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
      <Body handleAddToCart={handleAddToCart} />
      <Footer top={"/"} />
    </>
  );
}
