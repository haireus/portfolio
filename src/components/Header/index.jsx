import React from "react";
import { CTA } from "./CTA";
import ME from "../../assets/mine.jpeg";
import { HeaderSocials } from "./HeaderSocials";

import "./styles.css";

export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5 className="header_1">Hello I'm</h5>
        <h1>Hải Đinh</h1>
        <h5 className="text-light">Fullstack Developer</h5>

        <CTA />

        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}
