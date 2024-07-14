import { Col } from "react-bootstrap";

export const ProjectCard = ({ tech, title, description, imgUrl, link, role }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="projimbxbx">
        <div className="proj-imgbx">
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span><br /><br />
            <span>{tech}</span><br/>
            <span>{role}</span><br/>
            <button><a href = {link} target ="_blank">Code</a></button>
          </div>
          </div>
        </div>
    </Col>
  )
}
