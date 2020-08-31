import React from "react";
import { Card } from "react-bootstrap";

const About = () => {
  return (
    <div className="card shadow-sm p-3 mb-5 bg-white">
      <Card.Body>
        <div className="profile-header">
          <Card.Title>
            <h1>About me</h1>
          </Card.Title>
        </div>
        <div className="text-about">
          <Card.Text className="text-body">
            Hi, I’m Laislla, I am a Software developer with six years of
            experience developing web applications. My main programming language
            is C#, but I also have hands-on experience with PHP, which is my
            first programming language. <br></br> <br></br>
            I'm a restless learner and committed to achieving goals.
            Certifications are my tools to spread good practices and high
            standards on my team.
          </Card.Text>
        </div>
      </Card.Body>
    </div>
  );
};

export default About;
