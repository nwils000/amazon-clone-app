import React from "react";
import amazonLogoFooter from "../Photos/amazonLogoFooter.png";

export default function FooterUpper({ top }) {
  return (
    <div>
      <a href={top} className="back-to-top__button">
        Back to top
      </a>
      <div className="footer-upper-lists__container">
        <ul className="footer-upper-list">
          <li>Get to Know Us</li>
          <li>Careers</li>
          <li>Amzin Newsletter</li>
          <li>About Amzin</li>
          <li>Accessibility</li>
          <li>Sustainability</li>
          <li>Press Center</li>
          <li>Investor Relations</li>
          <li>Amzin Devices</li>
          <li>Amzin Science</li>
        </ul>
        <ul className="footer-upper-list">
          <li>Make Money with Us</li>
          <li>Sell products on Amzin</li>
          <li>Sell apps on Amzin</li>
          <li>Supply to Amzin</li>
          <li>Protect & Build Your Brand</li>
          <li>Become an Affiliate</li>
          <li>Become a Delivery Driver</li>
          <li>Start a package delivery business</li>
          <li>Advertise Your Products</li>
          <li>Self-Publish with Us</li>
          <li>Host an Amzin Hub</li>
          <li>See More Ways to Make Money</li>
        </ul>
        <ul className="footer-upper-list">
          <li>Amzin Payment Products</li>
          <li>Amzin Rewards Visa Signature Cards</li>
          <li>Amzin Store Card</li>
          <li>Amzin Secured Card</li>
          <li>Amzin Business Card</li>
          <li>Shop with Points</li>
          <li>Credit Card Marketplace</li>
          <li>Reload Your Balance</li>
          <li>Amzin Currency Converter</li>
        </ul>
        <ul className="footer-upper-list">
          <li>Let Us Help You</li>
          <li>Amzin and COVID-19</li>
          <li>Your Account</li>
          <li>Your Orders</li>
          <li>Shipping Rates & Policies</li>
          <li>Amzin Prime</li>
          <li>Returns & Replacements</li>
          <li>Manage Your Content and Devices</li>
          <li>Your Recalls and Product Safety Alerts</li>
          <li>Amzin Assistant</li>
          <li>Help</li>
        </ul>
      </div>
      <div className="footer-upper-lower">
        <a href="/">
          <img src={amazonLogoFooter} alt="" />
        </a>
        <button>English</button>
        <button>
          {/* <img src="" alt="" /> */}
          United States
        </button>
      </div>
    </div>
  );
}
