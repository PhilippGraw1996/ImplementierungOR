import React from 'react';
import HeatmapSDK from "../MongoDBChartComponents/MongoDBSDK/ChartSDK"

import {Row} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import 'react-datepicker/dist/react-datepicker.css';

const HeatMapScene = () => {

    const heatMapBattryDev = '649fe4be-e837-489b-820b-ef54e14af69d';
    const speedBarChart = '649dca7a-e837-489e-87e6-ef54e1e1b155';
    

    return(
        <Container className="min-vh-100 pb-5" style={{marginTop: 100}}>   
            <h1>Bar Chart View - Scooter Data</h1>
            <Col style={{marginTop: 30,
                        marginBottom: 100,
                        borderWidth: 1,
                        borderStyle: "solid",
                        borderRadius: "5px",
                        width: 1300,
                        height: 700
                        }}>
                <Row>
                    <HeatmapSDK height={'650px'} width={'1250px'} chartId={`${speedBarChart}`}></HeatmapSDK>
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
                    <HeatmapSDK height={'650px'} width={'1250px'} chartId={`${heatMapBattryDev}`}></HeatmapSDK>
                </Row>
            </Col>

        </Container>
    );
}

export default HeatMapScene; 