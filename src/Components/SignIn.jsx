import React from "react";
import amazonLogoSignIn from "../Photos/amazonLogoSignIn.png";

export default function SignIn() {
  return (
    <>
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
            <a href="/" className="continue__button">
              Continue
            </a>
            <p className="conditions-of-use">
              By continuing, you agree to Amzin's Conditions of Use and Privacy
              Notice.
            </p>
            <a className="help__anchor" href="/sign-in">
              Need help?
            </a>
          </div>
          <h3 className="new-to-amazon">New to Amazon?</h3>
          <div className="line-through-h3"></div>
          <button className="create-account__button">
            Create your Amazon account
          </button>
        </div>
      </div>
      <div className="sign-in-bottom__content">
        <div className="sing-in-bottom__anchors">
          <a href="/" className="sign-in-bottom__anchor">
            Conditions of Use
          </a>
          <a href="/" className="sign-in-bottom__anchor">
            Privacy Notice
          </a>
          <a href="/" className="sign-in-bottom__anchor">
            Help
          </a>
        </div>
        <p className="sign-in-disclaimer">
          This website is an artistic recreation of Amazon.com and is only for
          personal use.
        </p>
      </div>
      <div className="sign-in__background"></div>
    </>
  );
}
