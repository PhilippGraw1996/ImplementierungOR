import React from 'react';
import BarChartPlain from "../graphComponents/BarChartPlain"

import {Row} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import 'react-datepicker/dist/react-datepicker.css';

const BarChartSceneHorizontal = () => {

    

    return(
        <Container className="min-vh-100 pb-5" style={{marginTop: 100}}>   
            <h1>Bar Chart View - Scooter Data</h1>
            <Col style={{marginTop: 30,
                        marginBottom: 100,
                        borderWidth: 1,
                        borderStyle: "solid",
                        borderRadius: "5px",
                        width: 1300,
                        height: 400
                        }}>
                <Row>
                    <BarChartPlain></BarChartPlain>
                </Row>
            </Col>

        </Container>
    );
}

export default BarChartSceneHorizontal;