import React from "react";
import { Card, Button, Row, Col, Figure } from "react-bootstrap";

const Profile = ({ match }) => {
  return (
    <div className="section-profile">
      <Card className="card profile shadow-sm p-3 mb-5 bg-white">
        <Card.Body>
          <Row>
            <Col className="text-center">
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
                <ul>
                  <li>
                    <strong className="title">EMAIL</strong>
                    <span className="text-body">laisllaramos@gmail.com</span>
                  </li>
                  <li>
                    <strong className="title">LANGUAGE</strong>
                    <span className="text-body cont">Portuguese, English</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Button>Download resume</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer className="social">
          <ul class="list-group list-group-horizontal-sm  justify-content-center">
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
      </Card>
    </div>
  );
};

export default Profile;
