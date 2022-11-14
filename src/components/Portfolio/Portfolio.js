import styles from "./Portfolio.module.css";
import { Card } from "react-bootstrap";
import React from "react";

// projects images
import ClinicLogo from "../../Images/clinic.webp";
import CarRentalLogo from "../../Images/carRental.png";
import ShoppingLogo from "../../Images/shopping.png";
import HomeLogo from "../../Images/Home1.png";

function Project(props) {
  return (
    <Card className={props.className}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <div className="mt-5">
          {props.github ? (
            <a className="btn btn-dark" href={props.github}>
              Github
            </a>
          ) : undefined}
          {props.liveDemo ? (
            <a className="mx-3 btn btn-dark" href={props.liveDemo}>
              Live Demo
            </a>
          ) : undefined}
        </div>
      </Card.Body>
    </Card>
  );
}

function Portfolio(props, ref) {
  return (
    <section className={styles.container}>
      <div className="mb-5 text-center">
        <h1 ref={ref}>Portfolio</h1>
        <p>My latest projects</p>
      </div>

      <div className={styles.portfolio}>
        <Project
          className={styles["project-one"]}
          img={ShoppingLogo}
          title="Ecommerce"
          text="built with React, React Bootstrap, Nodejs, Express and MongoDB, and it includes 
          authentication, cart and integration with stripe."
          github="https://github.com/AmrHesham27/shoppingReactApp"
          liveDemo="https://shopping-one-psi.vercel.app/"
        />
        <Project
          className={styles["project-two"]}
          img={CarRentalLogo}
          title="Car Rental"
          text="car rental website was built with Jquery, CSS3, PHP and Bootstrap for a company in UAE."
          liveDemo="https://yellowline.me/"
        />
        <Project
          className={styles["project-three"]}
          img={ClinicLogo}
          title="Clinic System"
          text="system to run day to day operations in a clinic, built with Lravel and Bootstrap"
          github="https://github.com/AmrHesham27/clinic"
        />
        <Project
          className={styles["project-four"]}
          img={HomeLogo}
          title="Social Engine for Properties"
          text="Platform for clients and agents interested in selling properties, built with Nodejs and Express"
          github="https://github.com/AmrHesham27/social-engine-properties-backend"
        />
      </div>
    </section>
  );
}

export default React.forwardRef(Portfolio);
