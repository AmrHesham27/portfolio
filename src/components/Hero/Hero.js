import React from "react";
import styles from "./Hero.module.css";
import ProfileImage from "../../Images/profile.jpg";
import WaveImage from "../../Images/wave.png";

import {
  FaGithub,
  FaLinkedin,
  FaMouse,
  FaAngleDoubleDown,
  FaLocationArrow,
} from "react-icons/fa";

function Hero(props, ref) {
  return (
    <section className={styles.grid} ref={ref}>
      <div className={`${styles.image} mt-5`}>
        <img src={ProfileImage} width={360} alt="Amr Hesham" />
      </div>
      <div className={styles.header}>
        <div className="d-flex">
          <h1>Amr Hesham </h1>
          <img src={WaveImage} alt="hand wave" width={68} />
        </div>
        <p className="gray-text mt-4">
          i'm Fullstack developer, and i'm very passionated and dedicated about
          my work..
        </p>
        <button className="btn-one mt-4">
          <span className="p-3">Say Hello</span>{" "}
          <FaLocationArrow size="1em" color="#ffffff" />
        </button>
        <div className="d-felx mt-3">
          <FaGithub size="1.2em" className="m-2" color="#484848" />
          <FaLinkedin size="1.2em" className="m-2" color="#484848" />
        </div>
      </div>
      <div className={styles.footer}>
        <FaMouse size="1.5em" color="#484848" />
        <span className="p-2">scroll</span>
        <FaAngleDoubleDown
          size="1em"
          color="#484848"
          className={styles.arrow}
        />
      </div>
    </section>
  );
}

export default React.forwardRef(Hero);
