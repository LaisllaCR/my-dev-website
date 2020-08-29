import React from "react";
import { Card, ListGroup, Row, Col, Figure } from "react-bootstrap";

const Certifications = ({ match }) => {
  return (
    <div className="card certifications">
      <Row>
        <Col>
          <Card.Body>
            <Row className="one-skill">
              <Col className="skills-image text-center">
                <Figure>
                  <Figure.Image width={171} height={180} src="csm.png" />
                </Figure>
              </Col>
              <Col>
                <Card.Title>
                  <h5>Certified Scrum Master</h5>
                </Card.Title>
                <Card.Text className="skills-details">
                  <ListGroup variant="flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                  </ListGroup>
                </Card.Text>
              </Col>
            </Row>
            <Row className="one-skill">
              <Col className="skills-image text-center">
                <Figure>
                  <Figure.Image width={171} height={180} src="csd.png" />
                </Figure>
              </Col>
              <Col>
                <Card.Title>
                  <h5>Certified Scrum Developer</h5>
                </Card.Title>
                <Card.Text className="skills-details">
                  <ListGroup variant="flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                  </ListGroup>
                </Card.Text>
              </Col>
            </Row>
            <Row className="one-skill">
              <Col className="skills-image text-center">
                <Figure>
                  <Figure.Image width={171} height={180} src="CTFL.jpg" />
                </Figure>
              </Col>
              <Col>
                <Card.Title>
                  <h5>Tester Foundation Level</h5>
                </Card.Title>
                <Card.Text className="skills-details">
                  <ListGroup variant="flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                  </ListGroup>
                </Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </Col>

        <Col>
          <Card.Body className="card-body-skills">
            <Card.Text className="skills-header-text">Certifications</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </div>
  );
};

export default Certifications;
