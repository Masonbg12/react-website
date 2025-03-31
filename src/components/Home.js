import "../styles/App.css";
import Navigation from "./Navigation";
import AboutMe from "./AboutMe";
import profilepic from "../images/profile_pic.JPG";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function Home() {
  return (
    <div>
      <section>
        <Container className="Container">
          <Row>
            <h1 className="custom-font">Mason Gillespie</h1>
          </Row>
          <Row>
            <h2 className="custom-font">Software Engineering</h2>
          </Row>
          <Row>
            <Navigation />
          </Row>
          <Row>
            <p id="footer" className="custom-font">
              About Me
            </p>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Image src={profilepic} rounded fluid />
          </Row>
          <Row>
            <AboutMe />
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Home;
