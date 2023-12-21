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
            Hey there, I am Arunangshu, an adept full-stack web developer and
            accomplished full-stack data scientist hailing from West Bengal,
            India. Over the course of the past two years, I have ardently
            embraced the enchanting realm of programming. My passion has been
            fervently directed towards both the artistry of frontend development
            and the intricacies of backend development, coupled with the finesse
            of website designing. Furthermore, I have extensively delved into
            the realm of machine learning and deep learning, successfully honing
            my skills in model training. It is worth noting that I possess an
            impeccable track record, boasting a coveted five-star rating in the
            realm of Data Structures and Algorithms. Additionally, I have
            embarked upon exploring the revolutionary domain of blockchain
            technology, further enriching my repertoire.
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
            href="https://cv.arunangshu.in/"
            download=""
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

export default About