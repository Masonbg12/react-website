import "../styles/App.css";
import Navigation from "./Navigation";
import AboutMe from "./AboutMe";
import profilepic from "../images/profile_pic.JPG";
import { Container, Row, Image, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div>
      <Container className="full-center vh-100 px-3">
        <Row className="mt-auto">
          <h1 className="display-1 custom-font">Mason Gillespie</h1>
        </Row>
        <Row>
          <h2 className="display-6 custom-font">Software Engineering</h2>
        </Row>
        <Row>
          <Navigation />
        </Row>
        <Row className="mt-auto">
          <div className="animation">
            <FontAwesomeIcon
              className="me-2"
              icon={faArrowRight}
              rotation={90}
            />
            <p className="custom-font">About Me</p>
            <FontAwesomeIcon
              className="ms-2"
              icon={faArrowRight}
              rotation={90}
            />
          </div>
        </Row>
      </Container>
      <Container className="bio px-3">
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={6} className="mb-3 mb-md-0 d-flex justify-content-center">
            <Image fluid src={profilepic} rounded />
          </Col>
          <Col xs={12} md={6} className="full-center text-center">
            <AboutMe />
          </Col>
        </Row>
      </Container>
      <Container className="mt-5 px-3">
        <Row>
          <div className="animation justify-content-center">
              <FontAwesomeIcon
                className="me-2"
                icon={faArrowRight}
                rotation={90}
              />
              <p className="custom-font">Resume</p>
              <FontAwesomeIcon
                className="ms-2"
                icon={faArrowRight}
                rotation={90}
              />
            </div>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} className="text-center">
          <a
              href="https://docs.google.com/document/d/1eRqe_0ns3AVT1pVvMx1tjadKnTBAivWp/export?format=pdf"
              className="btn btn-primary my-3"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Download Resume (PDF)
            </a>
            <iframe
              src="https://docs.google.com/document/d/1eRqe_0ns3AVT1pVvMx1tjadKnTBAivWp/preview"
              width="100%"
              height="925px"
              title="Mason Gillespie Resume"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
