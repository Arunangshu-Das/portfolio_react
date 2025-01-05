import React from "react";
import "./About.scss";

import { motion } from "framer-motion";
import { bios } from "../../../Data";
const About = () => {
  return (
    <div className="container " id="about">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>Who Am I?</span>
        <h1>
          <span className="first">A</span>bout <span className="first">M</span>e
        </h1>
      </motion.div>

      <div className="about_container">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="about_left"
        >
          <motion.img
            src="https://res.cloudinary.com/dpmu1oy8z/image/upload/v1703174710/WhatsApp_Image_2023-12-21_at_21.34.33_c918fb25_efhxqa.jpg"
            whileHover={{ y: -18, x: -25 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <motion.div
          className="about_right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p
            style={{
              "text-justify": "inter-word",
              "text-align": "justify",
            }}
          >
            Arunangshu Das is a skilled software developer who works on building
            websites and apps using tools like Spring Boot. He loves helping
            other developers by writing simple guides and tutorials on his blog,
            explaining things like making websites faster and creating small,
            connected apps. He also shares his work on GitHub and talks with
            other developers on Medium to learn and grow together.
            <br />
            <span>~ChatGPT</span>
          </p>
          {bios.map((bio) => {
            return (
              <div className="bio" key={bio.id}>
                <span className="bioKey">
                  {bio.icon}
                  {bio.key}
                </span>
                <span className="bioValue">{bio.value}</span>
              </div>
            );
          })}
          <motion.a
            href="https://blog.arunangshudas.com/"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Read blogs →
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
