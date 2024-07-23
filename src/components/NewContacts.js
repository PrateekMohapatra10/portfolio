import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg"


export const NewContacts = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_5febhtj',
        'template_zxrgyzj',
        form.current, {
        publicKey: '8WrUkGns1WIu9Hyh6',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          console.log("Message Sent Sucessfully");
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Me" />
          </Col>

          <Col md={6}>
          <h2>Get In Touch</h2>
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form>

          </Col>

        </Row>
      </Container>
    </section>
  )
}