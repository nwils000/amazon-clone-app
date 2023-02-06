import React, { useState } from "react";
import amazonLogo from "../Photos/amazonLogo.png";
import { Link } from "react-router-dom";
import shoppingCart from "../Photos/shoppingCart.png";
import usFlag from "../Photos/usFlag.png";

export default function NavbarUpper({ cartAmount, navbarCartAmountClass }) {
  const [searchContainerClass, setSearchContainerClass] =
    useState("search-container");
  const [pageShadow, setPageShadow] = useState("navbar-upper-container");

  return (
    <div className={pageShadow}>
      <a href="/">
        <img src={amazonLogo} alt="" />
      </a>
      <button className="location-select__button">
        <p className="location-select__button-p-1">Hello</p>
        <p className="location-select__button-p-2">Select your location</p>
      </button>
      <form
        onClick={() => {
          setSearchContainerClass("search-container__focused");
          setPageShadow("container__shadowed");
        }}
        onBlur={() => {
          setSearchContainerClass("search-container");
          setPageShadow("navbar-upper-container");
        }}
        className={searchContainerClass}
      >
        <label htmlFor="categories">
          <select
            className="search-dropdown"
            selected
            name="categories"
            value="All"
          >
            <option>&nbsp;&nbsp;&nbsp;All</option>
            <option>&nbsp;&nbsp;&nbsp;Apps & Games</option>
            <option>
              &nbsp;&nbsp;&nbsp;Arts, Crafts, & Sewing&nbsp;&nbsp;&nbsp;
            </option>
            <option>&nbsp;&nbsp;&nbsp;Appliances</option>
            <option>&nbsp;&nbsp;&nbsp;Men</option>
            <option>&nbsp;&nbsp;&nbsp;Children</option>
            <option>&nbsp;&nbsp;&nbsp;Baby</option>
          </select>
        </label>
        <input className="search-input" type="text" />
        <button className="search-button">
          <svg
            className="search-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="50px"
            height="50px"
          >
            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
          </svg>
        </button>
      </form>
      <button className="language-select">
        <img className="dropdown-flag" src={usFlag} alt="" />
        <p>EN</p>
      </button>

      <div
        class="signin-dropdown"
        onMouseOver={() => setPageShadow("container__shadowed")}
        onMouseOut={() => setPageShadow("navbar-upper-container")}
      >
        <button class="signin-dropbtn">
          <p className="signin__header">Hello, sign in</p>
          <p className="signin__subheader">Account & Lists</p>
        </button>
        <div class="signin-dropdown-content">
          <div className="signin-dropdown-content__grid">
            <div className="signin-dropdown-header" href="/">
              <a href="/sign-in" className="login-button">
                Sign in
              </a>
              <p>New customer? Start here</p>
            </div>
            <div className="signin-dropdown-container">
              <h2 className="signin-dropdown-subheader">Your Lists</h2>
              <a href="/">List links</a>
              <a href="/">List links</a>
              <a href="/">List links</a>
              <a href="/">List links</a>
              <a href="/">List links</a>
            </div>
            <div className="signin-dropdown-container">
              <h2 className="signin-dropdown-subheader">Your Account</h2>
              <a className="link" href="/">
                Account links
              </a>
              <a className="link" href="/">
                Account links
              </a>
              <a className="link" href="/">
                Account links
              </a>
              <a className="link" href="/">
                Account links
              </a>
              <a className="link" href="/">
                Account links
              </a>
              <a className="link" href="/">
                Account links
              </a>
              <a className="link" href="/">
                Account links
              </a>
              <a className="link" href="/">
                Account links
              </a>
              <a className="link" href="/">
                Account links
              </a>
              <a className="link" href="/">
                Account links
              </a>
              <a className="link" href="/">
                Account links
              </a>
              <a className="link" href="/">
                Account links
              </a>
              <a className="link" href="/">
                Account links
              </a>
              <a className="link" href="/">
                Account links
              </a>
            </div>
          </div>
        </div>
      </div>
      <button className="orders__container">
        <p className="orders__header">Returns</p>
        <p className="orders__subheader">& Orders</p>
      </button>
      <div className="navbar-checkout__wrapper">
        <Link className="checkout" to="/cart">
          <img
            className="navbar-shopping-cart__photo"
            src={shoppingCart}
            alt=""
          />
          <p className={navbarCartAmountClass}>{cartAmount}</p>
        </Link>
      </div>
      <div></div>
    </div>
  );
}
