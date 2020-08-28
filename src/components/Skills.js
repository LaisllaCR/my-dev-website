import React from "react";
import { Card, ListGroup, Row, Col, Figure } from "react-bootstrap";

const Skills = ({ match }) => {
  return (
    <div className="card skills">
      <Row>
        <Col>
          <Card.Body className="card-body-skills">
            <Card.Text className="skills-header-text">What I Can Do</Card.Text>
          </Card.Body>
        </Col>
        <Col lg={6}>
          <Card.Body>
            <Row className="one-skill">
              <Col className="skills-image text-center">
                <Figure>
                  <Figure.Image width={171} height={180} src="csharp.png" />
                </Figure>
              </Col>
              <Col>
                <Card.Title>
                  <h5>C# Programming</h5>
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
                <Figure className="asp-net">
                  <Figure.Image
                    width={171}
                    height={180}
                    src="dotnetframework.jpg"
                  />
                </Figure>
              </Col>
              <Col>
                <Card.Title>
                  <h5>ASP .NET Framework</h5>
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
                  <Figure.Image width={171} height={180} src="apirest.png" />
                </Figure>
              </Col>
              <Col>
                <Card.Title>
                  <h5>REST APIs</h5>
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
      </Row>
    </div>
  );
};

export default Skills;
