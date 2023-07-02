import React from 'react';

import {Row} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import 'react-datepicker/dist/react-datepicker.css';
import ChartSDK from "../MongoDBChartComponents/MongoDBSDK/ChartSDK"



const DashboardScene = () => {

    const heatmap = '649eef57-f2f0-4cd5-8f67-11daba6cb100';
    const locationMap = '649efa26-e837-4aa6-8299-ef54e1a17554';


    return(
        <Container style={{marginTop: 100, marginBottom: 200}}>
            <h1>Dashboard View Location Maps- E-Scooter Data</h1>
            <Row style={{marginTop: 10,
                        marginBottom: 0,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 1320,
                        height: 700
                        }}>
                <Col>
                    <ChartSDK height={'650px'} width={'1250px'} chartId={`${heatmap}`}></ChartSDK>
                </Col>
            </Row>
            <Row style={{marginTop: 10,
                        marginBottom: 0,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 1320,
                        height: 700
                        }}>
                <Col>
                    <ChartSDK height={'650px'} width={'1250px'} chartId={`${locationMap}`}></ChartSDK>
                </Col>
            </Row>
        </Container>
    );

}

export default DashboardScene;