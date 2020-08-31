import React from "react";
import { Card, Button, Row, Col, Figure } from "react-bootstrap";

const Profile = () => {
  return (
    <div className="card profile shadow-sm p-3 mb-5 bg-white">
      <Card.Body>
        <Row>
          <Col className="text-center" lg={6} md={6} sm={12}>
            <Figure>
              <Figure.Image width={300} height={350} src="foto2.png" />
            </Figure>
          </Col>
          <Col>
            <div className="box sb3">Hi!</div>
            <div className="profile-header">
              <Card.Title>
                <h1>
                  <span>I'm </span>Laislla Ramos
                </h1>
              </Card.Title>
              <Card.Text className="subtitle">Software Developer</Card.Text>
            </div>
            <div className="profile-list">
              <Row>
                <Col lg={3}>
                  <strong className="title">EMAIL</strong>
                </Col>
                <Col>
                  <span className="text-body">laisllaramos@gmail.com</span>
                </Col>
              </Row>
              <Row>
                <Col lg={3}>
                  <strong className="title">LANGUAGE</strong>
                </Col>
                <Col>
                  <span className="text-body">Portuguese, English</span>
                </Col>
              </Row>
              <br></br>
              <Row className="text-center">
                <Col>
                  <a
                    className="btn"
                    href="/LaisllaCostaRamos-Resume.pdf"
                    target="_blank"
                  >
                    See resume
                  </a>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer className="social">
        <ul class="list-group list-group-horizontal-lg  justify-content-center">
          <li class="list-group-item">
            <a href="https://www.linkedin.com/in/laisllacr/">
              <i class="fab fa-linkedin fa-2x"></i>
            </a>
          </li>
          <li class="list-group-item">
            <a href="https://github.com/laisllacr">
              <i class="fab fa-github fa-2x"></i>
            </a>
          </li>
        </ul>
      </Card.Footer>
    </div>
  );
};

export default Profile;
