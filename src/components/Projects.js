import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import hostImg1 from "../assets/img/nav-icon3.svg";
import hostImg2 from "../assets/img/nav-icon4.svg";
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
      hostURL: "https://www.deforestationdetector.com",
      hostIcon: hostImg1,
      tech: "JavaScript Python HTML/CSS",
    },
    {
      title: "Movie Production Tracker Web App",
      description:
        "A web app to track the activity of movie production, centering around your favorite crew members and actors.",
      imgUrl: projImg2,
      repoURL: "https://www.github.com/geoochoa/ProductionTracker",
      hostURL: "",
      hostIcon: "",
      tech: "React HTML/CSS TMDB-API",
    },
    {
      title: "SlugCache",
      description:
        "A full-stack web app to find, post and catalog geocaches at UCSC!",
      imgUrl: projImg3,
      repoURL: "https://www.github.com/UCSC-Geocaching/slugcache",
      hostURL: "",
      hostIcon: "",
      tech: "Vue.js Py4Web Mapbox-API",
    },
    {
      title: "Smaalworld",
      description:
        "A new portfolio under development to help create a better introduction!",
      imgUrl: projImg4,
      repoURL: "https://github.com/geoochoa/SmaalWorld",
      hostURL: "https://velvety-maamoul-2829e7.netlify.app/",
      hostIcon: hostImg2,
      tech: "React React-Three-Fiber/Three.js",
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
