import React from 'react';
import HeatMapChartSDK from "../MongoDBChartComponents/MongoDBSDK/ChartSDK"

import {Row} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import 'react-datepicker/dist/react-datepicker.css';

const HeatmapMapScene = () => {

    return(
        <Container className="min-vh-100 pb-5" style={{marginTop: 100}}> 
            <h1>Heatmap - Scooter Data</h1>  
            <Col style={{marginTop: 30,
                        marginBottom: 100,
                        borderWidth: 1,
                        borderStyle: "solid",
                        width: 1300,
                        height: 700
                        }}>
                <Row>
                    <HeatMapChartSDK height={'700px'} width={'1300px'} chartId={'649eef57-f2f0-4cd5-8f67-11daba6cb100'}></HeatMapChartSDK>
                </Row>
            </Col>

        </Container>
    );
}

export default HeatmapMapScene; 