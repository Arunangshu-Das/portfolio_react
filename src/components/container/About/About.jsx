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
            Hi, I am Arunangshu Das, an accomplished expert in machine learning
            (ML), natural language processing (NLP), image processing, deep
            learning, statistics, and artificial intelligence (AI). With a
            strong foundation in research and coding, I am dedicated to
            advancing these fields through innovative solutions and cutting-edge
            methodologies. My expertise lies in developing sophisticated
            algorithms, leveraging advanced statistical techniques, and
            harnessing the power of AI to tackle complex challenges. Whether
            it's designing robust ML models, refining NLP algorithms, optimizing
            image processing pipelines, or delving into deep learning
            architectures, I am driven by a passion for pushing the boundaries
            of what's possible in AI-driven technologies.
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
            Read blogs
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
