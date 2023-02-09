import React from "react";
import FooterUpper from "./FooterUpper";
import FooterLower from "./FooterLower";

export default function Footer({ top }) {
  return (
    <div className="footer">
      <FooterUpper top={top} />
      <FooterLower />
    </div>
  );
}
