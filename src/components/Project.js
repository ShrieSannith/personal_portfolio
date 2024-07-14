import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/images/projimg1.jpg";
import projImg2 from "../assets/images/projimg2.jpg";
import projImg3 from "../assets/images/projimg3.jpg";
import projImg4 from "../assets/images/projimg4.jpg";
import projImg5 from "../assets/images/projimg5.jpg";
import colorSharp2 from "../assets/images/color-sharp2.png";

import cms from "../assets/images/cms.jpg"
import ayush from "../assets/images/ayush.png"
import lms from "../assets/images/lms.jpg"

import leaf from "../assets/images/leaf.jpg"
import spam from "../assets/images/spam.jpg"

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Project = () => {
  const projects1 = [
        {
            title: "Call Management System",
            description: "CMS to seamlessly connect customers with company agents to rectfy post-deployment errors. Takes care of call redirecting, allocating priority, and tabulating data.",
            tech:"MERN Stack, Twilio",
            role:"Full Stack Developer",
            link: "https://github.com/ShrieSannith/CMS",
            imgUrl: cms,
        },
        {
            title: "Ayush Web Portal",
            description: "Addressed industry fragmentation and lack of collaboration of AYUSH Organization, by centralizing resources and creating a one-stop platform for all its stakeholders.",
            tech:"HTML, CSS, JS, PHP",
            role:"Full Stack Developer",
            link: "https://github.com/ShrieSannith/AYUSH_WEBPORTAL",
            imgUrl: ayush,
        },
        {
            title: "Learning Management System (Frontend)",
            description: "Developed an engineering-exclusive learning management System to create a platform for organized learning content, increasing ease of learning during exams.",
            tech:"React, Material UI",
            role: "Frontend Developer",
            link: "https://github.com/ShrieSannith/EduVibe",
            imgUrl: lms,
        },

  ]
  const projects2 = [
        {
            title: "Leaf Classification - CNN (Accuracy:97.99%)",
            description: "Identifying crop from leaves which is useful in Crop management, Yield optimization, Land Use planning, and also as an educational tool",
            // tech:"MERN Stack, Twilio",
            // role:"Full Stack Developer",
            link: "https://github.com/ShrieSannith/Crop_Leaf_Classification_97.99_accuracy",
            imgUrl: leaf,
        },
        {
            title: "Spam Detection using R",
            description: "Applied Feature Engineering and Hyperparametric Tuning to a Support Vector Machine Model to classify the input message into spam or not. This helps organize messages by filtering out spam.",
            // tech:"HTML, CSS, JS, PHP",
            // role:"Full Stack Developer",
            link: "https://github.com/ShrieSannith/Spam-Detection-in-R-studio",
            imgUrl: spam,
        },
        {
            title: "PixelChat Project",
          description: "Chatting app using Kotlin and Firebase in android studio",
            link: "https://github.com/ShrieSannith/PixelChat-simple-chatting-app",
            imgUrl: projImg1,
        },

    ]

      const projects = [
        {
            title: "Robotics Project",
          description: "Built a project using Arduino, Bluetooth Module and various sensors and built an app to control it",
            link:"https://github.com/ShrieSannith/Plant-Monitoring-System",
            imgUrl: projImg3,
        },
        {
            title: "ECG Project",
          description: "Developed a simple ECG machine using Arduino and the HC-05 Bluetooth module",
            link:"https://github.com/ShrieSannith/ECG_using_Arduino_and_HC05",
            imgUrl: projImg4,
        },
        {
            title: "Space Invaders Game",
          description: "Created a classic space invaders game using the pygame library",
            link:"https://github.com/ShrieSannith/Space-Invaders",
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
                          projects1.map((project, index) => {
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
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects2.map((project, index) => {
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
                      <Tab.Pane eventKey="third">
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
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  )
}
