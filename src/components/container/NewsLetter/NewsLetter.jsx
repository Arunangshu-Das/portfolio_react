import React from "react";
import { useRef, useState } from "react";
import "./NewsLetter.scss";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const NewsLetter = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
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

    var data = {
      name: form.firstname + " " + form.lastname,
      email: form.email,
      option: "1",
    };

    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Configure the POST request
    xhr.open("POST", "https://newsletter.arunangshudas.com/submit", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    // Convert data to JSON format
    var jsonData = JSON.stringify(data);

    // Send the request
    xhr.send(jsonData);

    // Handle the response
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        // Request was successful
        setLoading(false);

        setForm({
          firstname: "",
          lastname: "",
          email: "",
        });
      } else {
        // Request failed
        setLoading(false);
        console.error(xhr.statusText);

        alert("Ahh, something went wrong. Please try again.");
      }
    };
  };

  return (
    <div className="container1" id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>get connected</span>
        <h1>
          <span className="first">S</span>ubscribe{" "}
          <span className="first">T</span>o <span className="first">O</span>ur{" "}
          <span className="first">N</span>
          ewsLetter
        </h1>
      </motion.div>
      <div className="newsletter_form">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="contact_right"
        >
          <center>
            <h3>Get connected</h3>
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
                type="email"
                placeholder="Email"
                autoComplete="off"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <motion.div
              whileHover={{ scale: 1.0 }}
              transition={{ duration: 0.3 }}
            >
              <button className="btn">
                {loading ? "Subscribing..." : "Subscribe"}
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default NewsLetter;
