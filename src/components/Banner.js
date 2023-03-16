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
                      I’m a Full Stack Software Engineer who has always
                      appreciated working with teams to accomplish a meaningful
                      vision. I'm always learning new technologies so take a
                      look into what I'm doing!
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
