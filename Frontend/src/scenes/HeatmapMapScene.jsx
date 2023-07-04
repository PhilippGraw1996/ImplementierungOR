import React from 'react';
import HeatmapSDK from "../MongoDBChartComponents/MongoDBSDK/ChartSDK"

import {Row} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import 'react-datepicker/dist/react-datepicker.css';

const HeatMapScene = () => {

    const heatMap = '649eef57-f2f0-4cd5-8f67-11daba6cb100';
    

    return(
        <Container className="min-vh-100 pb-5" style={{marginTop: 100}}>   
            <h1>Bar Chart View - Scooter Data</h1>
            <Col style={{marginTop: 30,
                        marginBottom: 100,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 1450,
                        height: 700
                        }}>
                <Row>
                    <HeatmapSDK height={'680px'} width={'1430px'} chartId={`${heatMap}`}></HeatmapSDK>
                </Row>
            </Col>

        </Container>
    );
}

export default HeatMapScene; 