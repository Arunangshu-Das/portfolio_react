import React, { useState } from 'react'
import "./Skills.scss";
import { icons } from '../../../Data';
import { experiences, education, internship } from "../../../Data";
import { finishes } from '../../../Data';
import { motion } from 'framer-motion';
const Skills = () => {
  const [active, setActive] = useState(1)
  return (
    <div className="container" id="skills">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>What I Expert?</span>
        <h1>
          <span className="first">S</span>kills <span className="first">A</span>
          nd <span className="first">E</span>xperience
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="select"
      >
        <button
          onClick={() => setActive(1)}
          className={active === 1 ? "active" : ""}
        >
          Skills
        </button>
        <button
          onClick={() => setActive(2)}
          className={active === 2 ? "active" : ""}
        >
          Internships
        </button>
        <button
          onClick={() => setActive(3)}
          className={active === 3 ? "active" : ""}
        >
          Education
        </button>
        <button
          onClick={() => setActive(4)}
          className={active === 4 ? "active" : ""}
        >
          Experience
        </button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="skills"
      >
        {active === 1 &&
          icons.map((icon, index) => {
            return (
              <div key={index} className="tools">
                {icon}
              </div>
            );
          })}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="experiencs"
      >
        {active === 2 &&
          internship.map((experience) => {
            return (
              <div className="experience" key={experience.id}>
                <span>{experience.year}</span>
                <div className="position">
                  <h3>{experience.position}</h3>
                  <p>{experience.company}</p>
                </div>
              </div>
            );
          })}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="experiencs"
      >
        {active === 3 &&
          education.map((education) => {
            return (
              <div className="experience" key={education.id}>
                <span>{education.year}</span>
                <div className="position">
                  <h3>{education.position}</h3>
                  <p>{education.company}</p>
                </div>
              </div>
            );
          })}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="experiencs"
      >
        {active === 4 &&
          experiences.map((education) => {
            return (
              <div className="experience" key={education.id}>
                <span>{education.year}</span>
                <div className="position">
                  <h3>{education.position}</h3>
                  <p>{education.company}</p>
                </div>
              </div>
            );
          })}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="finishes_container"
      >
        {finishes.map((finish) => {
          return (
            <div className="finishes" key={finish.id}>
              <div className="number">{finish.number}</div>
              <h4 className="item_name">{finish.itemName}</h4>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default Skills