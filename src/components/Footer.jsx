import React from "react";
import {Row, Col, Container} from 'react-bootstrap';


function Footer() {
    return (
      <footer className="bg-dark text-white py-3">
        <Container>
          <Row>
            <Col className="text-center">
              <p>© 2025 Sync KonnectSphere PVT LTD</p>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <a href="#" className="text-white me-3">Instagram</a>
              <a href="#" className="text-white me-3">Facebook</a>
              <a href="#" className="text-white">YouTube</a>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }

export default Footer;