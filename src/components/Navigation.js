import "../styles/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faCode } from "@fortawesome/free-solid-svg-icons";
import { fab, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Nav from "react-bootstrap/Nav";

function Navigation() {
  return (
    <Nav className="justify-content-center">
      <Nav.Item>
        <Nav.Link href="tel:+13612305891" title="phone number">
          <FontAwesomeIcon icon={faPhone} size="lg" />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <FontAwesomeIcon icon={faCode} size="lg" />
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navigation;
