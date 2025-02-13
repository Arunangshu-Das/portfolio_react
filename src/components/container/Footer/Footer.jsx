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
          Copyright&copy; 2024 All rights reserved. Made by{" "}
          <a
            href="https://www.arunangshudas.com"
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
      <div>
        <a
          href="https://blog.arunangshudas.com/"
          target="_blank"
          style={{ marginLeft: "10px", color: "white" }}
        >
          {" "}
          Blog{" "}
        </a>
        <a
          href="https://blog.arunangshudas.com/about/"
          target="_blank"
          style={{ marginLeft: "10px", color: "white" }}
        >
          {" "}
          About{" "}
        </a>
        <a
          href="https://contact.arunangshudas.com/"
          target="_blank"
          style={{ marginLeft: "10px", color: "white" }}
        >
          {" "}
          Contact{" "}
        </a>
        <a
          href="https://blog.arunangshudas.com/privacy-policy-2/"
          target="_blank"
          style={{ marginLeft: "10px", color: "white" }}
        >
          {" "}
          Privacy Policy{" "}
        </a>
        <a
          href="https://blog.arunangshudas.com/terms-of-service/"
          target="_blank"
          style={{ marginLeft: "10px", color: "white" }}
        >
          {" "}
          Terms of Service{" "}
        </a>
        <a
          href="https://blog.arunangshudas.com/code-of-conduct/"
          target="_blank"
          style={{ marginLeft: "10px", color: "white" }}
        >
          {" "}
          Code of Conduct{" "}
        </a>
      </div>
    </motion.div>
  );
};

export default Footer;
