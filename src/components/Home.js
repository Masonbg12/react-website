import "../styles/App.css";
import Navigation from "./Navigation";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>Mason Gillespie</h1>
          </Col>
        </Row>
        <Row>
          <h2>Software Engineering</h2>
        </Row>
        <Row>
          <Navigation />
        </Row>
      </Container>
    </div>
  );
}

export default Home;
