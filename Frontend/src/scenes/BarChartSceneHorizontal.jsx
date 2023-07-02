import React from 'react';
import BarChartSDK from "../MongoDBChartComponents/MongoDBSDK/ChartSDK"

import {Row} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import 'react-datepicker/dist/react-datepicker.css';

const BarChartSceneHorizontal = () => {

    const mainBarChart = '649ffd6c-f2f0-4f3e-84a6-11daba20d8f0';
    const speedBarChart = '649ffecb-2ac4-4671-82d6-c2e1a95a2ed5';
    const durationBarChart = '649ffd3b-e5b0-405e-8df1-c2474bf3c923';
    const batteryDevBarChart = '64a00063-e837-4414-8196-ef54e156544f';
    const distanceBarChart = '649ffdea-b269-4655-89c6-1fa313671302';
    

    return(
        <Container className="min-vh-100 pb-5" style={{marginTop: 100}}>   
            <h1>Barchart horizontal View - Scooter Data</h1>
            <Col style={{marginTop: 30,
                        marginBottom: 100,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
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
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
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

export default BarChartSceneHorizontal;