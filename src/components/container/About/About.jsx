import React from 'react'
import "./About.scss";

import { motion } from 'framer-motion';
import { bios } from '../../../Data';
import portfolio from "../../../assets/portfolio.jpg"
const About = () => {


  return (
    <div className="container " id="about">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>Who Am I?</span>
        <h1>About Me</h1>
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
            whileHover={{ y: -48, x: -55 }}
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
            I'm Arunangshu, a skilled full-stack web developer and accomplished
            full-stack data scientist hailing from West Bengal, India. For the
            past two years, I've passionately delved into programming, focusing
            on frontend artistry, backend intricacies in Node.js and Spring, and
            the finesse of website design. Alongside, I've extensively explored
            machine learning and deep learning, refining my skills in model
            training. I take pride in my impeccable track record, boasting a
            five-star rating in Data Structures and Algorithms. Additionally, my
            journey includes an in-depth exploration of Data Structures and
            Algorithms, leveraging Spring Boot's robust capabilities for backend
            development, resulting in a comprehensive and enriched skill set.
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
          {/* <motion.a
            href="https://arunangshu.in/#contact"
            download=""
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Contact Me
          </motion.a> */}
        </motion.div>
      </div>
    </div>
  );
}

export default About