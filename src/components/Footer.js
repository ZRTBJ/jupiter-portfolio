import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailicon from "../Assets/email-icon.svg";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Yevhenii Bereznitskyi</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SB</h3>
        </Col>
        <Col md="4" className="footer-body">
          <h3>
            {" "}
            <img
              class="relative overflow-hidden shrink-0 object-contain z-[1]"
              loading="lazy"
              alt=""
              src={emailicon}
            ></img>{" "}
            codedev112703@gmail.com
          </h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
