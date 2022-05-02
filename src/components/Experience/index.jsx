import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { FRONT_END, BACK_END } from "./data";

import "./styles.css";

export default function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {FRONT_END.map(({ id, skill, level }) => (
              <article className="experience__details" key={id}>
                <BsPatchCheckFill className="icons" />
                <div>
                  <h4>{skill}</h4>
                  <small className="text-light">{level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {BACK_END.map(({ id, skill, level }) => (
              <article className="experience__details" key={id}>
                <BsPatchCheckFill className="icons" />
                <div>
                  <h4>{skill}</h4>
                  <small className="text-light">{level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
