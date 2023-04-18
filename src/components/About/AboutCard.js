import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Danussh P </span>
            from <span className="purple"> Chennai, India.</span>
            <br />
            <br />I am a Full Stack Developer in Athenahealth.
            <br />Graduated from SA Engineering in Stream of Electronics and Communication
            and inclined Towards Developing Products and technolgy {String.fromCodePoint(0x1F49C)}
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Tech
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Danussh P</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
