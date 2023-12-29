import React from "react";
import { useRef, useState } from "react";
import "./Contact.scss";
import { contacts } from "../../../Data";
import { socialIcons } from "../../../Data";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
    ph: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_gjak82v",
        "template_brztmkm",
        {
          from_name: form.firstname + " " + form.lastname,
          to_name: "Arunangshu Das",
          from_email: form.email,
          to_email: "darunangshu2002@gmail.com",
          from_ph: form.ph,
          message: form.message,
        },
        "afm9_sjwrOsszeKpb"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible!");

          setForm({
            firstname: "",
            lastname: "",
            email: "",
            message: "",
            ph: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="container" id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>get in touch</span>
        <h1>
          <span className="first">C</span>ontact{" "}
          <span className="first">M</span>e
        </h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="contact_left_container"
        >
          <center>
            <h3>
              Just Say <span>Hi</span>
            </h3>
          </center>
          {/* <p className="contact_text">
            Hey there, I am Arunangshu, a full-stack web developer and a
            full-stack data scientist residing in West Bengal, India. I have
            spent my past 2 years falling in love with the world of code. I have
            certainly developed a keen interest in frontend development as well
            as backend development and website designing and as well model
            training in machine learning and deep learning. I have 5 star in
            problem solving in Data Structures and Algorithms.
          </p> */}
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
          <center>
            <h3>Get In Touch</h3>
          </center>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            method="post"
            enctype="text/plain"
          >
            <div className="row">
              <input
                type="text"
                placeholder="First Name"
                autoComplete="off"
                value={form.firstname}
                onChange={handleChange}
                name="firstname"
                required
              />
              <input
                type="text"
                placeholder="Last name"
                autoComplete="off"
                value={form.lastname}
                onChange={handleChange}
                name="lastname"
                required
              />
            </div>
            <div className="row">
              <input
                type="text"
                placeholder="Phone"
                autoComplete="off"
                name="ph"
                value={form.ph}
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Email"
                autoComplete="off"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="row">
              <textarea
                rows={7}
                name="message"
                placeholder="message"
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <motion.div
              whileHover={{ scale: 1.0 }}
              transition={{ duration: 0.3 }}
            >
              <button className="btn">{loading ? "Sending..." : "Send"}</button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
