import {Col, Nav, Navbar, NavbarBrand, NavItem, Row} from 'react-bootstrap';

import scooterLogo from "../Images/LUHLogo.png";
import scooterLogo2 from "../Images/LogoHinten.png";

import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
    return(
        <header>
        <Navbar fixed="top" sticky='top' 
                className="border-top border-gray bg-nlb-skyblue" 
                style={{paddingLeft: "10px", background: "#26D477", position: "fixed", height: "60px"}}
        >
            <Row className="position-relative w-100">
                <Col className="d-flex justify-content-center col-1" >
                    <NavbarBrand title='ScooterBre'>
                        <img src={scooterLogo} alt="Thrive-Logo" className="img-fluid" style={{ width: 45, height: 45}}/>
                        <img src={scooterLogo2} alt="Thrive-Logo" className="img-fluid" style={{ width: 110, height: 45, paddingLeft: "10px"}}/>
                    </NavbarBrand>
                </Col>
                <Col className="d-flex justify-content-start col-7">
                    <h1 className="display-6" style={{paddingLeft: 15}}>E-Scooter Datenanalyse LUH</h1>
                </Col>

                <Col className="d-flex justify-content-end col-4">
                    <Nav className="mrx-auto" navbar>

                        <NavItem className="d-flex align-items-center">
                            
                        </NavItem>

                        <NavItem className="d-flex align-items-center">
                            
                        </NavItem>

                        <NavItem className="d-flex align-items-center">
                            
                        </NavItem>

                        <NavItem className="d-flex align-items-center">
                            
                        </NavItem>

                    </Nav>
                </Col>
            </Row>
        </Navbar>
        </header>
    );
}

export default Header;