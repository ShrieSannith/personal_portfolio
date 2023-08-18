import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/images/logo.svg";
import navIcon1 from "../assets/images/nav-icon1.svg";
import navIcon2 from "../assets/images/nav-icon2.svg";
import navIcon3 from "../assets/images/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer" id ="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h1>Thank You</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <h3>Contact me at</h3>
            <h4>EMAIL</h4>
            <h5>shriesannith03@gmail.com</h5>
            <h4>PHONE</h4>
            <h5>+91 8838110950</h5>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}