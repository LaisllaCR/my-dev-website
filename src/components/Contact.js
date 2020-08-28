import React from "react";
import { Card } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="contact">
      <Card className="card shadow-sm p-3 mb-5 bg-white text-center">
        <Card.Body>
          <div className="contact-header">
            <h1>Contact Me</h1>
          </div>
          <div className="text-about">
            <ul>
              <li>
                <strong className="title">EMAIL</strong> <br />
                <span className="text-body cont">laisllaramos@gmail.com</span>
              </li>
            </ul>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Contact;
