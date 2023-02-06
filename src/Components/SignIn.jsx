import React from "react";
import amazonLogoSignIn from "../Photos/amazonLogoSignIn.png";

export default function SignIn() {
  return (
    <div className="sign-in__wrapper">
      <a className="sign-in-logo_anchor" href="/">
        <img
          className="sign-in-logo"
          src={amazonLogoSignIn}
          alt="Amazon Logo"
        />
      </a>
      <div className="sing-in-box__wrapper">
        <div className="sign-in-box">
          <h1 className="sign-in__heading">Sign in</h1>
          <label className="email-input__label" htmlFor="email">
            Email or mobile phone number
            <input className="email__input" id="email" type="email" />
          </label>
          <button className="continue__button">Continue</button>
          <p className="conditions-of-use">
            By continuing, you agree to Amzin's Conditions of Use and Privacy
            Notice.
          </p>
          <a className="help__anchor" href="/sign-in">
            Need help?
          </a>
        </div>
      </div>
    </div>
  );
}
