import React from 'react';
import {useState} from 'react';

import LineChartSDK from "../MongoDBChartComponents/MongoDBSDK/ChartSDK"

import {Form, FormGroup, FormLabel, Row} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import 'react-datepicker/dist/react-datepicker.css';



const AreaDiagram = () => {

    const mainChart = '649fe631-84f0-4aa6-8a7e-a5891ecb6175';
    const secondChart = '649fe3f0-2ac4-41cc-829d-c2e1a94ef2f4';

    return(
        <Container className="min-vh-100 pb-5" style={{marginTop: 100}}>

            <h1>Area Diagrams</h1>
            <Col style={{marginTop: 30,
                        marginBottom: 100,
                        borderWidth: 1,
                        borderStyle: "solid",
                        borderRadius: "5px",
                        width: 1300,
                        height: 700
                        }}>
                <Row>
                    <LineChartSDK height={'650px'} width={'1250px'} chartId={`${mainChart}`}></LineChartSDK>
                </Row>
            </Col>
            <Col style={{marginTop: 30,
                        marginBottom: 100,
                        borderWidth: 1,
                        borderStyle: "solid",
                        borderRadius: "5px",
                        width: 1300,
                        height: 700
                        }}>
                <Row>
                    <LineChartSDK height={'650px'} width={'1250px'} chartId={`${secondChart}`} ></LineChartSDK>
                </Row>
            </Col>

        </Container>
    );
}

export default AreaDiagram;