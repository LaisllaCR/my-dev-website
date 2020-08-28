import React from "react";
import { Card } from "react-bootstrap";

const About = ({ match }) => {
  return (
    <Card className="card shadow-sm p-3 mb-5 bg-white">
      <Card.Body>
        <div className="profile-header">
          <Card.Title>
            <h1>About me</h1>
          </Card.Title>
        </div>
        <div className="text-about">
          <Card.Text className="text-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            elit purus, malesuada a lorem quis, congue maximus eros. Aliquam
            erat metus, lobortis nec felis eget, iaculis molestie lorem. Fusce
            non lorem porta, fringilla ante nec, dictum elit. Fusce libero odio,
            vehicula vel erat nec, lobortis condimentum odio. Morbi nec ligula
            leo. Duis nulla nisi, sodales a suscipit vel, blandit vitae lectus.
            Proin justo nibh, egestas eu eros sit amet, lacinia fermentum dui.
            Quisque lacinia rhoncus sapien a consequat. Cras suscipit ultrices
            ligula vitae ultrices. Quisque tempor turpis eget justo finibus, at
            iaculis dolor aliquet. Nunc sodales, erat quis commodo volutpat,
            risus nibh bibendum arcu, eu finibus quam dui ac sem. Suspendisse
            potenti.
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default About;
