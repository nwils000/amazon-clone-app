import React from "react";
import amazonLogo from "../Photos/amazonLogo.png";
import usFlag from "../Photos/usFlag.png";

export default function NavbarUpper() {
  return (
    <div className="container">
      <img src={amazonLogo} alt="" />
      <button className="location-select__button">
        <p className="location-select__button-p-1">Hello</p>
        <p className="location-select__button-p-2">Select your location</p>
      </button>
      <form className="search-container">
        <label htmlFor="categories">
          <select
            className="search-dropdown"
            selected
            name="categories"
            value="All"
          >
            <option>&nbsp;&nbsp;&nbsp;All</option>
            <option>fds</option>
            <option>fds</option>
            <option>fds</option>
            <option>fds</option>
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
    </div>
  );
}
