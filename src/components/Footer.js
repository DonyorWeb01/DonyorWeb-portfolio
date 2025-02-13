import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.jpg";
import { FaGithub, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6} className="logo">
            <img src={logo} alt="Logo"  className="logo-img"/>
            <h1>Donyorbek Murotov</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/doniyorbek-murodov-689a03277/"><p><FaLinkedinIn /></p></a>
              <a href="https://t.me/mdscoders01"><p><FaTelegramPlane /></p></a>
              <a href="https://github.com/DonyorWeb01"><p><FaGithub /></p></a>
            </div>
            <p>2025. Created by <span>DonyorWeb</span></p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
