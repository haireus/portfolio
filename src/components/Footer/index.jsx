import React from "react";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import dayjs from "dayjs";
import "./styles.css";

export default function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        HẢI ĐINH
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#experience">Experience</a>
        </li>

        <li>
          <a href="#service">Service</a>
        </li>

        <li>
          <a href="#portfolio">Portfolio</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.facebook.com/haidinh07"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/haidinh07/"
          target="_blank"
          rel="noreferrer"
        >
          <FiInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/%C4%91inh-v%C4%83n-ha%CC%89i-ba347a21a/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Hải Đinh. All rights reserved, {dayjs().get("y")}.</small>
      </div>
    </footer>
  );
}
