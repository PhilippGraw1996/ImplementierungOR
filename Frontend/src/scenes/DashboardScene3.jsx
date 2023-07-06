import React from 'react';

import {Row} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import 'react-datepicker/dist/react-datepicker.css';
import ChartSDK from "../MongoDBChartComponents/MongoDBSDK/ChartSDK"




const DashboardScene3 = (props) => {

    const barChartUpOverview = '64a008b1-84f0-498c-8fa1-a5891edbe4d8';
    const barChartDuration = '64a008b1-84f0-4ff8-889b-a5891edbe4d6';
    const barChartBattery = '64a008b1-84f0-4b64-80db-a5891edbe4da';
    const barChartSpeed = '64a008b1-84f0-4c2e-862e-a5891edbe4de';
    const barChartDistance = '64a008b1-84f0-47f1-8231-a5891edbe4dc';


    const barChartUpOverviewHor = '64a008b1-84f0-4caa-8c75-a5891edbe4e2';
    const barChartDistHor = '64a008b1-84f0-4540-8c94-a5891edbe4e4';
    const barChartBatteryHor = '64a008b1-84f0-4c21-85a3-a5891edbe4e8';
    const barChartSpeedHor = '64a008b1-84f0-45c2-858c-a5891edbe4e6';
    const barChartDurationHor = '64a008b1-84f0-489c-81c6-a5891edbe4e0';

    return(
        <Container style={{marginBottom: 200}}>
            <h1>{`Dashboard View - Barcharts (${props.filter}/4)`}</h1>
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
                    <ChartSDK height={'600px'} width={'1280px'} chartId={`${barChartUpOverview}`}></ChartSDK>
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
                        }}>  <ChartSDK height={'280px'} width={'600px'} chartId={`${barChartDuration}`}></ChartSDK>
                            
                            
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
                    <ChartSDK height={'600px'} width={'1280px'} chartId={`${barChartUpOverviewHor}`}></ChartSDK>
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
                        }}>  <ChartSDK height={'280px'} width={'600px'} chartId={`${barChartDistHor}`}></ChartSDK>
                            
                            
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
                        }}>   <ChartSDK height={'280px'} width={'600px'} chartId={`${barChartDurationHor}`}></ChartSDK>        
                </Col>
            </Row>
        </Container>
    );

}

export default DashboardScene3;