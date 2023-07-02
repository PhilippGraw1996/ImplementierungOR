import React from 'react';
import DescriptiveChartSDK from "../MongoDBChartComponents/MongoDBSDK/ChartSDK"

import {Row} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import 'react-datepicker/dist/react-datepicker.css';

const DashboardScene = () => {

    const firstDesc = '64a00aa8-84f0-4ea4-834b-a5891edcae53';
    const secondDesc = '64a00b48-ce67-4e65-81c7-2d41783e754b';
    const thirdDesc = '64a00bb5-e5b0-4e54-874f-c2474bfbbd61';
    const fourthDesc = '64a00d05-356a-409d-868e-d48f3f49a5f8';
    const firstNumber = '649ff1b0-e5b0-49e5-8bb3-c2474beec05e';
    const secondNumber = '649ff1b0-e5b0-4833-82c8-c2474beec062';
    const table = '649ff1b0-e5b0-42a4-8f29-c2474beec06a';

    return(
        <Container style={{marginTop: 100, marginBottom: 200}}>
            <h1>Descriptive Statistics Overview - E-Scooter Data</h1>
            <Row style={{marginTop: 20}}>
                <Col style={{marginTop: 0,
                        marginBottom: 0,
                        marginRight: 10,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 300,
                        height: 825
                        }}>
                            <DescriptiveChartSDK height={'800px'} width={'400px'} chartId={`${firstDesc}`}></DescriptiveChartSDK>
                </Col>
                <Col style={{marginTop: 0,
                        marginBottom: 0,
                        marginRight: 10,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 300,
                        height: 825
                        }}>
                            <DescriptiveChartSDK height={'800px'} width={'400px'} chartId={`${secondDesc}`}></DescriptiveChartSDK>
                </Col>
                <Col style={{marginTop: 0,
                        marginBottom: 0,
                        marginRight: 10,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 300,
                        height: 825
                        }}>
                            <DescriptiveChartSDK height={'800px'} width={'400px'} chartId={`${thirdDesc}`}></DescriptiveChartSDK>
                </Col>
            </Row>
            <Row style={{marginTop: 20}}>
                <Col style={{marginTop: 0,
                            marginBottom: 0,
                            marginRight: 10,
                            borderWidth: 1,
                            borderColor: "#C8C8C8",
                            borderStyle: "solid",
                            borderRadius: 10,
                            width: 300,
                            height: 825
                            }}>
                            <DescriptiveChartSDK height={'800px'} width={'300px'} chartId={`${fourthDesc}`}></DescriptiveChartSDK>
                </Col>
                <Col style={{marginTop: 0,
                            marginBottom: 0,
                            marginRight: 10,
                            borderRadius: 10,
                            width: 500,
                            height: 825
                            }}>
                                <Row style={{marginTop: 0,
                                    marginBottom: 0,
                                    marginRight: 10,
                                    borderRadius: 10,
                                    borderWidth: 1,
                                    borderColor: "#C8C8C8",
                                    borderStyle: "solid",
                                    width: 500,
                                    height: 410
                                    }}>
                                    <DescriptiveChartSDK height={'400px'} width={'450px'} chartId={`${firstNumber}`}></DescriptiveChartSDK>
                                </Row>
                                <Row style={{marginTop: 5,
                                    marginBottom: 0,
                                    marginRight: 10,
                                    borderRadius: 10,
                                    borderWidth: 1,
                                    borderColor: "#C8C8C8",
                                    borderStyle: "solid",
                                    width: 500,
                                    height: 410
                                    }}>
                                    <DescriptiveChartSDK height={'400px'} width={'450px'} chartId={`${secondNumber}`}></DescriptiveChartSDK>
                                </Row>
                            
                </Col>
                <Col style={{marginTop: 0,
                            marginBottom: 0,
                            marginRight: 10,
                            borderRadius: 10,
                            width: 300,
                            height: 825
                            }}>
                           
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
                    <DescriptiveChartSDK height={'650px'} width={'1250px'} chartId={`${table}`}></DescriptiveChartSDK>
                </Row>
            </Col>
                
            </Row>
        </Container>
    );

}

export default DashboardScene;