import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center" id="footer-icons">
          <Col size={12} sm={6}>
            <h1> </h1>
          </Col>
          <Col
            size={12}
            sm={6}
            className="text-center text-sm-end"
            id="footer-icons"
          >
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/geoochoa/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="li-icon" />
              </a>
              <a
                href="https://github.com/geoochoa"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon2} alt="gh-icon" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
