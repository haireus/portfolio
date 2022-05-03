import React from "react";
import { BiCheck } from "react-icons/bi";
import { SERVICES } from "./data";

import "./styles.css";

export default function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="services__container container">
        {SERVICES.map(({ id, type, key }) => (
          <article className="service" key={id}>
            <div className="service__head">
              <h3>{type}</h3>
            </div>

            <ul className="service__list">
              {key.map((el, index) => (
                <li key={index}>
                  <BiCheck className="service__list-icon" />
                  <p>{el}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
