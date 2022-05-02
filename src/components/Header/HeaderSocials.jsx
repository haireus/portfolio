import React from "react";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/%C4%91inh-v%C4%83n-ha%CC%89i-ba347a21a/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/haireus" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a
        href="https://www.facebook.com/haidinh07"
        target="_blank"
        rel="noreferrer"
      >
        <BsFacebook />
      </a>
    </div>
  );
};
