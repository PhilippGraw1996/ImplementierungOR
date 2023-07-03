import React, { useState } from 'react';

import {Row} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import 'react-datepicker/dist/react-datepicker.css';
import ChartSDK from "../MongoDBChartComponents/MongoDBSDK/ChartSDK"




const DashboardScene3 = () => {

    const barChartUpOverview = '64a1e1ae-ce67-4935-8766-2d41784dd8e3';
    const barChartCount = '64a1e1ae-ce67-4d3e-86d6-2d41784dd8e1';
    const barChartBattery = '64a1e1ae-ce67-47e3-8577-2d41784dd8e5';
    const barChartSpeed = '64a1e1ae-ce67-445f-8b03-2d41784dd8e9';
    const barChartDistance = '64a1e1ae-ce67-4616-8ff2-2d41784dd8e7';


    const barChartUpOverviewHor = '64a1e1ae-ce67-4f55-8f87-2d41784dd8ed';
    const barChartCountHor = '64a1e1ae-ce67-47b0-838e-2d41784dd8eb';
    const barChartBatteryHor = '64a1e1ae-ce67-430e-895f-2d41784dd8f5';
    const barChartSpeedHor = '64a1e1ae-ce67-4d06-89b8-2d41784dd8f3';
    const barChartDistanceHor = '64a1e1ae-ce67-4f83-8014-2d41784dd8f0';

    const [filter, setFilter] = useState(1);

    return(
        <Container style={{marginBottom: 200}}>
            <h1>Dashboard View - E-Scooter Data</h1>
            <Row style={{marginTop: 20,
                        marginBottom: 0,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 1320,
                        height: 620
                        }}>
                <Col>
                    <ChartSDK height={'600px'} width={'1250px'} chartId={`${barChartUpOverview}`}></ChartSDK>
                </Col>
            </Row>
            <Row style={{marginTop: 10}}>
                <Col style={{marginTop: 0,
                        marginBottom: 0,
                        marginRight: 10,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 400,
                        height: 300
                        }}>  <ChartSDK height={'280px'} width={'600px'} chartId={`${barChartCount}`}></ChartSDK>
                            
                            
                    </Col>
                <Col style={{marginTop: 0,
                        marginBottom: 0,
                        marginRight: 0,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 400,
                        height: 300
                        }}>   <ChartSDK height={'280px'} width={'600px'} chartId={`${barChartBattery}`}></ChartSDK>
                            
                </Col>

            </Row>

            <Row style={{marginTop: 10}}>
                <Col style={{marginTop: 0,
                        marginBottom: 0,
                        marginRight: 10,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 400,
                        height: 300
                        }}>  <ChartSDK height={'280px'} width={'600px'} chartId={`${barChartSpeed}`}></ChartSDK>
                            
                            
                    </Col>
                <Col style={{marginTop: 0,
                        marginBottom: 0,
                        marginRight: 0,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 400,
                        height: 300
                        }}>   <ChartSDK height={'280px'} width={'600px'} chartId={`${barChartDistance}`}></ChartSDK>
                            
                </Col>

            </Row>
            <hr></hr>
            <Row style={{marginTop: 10,
                        marginBottom: 0,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 1320,
                        height: 620
                        }}>
                <Col>
                    <ChartSDK height={'600px'} width={'1250px'} chartId={`${barChartUpOverviewHor}`}></ChartSDK>
                </Col>
            </Row>
            <Row style={{marginTop: 10}}>
                <Col style={{marginTop: 0,
                        marginBottom: 0,
                        marginRight: 10,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 400,
                        height: 300
                        }}>  <ChartSDK height={'280px'} width={'600px'} chartId={`${barChartCountHor}`}></ChartSDK>
                            
                            
                    </Col>
                <Col style={{marginTop: 0,
                        marginBottom: 0,
                        marginRight: 0,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 400,
                        height: 300
                        }}>   <ChartSDK height={'280px'} width={'600px'} chartId={`${barChartBatteryHor}`}></ChartSDK>
                            
                </Col>

            </Row>
            <Row style={{marginTop: 10}}>
                <Col style={{marginTop: 0,
                        marginBottom: 0,
                        marginRight: 10,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 400,
                        height: 300
                        }}>  <ChartSDK height={'280px'} width={'600px'} chartId={`${barChartSpeedHor}`}></ChartSDK>
                            
                            
                    </Col>
                <Col style={{marginTop: 0,
                        marginBottom: 0,
                        marginRight: 0,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 400,
                        height: 300
                        }}>   <ChartSDK height={'280px'} width={'600px'} chartId={`${barChartDistanceHor}`}></ChartSDK>
                            
                </Col>

            </Row>


        </Container>
    );

}

export default DashboardScene3;