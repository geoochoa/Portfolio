import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Deforestation Detector",
      description:
        "A collaborative web app to discover deforestation in the Amazon Jungle through an immersive 3D experience.",
      imgUrl: projImg1,
      repoURL: "https://www.github.com/Deforestation-Detector/web",
      tech: "JavaScript Python HTML/CSS",
    },
    {
      title: "Movie Production Tracker Web App",
      description:
        "A web app to track the activity of movie production, centering around your favorite crew members and actors.",
      imgUrl: projImg2,
      repoURL: "https://www.github.com/geoochoa/ProductionTracker",
      tech: "React HTML/CSS TMDB API",
    },
    {
      title: "SlugCache",
      description:
        "A full-stack web app to find, post and catalog geocaches at UCSC!",
      imgUrl: projImg3,
      repoURL: "https://www.github.com/UCSC-Geocaching/slugcache",
      tech: "Vue.js  Py4Web  Mapbox API",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__fadeIn"
                      : "animate__animated animate__fadeOut"
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    These are some projects I have been a part of in both a solo
                    and collaborative setting. Many were made under Agile
                    practices to ensure an MVP.
                  </p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="bg-r"
      ></img>
    </section>
  );
};
