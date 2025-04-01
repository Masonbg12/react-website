import "../styles/App.css";
import Navigation from "./Navigation";
import AboutMe from "./AboutMe";
import profilepic from "../images/profile_pic.JPG";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div>
      <Container>
        <section>
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
            <div className="footer">
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
        </section>
      </Container>
      <Container className="bio">
        <Row className="w-75">
          <Image src={profilepic} roundedCircle />
        </Row>
        <Row className="aboutMe">
          <AboutMe />
        </Row>
      </Container>
    </div>
  );
}

export default Home;
