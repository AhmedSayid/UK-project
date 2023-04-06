import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Contact = () => {
  const [data, setData] = useState({});
  const [mess, setMess] = useState("");

  const changeFunc = (name, value) => {
    setData({ ...data, [name]: value });
  };
  const sendData = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "https://ahmedapi.onrender.com/api/v1/message",
      data
    );
    setMess(res.data.msg);
  };
  return (
    <div id="content">
      <h1>Contact Us</h1>
      <p className="fs-6 fw-bold">
        If you have any enquiries, please contact us on one of the numbers
        below. Alternatively you can email us at{" "}
        <a href="mailto:enquiries@cleaningcomesfirst.co.uk">
          enquiries@cleaningcomesfirst.co.uk
        </a>{" "}
        or fill out the contact form and one of our team will get back you
        shortly.
      </p>
      <p>
        <strong>London HQ:</strong> 0845 880 2429
        <br />
      </p>
      <br />
      <div style={{ color: "#ff0000" }} />
      <Form method="post" onSubmit={sendData}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            name="name"
            onChange={(e) => changeFunc(e.target.name, e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            name="email"
            onChange={(e) => changeFunc(e.target.name, e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Write your message here:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            onChange={(e) => changeFunc(e.target.name, e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Send Message
        </Button>
      </Form>
      {mess}
    </div>
  );
};

export default Contact;
