import React from "react";
import SvgCrowd from "../icons/SvgCrowd";
import SvgImg from "../icons/SvgImage";
import SvgTick from "../icons/SvgTick";
import SvgTicket from "../icons/Svgticket";
export default function Capabilities() {
  const Features = ({ children, text }) => (
    <div className="features-wrapper">
      {children} <p className="feature-text">{text}</p>
    </div>
  );
  return (
    <div className="features">
      <Features text="Crowdtypes and segments">
        <SvgCrowd />
      </Features>
      <Features text="Access zones">
        <SvgTick />
      </Features>
      <Features text="Accreditation items">
        <SvgTicket />
      </Features>
      <Features text="Upload event logo">
        <SvgImg />
      </Features>
    </div>
  );
}
