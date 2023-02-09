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
      <div className="not-compatible">
        Your screen size is not compatible.
        <p>Either zoom out, or use a different monitor.</p>
      </div>
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
