import React from 'react';
import Pie from "../graphComponents/PieChartPlain"
import PieChartSDK from "../MongoDBChartComponents/MongoDBSDK/ChartSDK"

import {Row} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import 'react-datepicker/dist/react-datepicker.css';

import PieFrame from "../MongoDBChartComponents/Frames/BarChartiFrame";

const PieChartScene = () => {

    return(
        <Container className="min-vh-100 pb-5" style={{marginTop: 100}}>  
            <h1>Pie Chart View - Scooter Data</h1> 
            <Row style={{marginTop: 30,
                        marginBottom: 100,
                        borderWidth: 1,
                        borderStyle: "solid",
                        width: 1300,
                        height: 700
                        }}>
                <Col>
                    <PieChartSDK height={'700px'} width={'1300px'} chartId={'649dfacb-b269-4702-8689-1fa3130bc4b3'}></PieChartSDK>
                </Col>
            </Row>

            <Row style={{marginTop: 30,
                        marginBottom: 100,
                        borderWidth: 1,
                        borderStyle: "solid",
                        width: 1300,
                        height: 700
                        }}>
                <Col>
                    <PieChartSDK height={'700px'} width={'1300px'} chartId={'649dfc19-e5b0-4467-8dd8-c2474b93d45f'}></PieChartSDK>
                </Col>
            </Row>

            <Row style={{marginTop: 30,
                        marginBottom: 100,
                        borderWidth: 1,
                        borderStyle: "solid",
                        width: 1300,
                        height: 700
                        }}>
                <Col>
                    <PieChartSDK height={'700px'} width={'1300px'} chartId={'649dfb81-d8a7-4814-883e-650d4f42f0e2'}></PieChartSDK>
                </Col>
            </Row>

        </Container>
    );
}

export default PieChartScene;