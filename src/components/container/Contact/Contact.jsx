import React from "react";
import "./Contact.scss";
import { contacts } from "../../../Data";
import { socialIcons } from "../../../Data";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="container" id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>get in touch</span>
        <h1>Contact Me</h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="contact_left_container"
        >
          <h3>Just Say Hi</h3>
          <p className="contact_text">
            Hey there, I am Arunangshu, a full-stack web developer and a
            full-stack data scientist residing in West Bengal, India. I have
            spent my past 2 years falling in love with the world of code. I have
            certainly developed a keen interest in frontend development as well
            as backend development and website designing and as well model
            training in machine learning and deep learning. I have 5 star in
            problem solving in Data Structures and Algorithms.
          </p>
          {contacts.map((contact) => {
            return (
              <div className="contact_left" key={contact.id}>
                <div className="icon">{contact.icon}</div>
                <p>{contact.infoText}</p>
              </div>
            );
          })}
          <div className="social_icons">
            {socialIcons.map((socialIcon) => (
              <a key={socialIcon.id} href={socialIcon.url}>
                {socialIcon.icon}
              </a>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="contact_right"
        >
          <h3>Get In Touch</h3>
          <form
            action="mailto:darunangshu2002@gmail.com"
            method="post"
            enctype="text/plain"
          >
            <div className="row">
              <input type="text" placeholder="First Name" autoComplete="off" />
              <input type="text" placeholder="Last name" autoComplete="off" />
            </div>
            <div className="row">
              <input type="text" placeholder="Phone" autoComplete="off" />
              <input type="email" placeholder="Email" autoComplete="off" />
            </div>
            <div className="row">
              <textarea placeholder="message"></textarea>
            </div>
            <motion.div
              whileHover={{ scale: 1.0 }}
              transition={{ duration: 0.3 }}
            >
              <button className="btn">send</button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
