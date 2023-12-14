import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/images/projimg1.jpg";
import projImg2 from "../assets/images/projimg2.jpg";
import projImg3 from "../assets/images/projimg3.jpg";
import projImg4 from "../assets/images/projimg4.jpg";
import projImg5 from "../assets/images/projimg5.jpg";
import colorSharp2 from "../assets/images/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Project = () => {

      const projects = [
        {
            title: "PixelChat Project",
            description: "Chatting app using Kotlin and Firebase in android studio",
            imgUrl: projImg1,
        },
        {
            title: "Employee Management Website",
            description: "Built an employee management website",
            imgUrl: projImg2,
        },
        {
            title: "Robotics Project",
            description: "Built a project using Arduino, Bluetooth Module and various sensors and built an app to control it",
            imgUrl: projImg3,
        },
        {
            title: "ECG Project",
            description: "Developed a simple ECG machine using Arduino and the HC-05 Bluetooth module",
            imgUrl: projImg4,
        },
        {
            title: "Space Invaders Game",
            description: "Created a classic space invaders game using the pygame library",
            imgUrl: projImg5,
        }
    ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
               
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" >
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

