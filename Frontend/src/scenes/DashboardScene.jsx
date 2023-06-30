import React from 'react';

import {Row} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import 'react-datepicker/dist/react-datepicker.css';


import PieChartPlain from "../graphComponents/PieChartPlain";
import LineChartPlain from "../graphComponents/LineChartPlain";
import BoxPlotPlain from "../graphComponents/BoxPlotPlain";
import BarChartPlain from "../graphComponents/BarChartPlain";
import ParallelLinesPlain from "../graphComponents/ParallelLinesPlain";
import HeatMapCrossTab from "../graphComponents/HeatMapPlain"


const DashboardScene = () => {

    return(
        <Container style={{marginTop: 100, marginBottom: 200}}>
            <h1>Dashboard View - E-Scooter Data</h1>
            <Row style={{marginTop: 20}}>
                <Col style={{marginTop: 0,
                        marginBottom: 0,
                        marginRight: 10,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 400,
                        height: 300
                        }}> <PieChartPlain/>
                </Col>
                <Col style={{marginTop: 0,
                        marginBottom: 0,
                        marginRight: 10,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 400,
                        height: 300
                        }}>
                            <PieChartPlain/>
                        </Col>
                <Col style={{marginTop: 0,
                        marginBottom: 0,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 400,
                        height: 300
                        }}>
                            <PieChartPlain/>
                </Col>
            </Row>
            <Row>
                <Col style={{marginTop: 20,
                        marginBottom: 0,
                        width: 800,
                        }}>
                            <Row style={{marginTop: 0,
                                marginBottom: 0,
                                borderWidth: 1,
                                borderColor: "#C8C8C8",
                                borderStyle: "solid",
                                borderRadius: 10,
                                width: 700,
                                height: 650
                            }}>
                                <LineChartPlain/>
                            </Row>
                </Col>
                <Col style={{marginTop: 20,
                        marginBottom: 0,
                        marginLeft: 10,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 800,
                        height: 650
                        }}> 
                        <BarChartPlain/>
                </Col>
            </Row>
            <Row>
                <Col style={{marginTop: 20,
                        width: 800,
                        marginBottom: 100,
                        height: 800
                        }}>
                            <Row style={{marginTop: 0,
                                borderWidth: 1,
                                borderColor: "#C8C8C8",
                                borderStyle: "solid",
                                borderRadius: 10,
                                width: 700,
                                height: 350
                            }}>
                                <ParallelLinesPlain></ParallelLinesPlain>
                            </Row>
                            <Row style={{marginTop: 10,
                                borderWidth: 1,
                                borderColor: "#C8C8C8",
                                borderStyle: "solid",
                                borderRadius: 10,
                                width: 700,
                                height: 650
                            }}>
                                <HeatMapCrossTab></HeatMapCrossTab>
                            </Row>
                </Col>
                <Col style={{marginTop: 20,
                        marginLeft: 10,
                        marginBottom: 100,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 800,
                        height: 650
                        }}> <BoxPlotPlain></BoxPlotPlain>
                </Col>
            </Row>
        </Container>
    );

}

export default DashboardScene;