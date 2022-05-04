import React from "react";

import { PROJECT } from "./data";
import "./styles.css";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Project</h2>

      <div className="container portfolio__container">
        {PROJECT.map(({ id, img, title, github, demo }) => (
          <article className="portfolio__item" key={id}>
            <div className="portfolio__item-image">
              <img
                src={img}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                alt=""
              />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a
                href={github}
                className="btn"
                target={"_blank"}
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href={demo}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
