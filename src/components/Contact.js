import React from "react";
import { Card, Button, Row, Col, Figure } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="card shadow-sm p-3 mb-5 bg-white">
      <Card.Body className=" text-center">
        <div className="profile-header">
          <h1>Contact me</h1>
        </div>
        <div className="text-about">
          <Row>
            <Col>
              <strong className="title">EMAIL</strong>
            </Col>
          </Row>
          <Row>
            <Col>
              <span className="text-body">laisllaramos@gmail.com</span>
            </Col>
          </Row>
        </div>
      </Card.Body>
    </div>
  );
};

export default Contact;
