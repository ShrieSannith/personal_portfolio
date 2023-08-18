import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/images/meter1.svg";
import meter2 from "../assets/images/meter2.svg";
import colorsharp from "../assets/images/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <section className = 'skill' id = 'skill'>
          <Container>
            <Row>
              <Col>
                <div className="skill-box">
                  <h2>Skills</h2> 
                  <Carousel responsive={responsive} infinite={true} className="Skill-slider">
                    <div className="skill-item">
                      <img src={meter1} alt='images'/>
                      <h5>App Development</h5>
                    </div>
                    <div className="skill-item">
                      <img src={meter2} alt='images'/>
                      <h5>Backend Development</h5>
                    </div>
                    <div className="skill-item">
                      <img src={meter1} alt='images'/>
                      <h5>Frontend Web Development</h5>
                    </div>
                    <div className="skill-item">
                      <img src={meter1} alt='images'/>
                      <h5>Robotics</h5>
                    </div>
                    <div className="skill-item">
                      <img src={meter1} alt='images'/>
                      <h5>C, C++, Python, Java</h5>
                    </div>
                    <div className="skill-item">
                      <img src={meter2} alt='images'/>
                      <h5>UI & UX</h5>
                    </div>
                    <div className="skill-item">
                      <img src={meter1} alt='images'/>
                      <h5>Data Analysis</h5>
                      <p>(MySql, R-studio, Matlab)</p>
                    </div>
                    <div className="skill-item">
                      <img src={meter2} alt='images'/>
                      <h5>DSA</h5>
                    </div>
                  </Carousel>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
    )
}