import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>{`Hey! I'm Geo`} </h1>
            <p>
              I’m a recent UC Santa Cruz graduate who’s eager to start a new
              role in software engineering! Coming from a background in film
              production, I’ve always appreciated working with teams to
              accomplish a meaningful vision. I love learning new technologies
              and taking on the challenges of a new project.
            </p>
            <button onClick={() => console.log("connect")}>
              Contact <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}></Col>
        </Row>
      </Container>
    </section>
  );
};
