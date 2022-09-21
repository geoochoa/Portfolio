import { Col } from "react-bootstrap";
import navIcon2 from "../assets/img/nav-icon2.svg";

export const ProjectCard = ({ title, description, imgUrl, repoURL, tech }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="proj-tech">
            <h6>{tech}</h6>
            <div className="social-icon">
              <a href={repoURL} target="_blank" rel="noreferrer">
                <img src={navIcon2} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};
