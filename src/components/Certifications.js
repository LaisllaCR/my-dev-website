import React from "react";
import { Card, ListGroup, Row, Col, Figure } from "react-bootstrap";

const Certifications = ({ match }) => {
  return (
    <div className="card shadow-sm p-3 mb-5 bg-white">
      <Row>
        <Col className="skills-column">
          <Card.Body>
            <Row className="one-skill">
              <Col sm={12} md={6} lg={4} className="skills-image text-center">
                <Figure>
                  <Figure.Image
                    width={171}
                    height={180}
                    className="image-skill"
                    src="csm.png"
                  />
                </Figure>
              </Col>
              <Col>
                <Card.Title>
                  <h5>Certified Scrum Master</h5>
                </Card.Title>
                <Card.Text className="skills-details">
                  <ListGroup variant="flush">
                    <ListGroup.Item>By Scrum Alliance</ListGroup.Item>
                    <ListGroup.Item>License 906572</ListGroup.Item>
                    <ListGroup.Item>2018 - 2020</ListGroup.Item>
                  </ListGroup>
                </Card.Text>
              </Col>
            </Row>
            <Row className="one-skill">
              <Col sm={12} md={6} lg={4} className="skills-image text-center">
                <Figure>
                  <Figure.Image
                    width={171}
                    height={180}
                    className="image-skill"
                    src="csd.png"
                  />
                </Figure>
              </Col>
              <Col>
                <Card.Title>
                  <h5>Certified Scrum Developer</h5>
                </Card.Title>
                <Card.Text className="skills-details">
                  <ListGroup variant="flush">
                    <ListGroup.Item>By Scrum Alliance</ListGroup.Item>
                    <ListGroup.Item>License 1075444</ListGroup.Item>
                    <ListGroup.Item>2019 - 2021</ListGroup.Item>
                  </ListGroup>
                </Card.Text>
              </Col>
            </Row>
            <Row className="one-skill">
              <Col sm={12} md={6} lg={4} className="skills-image text-center">
                <Figure>
                  <Figure.Image
                    width={171}
                    height={180}
                    className="image-skill"
                    src="CTFL.jpg"
                  />
                </Figure>
              </Col>
              <Col>
                <Card.Title>
                  <h5>Certified Tester Foundation Level</h5>
                </Card.Title>
                <Card.Text className="skills-details">
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      By International Software Testing Qualifications Board
                    </ListGroup.Item>
                    <ListGroup.Item>2019</ListGroup.Item>
                  </ListGroup>
                </Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </Col>
        <Col lg={6} md={5} sm={12}>
          <Card.Body className="card-body-skills">
            <Card.Text className="skills-header-text">Certifications</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </div>
  );
};

export default Certifications;
