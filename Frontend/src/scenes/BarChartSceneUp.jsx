import React from 'react';
import BarChartSDK from "../MongoDBChartComponents/MongoDBSDK/ChartSDK"

import {Row} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import 'react-datepicker/dist/react-datepicker.css';

const BarChartSceneUp = () => {

    const mainBarChart = '649ff95b-58ae-4c40-8bdf-032013080e3d';
    const speedBarChart = '649ffca7-84f0-43c9-88d0-a5891ed4b69e';
    const durationBarChart = '649ff8f0-9232-4eed-8d88-bbf53d85e70a';
    const batteryDevBarChart = '649ffaab-d0b5-4506-83fb-82e669f4c036';
    const distanceBarChart = '649ffb79-b269-4cf8-834e-1fa3136611fc';
    

    return(
        <Container className="min-vh-100 pb-5" style={{marginTop: 100}}>   
            <h1>Barchart View - Scooter Data</h1>
            <Col style={{marginTop: 30,
                        marginBottom: 100,
                        borderWidth: 1,
                        borderStyle: "solid",
                        borderRadius: "5px",
                        width: 1300,
                        height: 700
                        }}>
                <Row>
                    <BarChartSDK height={'650px'} width={'1250px'} chartId={`${mainBarChart}`}></BarChartSDK>
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
                    <BarChartSDK height={'650px'} width={'1250px'} chartId={`${durationBarChart}`}></BarChartSDK>
                </Row>
            </Col>

        </Container>
    );
}

export default BarChartSceneUp;