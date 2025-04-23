import "../styles/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faCode } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Nav from "react-bootstrap/Nav";

function Navigation() {
  return (
    <Nav className="justify-content-center">
      <Nav.Item>
        <Nav.Link href="tel:+13612305891" target="_blank" title="phone number">
          <FontAwesomeIcon icon={faPhone} size="lg" />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="mailto:masonbg1206@gmail.com" target="_blank" title="email">
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="https://www.linkedin.com/in/mason-gillespie/" target="_blank" title="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="https://github.com/Masonbg12" target="_blank" title="GitHub">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="https://leetcode.com/u/masonbg/" target="_blank" title="LeetCode">
          <FontAwesomeIcon icon={faCode} size="lg" />
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navigation;
