import React from 'react';
import Akkord from "../graphComponents/AkkordDaigrammPlain";

import {Row} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import 'react-datepicker/dist/react-datepicker.css';

const PieChartScene = () => {

    return(
        <Container className="min-vh-100 pb-5" style={{marginTop: 100}}>  
            <h1>Akkord Diagramm View - Scooter Data</h1> 
            <Row style={{marginTop: 30,
                        marginBottom: 100,
                        borderWidth: 1,
                        borderStyle: "solid",
                        width: 1300,
                        height: 700
                        }}>
                <Col>
                    <Akkord/>
                </Col>
            </Row>

        </Container>
    );
}

export default PieChartScene;