import { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  repoURL,
  hostURL,
  hostImg,
  tech,
}) => {
  const [hostedLink, setHostedLink] = useState(false);

  useEffect(() => {
    if (hostURL !== "") setHostedLink(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
              {hostedLink && (
                <a href={hostURL} target="_blank" rel="noreferrer">
                  <img src={navIcon3} alt="" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};
