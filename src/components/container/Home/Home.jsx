import React from 'react'
import "./Home.scss"
import { motion } from 'framer-motion'


const Home = () => {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1
      }

    }
  }


  return (
    <motion.div
      className="container "
      id="home"
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 2,
        delay: 0.5,
      }}
    >
      <div className="profile">
        <img
          src="https://res.cloudinary.com/dpmu1oy8z/image/upload/v1703783410/Brown_Minimalist_Elegant_Professional_Personal_Business_Card_8_wwndmj.png"
          alt="portfolio"
        />
      </div>
      <div className="profile_text">
        <h3 className="name">
          Hi, I'm <span>Arunangshu Das</span>{" "}
        </h3>
        <span className="job">
          Web Developer || Machine Learning Engineer || Software Developer
        </span>
        <span className="text">
          Passionate
          <br /> to craft innovative <br /> web products, Machine Learning,
          Software Products.
        </span>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate="animation"
        >
          connect with me
        </motion.a>
        <div className="web">Web Developer</div>
        <div className="ui">Software Developer</div>
        <div className="freelance">Machine Learning Engineer</div>
      </div>
    </motion.div>
  );
}

export default Home