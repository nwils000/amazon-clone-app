import React from "react";
import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";

export default function Home({ handleAddToCart, cartAmount }) {
  return (
    <>
      <Navbar />
      <Body cartAmount={cartAmount} handleAddToCart={handleAddToCart} />
      <Footer />
    </>
  );
}
