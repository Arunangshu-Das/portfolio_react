import React from "react";
import "./Footer.scss";
import { socialIcons } from "../../../Data";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="footer"
    >
      <div className="copyright">
        <p>
          Copyright&copy; 2023 All rights reserved. Made by{" "}
          <a
            href="https://www.arunangshu.in"
            style={{ "text-decoration": "none" }}
          >
            <span>Arunangshu Das </span>{" "}
          </a>
        </p>
      </div>
      <div className="followMe">
        <h4>Follow Me</h4>
        <div className="stick"></div>
        <div className="social_icons">
          {socialIcons.map((socialIcon) => (
            <a key={socialIcon.id} href={socialIcon.url}>
              {socialIcon.icon}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
