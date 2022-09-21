import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const Banner = () => {
  return (
    <Router>
      <section className="banner" id="home">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible
                        ? "animate__animated animate__fadeInLeft"
                        : "animate__animated animate__fadeOutLeft"
                    }
                  >
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{`Hey! I'm Geo`} </h1>
                    <p>
                      I’m a recent UC Santa Cruz graduate who’s eager to start a
                      new role in software engineering! Coming from a background
                      in film production, I’ve always appreciated working with
                      teams to accomplish a meaningful vision. I love learning
                      new technologies and taking on the challenges of a new
                      project.
                    </p>
                    <HashLink to="#connect" style={{ textDecoration: "none" }}>
                      <button className="banner-connect">
                        Contact <ArrowRightCircle size={25} />
                      </button>
                    </HashLink>
                  </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}></Col>
          </Row>
        </Container>
      </section>
    </Router>
  );
};
