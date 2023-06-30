import {Row, Col, Navbar, NavLink} from 'react-bootstrap';
import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => (
  <footer>
    <Navbar fixed="bottom" className="border-top border-gray bg-nlb-skyblue"  style={{background: "#26D477"}}>
      <Row className="position-relative w-100">
        <Col className="d-flex justify-content-center col-1" >
          <NavLink>
            Datenschutz
          </NavLink>
        </Col>
        <Col className="d-flex justify-content-center col-1" >
          <NavLink>
            Impressum
          </NavLink>
        </Col>
      </Row>
    </Navbar>
  </footer>
);

export default Footer;