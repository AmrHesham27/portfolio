import styles from "./Skills.module.css";
import { FaGem } from "react-icons/fa";
import React from "react";

function Skill(props) {
  return (
    <div className={styles.skill}>
      <FaGem color="#3490e2" />
      <span className="p-2">{props.name}</span>
    </div>
  );
}

function Skills(props, ref) {
  return (
    <section className={styles.container} ref={ref}>
      <h1>Skills</h1>
      <p>i use these technologies to build websites</p>
      <div className={styles.skills}>
        <div className="row">
          <div className="col-4 d-flex flex-column">
            <Skill name="Javascript" />
            <Skill name="React" />
            <Skill name="Redux" />
          </div>

          <div className="col-4 d-flex flex-column">
            <Skill name="Laravel" />
            <Skill name="MySQL" />
            <Skill name="PHP" />
          </div>

          <div className="col-4 d-flex flex-column">
            <Skill name="MongoDB" />
            <Skill name="NodeJS" />
            <Skill name="Express" />
            <Skill name="Bootstrap" />
            <Skill name="Sass" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.forwardRef(Skills);
