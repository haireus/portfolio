import React from "react";
import dayjs from "dayjs";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { GiTechnoHeart } from "react-icons/gi";

import ME from "../../assets/about_me.jpeg";

import "./styles.css";

export default function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>
                {dayjs(new Date()).diff("2020-1-1", "year")}+ Years Working
              </small>
            </article>

            <article className="about__card">
              <GiTechnoHeart className="about__icon" />
              <h5>Technology</h5>
              <small>Nodejs, Reactjs, MySql, Mongo</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
            Introduction about me..... I will comeback later to edit this. Right
            now, when i'm coding this section, i don't really have a good mood.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
