import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import amazon from "../../Assets/Projects/amazon.webp"
import money from "../../Assets/Projects/money.webp"
import product from "../../Assets/Projects/product.webp"
import video from "../../Assets/Projects/video.webp"
import weather from "../../Assets/Projects/weather.webp"
import memories from "../../Assets/Projects/memories.webp"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={video}
              isBlog={false}
              title="Video Call"
              description="This app Provides login Facility along with the Users Time Logged In can be exported to Excel Sheet Along with End to End Video Calling The specific user in search Or sharing the socket ID to the registered users"
              link="https://github.com/danussh/video-frontend"
              live=" https://takeleap.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazon}
              isBlog={false}
              title="AMAZON CLONE"
              description="Fully Functioning AMAZON CLONE Website with Stripe Payment Gateway and Firebase Hoisting"
              link="https://github.com/danussh/Amazon-Clone"
              live="https://clone-36782.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memories}
              isBlog={false}
              title="Memories Media"
              description="The App is called Memories and it is a simple social media app that allows users to post interesting events that happened in their lives along with Upload of Photos and Like Functionality similar to facebook likes"
              link="https://github.com/danussh/memoriesmern"
              live="https://heuristic-saha-dd415f.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Finder"
              description="An app that searches Weather across the Globe and see all details using Weather API"
              link="https://github.com/danussh/weather"
              live="https://blissful-blackwell-082fd6.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={money}
              isBlog={false}
              title="Money Manager App"
              description="This app Keeps the Track of Income and Expenses It uses MERN stack build to acomplish the same."
              link="https://github.com/danussh/money-manager-frontend"
              live="https://objective-benz-f54306.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={product}
              isBlog={false}
              title="Product Management"
              description="This app Provides login Facility along with the product management It uses MERN stack build to acomplish the same."
              link="https://github.com/danussh/Product-management-frontend"
              live="https://github.com/danussh/Product-management-frontend"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
