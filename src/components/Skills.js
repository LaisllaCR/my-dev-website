import React from "react";
import { Card, ListGroup, Row, Col, Figure } from "react-bootstrap";

const Skills = ({ match }) => {
  return (
    <div className="card shadow-sm p-3 mb-5 bg-white">
      <Row>
        <Col lg={6} md={5} sm={12}>
          <Card.Body className="card-body-skills">
            <Card.Text className="skills-header-text">What I Can Do</Card.Text>
          </Card.Body>
        </Col>
        <Col className="skills-column">
          <Card.Body>
            <Row className="one-skill">
              <Col sm={12} md={6} lg={4} className="skills-image text-center">
                <Figure>
                  <Figure.Image
                    width={171}
                    height={180}
                    className="image-skill"
                    src="csharp.png"
                  />
                </Figure>
              </Col>
              <Col>
                <Card.Title>
                  <h5>C# Programming</h5>
                </Card.Title>
                <Card.Text className="skills-details">
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      Development of Web Applications
                    </ListGroup.Item>
                    <ListGroup.Item>Clean Code Principles</ListGroup.Item>
                    <ListGroup.Item>NUnit testing</ListGroup.Item>
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
                    src="asp.png"
                  />
                </Figure>
              </Col>
              <Col>
                <Card.Title>
                  <h5>ASP .NET Framework</h5>
                </Card.Title>
                <Card.Text className="skills-details">
                  <ListGroup variant="flush">
                    <ListGroup.Item>ASP .NET Core 2.0 and 3.0 </ListGroup.Item>
                    <ListGroup.Item>ASP .NET 4.6+</ListGroup.Item>
                    <ListGroup.Item>Entity Framework 6+</ListGroup.Item>
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
                    src="api.png"
                  />
                </Figure>
              </Col>
              <Col>
                <Card.Title>
                  <h5>REST APIs</h5>
                </Card.Title>
                <Card.Text className="skills-details">
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      Design and Development with ASP .NET Core
                    </ListGroup.Item>
                    <ListGroup.Item>Swagger UI</ListGroup.Item>
                    <ListGroup.Item>Postman and SoapUI testing</ListGroup.Item>
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
