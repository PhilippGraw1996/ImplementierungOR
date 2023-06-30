import React from 'react';
import BoxPlot from "../graphComponents/BoxPlotPlain"

import {Row} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import 'react-datepicker/dist/react-datepicker.css';

const BoxPlotScene = () => {

    return(
        <Container className="min-vh-100 pb-5" style={{marginTop: 100}}>  
            <h1>Box Plot View - Scooter Data</h1> 
            <Col style={{marginTop: 30,
                        marginBottom: 100,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        width: 1300,
                        height: 700,
                        borderRadius: 10
                        }}>
                <Row>
                    <BoxPlot></BoxPlot>
                </Row>
            </Col>

        </Container>
    );
}

export default BoxPlotScene;