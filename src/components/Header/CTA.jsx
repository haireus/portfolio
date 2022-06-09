import React from "react";
import CV from "../../assets/Dinh-Van-Hai-TopCV.vn-090622.223312.pdf";

export const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};
