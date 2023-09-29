import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>What I'm creating with</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <h4>Languages</h4>
                  <h6 className="skills-card">
                    C/C++ Python JavaScript SQL (Postgres) Java Typescript
                  </h6>
                </div>
                <div className="item">
                  <h4>Frameworks</h4>
                  <h6 className="skills-card">
                    React.js Node.js Next.js Vue.js Three.js Py4Web
                  </h6>
                </div>
                <div className="item">
                  <h4>Libraries</h4>
                  <h6 className="skills-card">
                    pandas NumPy Matplotlib TensorFlow PyTorch Keras
                  </h6>
                </div>
                <div className="item">
                  <h4>Developer Tools</h4>
                  <h6 className="skills-card">
                    Git Supabase Firebase Jira Confluence
                  </h6>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="bg-left" />
    </section>
  );
};
