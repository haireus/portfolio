import React, { useRef, userRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerFill } from "react-icons/ri";
import emailJs from "@emailjs/browser";

import "./styles.css";

export default function Contact() {
  const form = useRef();

  const submit = (e) => {
    e.prevenDefault();

    emailJs.sendForm(
      "service_4jjpwmq",
      "template_fx39tn3",
      form.current,
      "rKt9NmllCuBePF9dL"
    );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>dinhvanhai07071997@gmail.com</h5>
            <a href="mailto:dinhvanhai07071997@gmail.com" target={"_blank"}>
              Send a mail
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerFill className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Hải Đinh</h5>
            <a href="https://m.me/haidinh07.com" target={"_blank"}>
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={submit}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />

          <input type="email" name="email" placeholder="Your Email" required />

          <textarea
            name="message"
            rows={7}
            placeholder="Your message"
            required
          ></textarea>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
