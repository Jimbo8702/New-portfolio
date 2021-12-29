import React from "react";
import { Form, Button } from "react-bootstrap";
export default function Contact() {
  return (
    <div className="d-flex flex-column  justify-content-around height">
      <div className=" container roundCorners fancyText p-2">
        <h1 className="text-center">Like what you see? Reach out!</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Send me your email!</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text>It's safe with me. I promise.</Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <div className="container roundCorners fancyText p-2 ">
        <h1 className="text-center">Other ways to reach me!</h1>
        <div className="d-flex flex-row justify-content-around">
          <div className="roundCorners image"></div>
          <div className="roundCorners image"></div>
          <div className="roundCorners image"></div>
        </div>
      </div>
    </div>
  );
}
