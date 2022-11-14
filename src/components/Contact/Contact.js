import React from "react";
import styles from "./Contact.module.css";
import {
  Card,
  CardGroup,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

function ContactCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

function Contact(props, ref) {
  function handleForm() {}

  return (
    <section className={styles.container} ref={ref}>
      <div className="mb-5">
        <h1>Contact</h1>
        <p>send me a message</p>
      </div>
      <div>
        <Form>
          <FormGroup>
            <FormLabel>Your Email</FormLabel>
            <FormControl name="email" />
          </FormGroup>
          <FormGroup className="mt-4">
            <FormLabel>Message</FormLabel>
            <textarea className="form-control" />
          </FormGroup>
          <button onClick={handleForm} type="button" className="btn-one my-3">
            Send Message
          </button>
        </Form>
      </div>
      <div className="d-flex my-3" style={{ width: "80px" }}>
        <div className={styles.line}></div>OR<div className={styles.line}></div>
      </div>
      <div className="d-flex flex-row mt-3 mb-5">
        <CardGroup>
          <ContactCard title={<FaWhatsapp />} text="01551694277" />
          <ContactCard
            title={<FaEnvelope />}
            text="eng.amrhesham.22@gmail.com"
          />
        </CardGroup>
      </div>
    </section>
  );
}

export default React.forwardRef(Contact);
