import React from 'react';

import {Row} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import 'react-datepicker/dist/react-datepicker.css';
import ChartSDK from "../MongoDBChartComponents/MongoDBSDK/ChartSDK"



const DashboardScene = (props) => {

    const table = '64a1c81b-e837-4122-8261-ef54e13ca341';
    const pie1 = '649dfacb-b269-4702-8689-1fa3130bc4b3';
    const pie2 = '649dfc19-e5b0-4467-8dd8-c2474b93d45f';
    const pie3 = '649dfb81-d8a7-4814-883e-650d4f42f0e2';
    const heatmap = '64a1c81b-e837-41fd-8d27-ef54e13ca337';
    const number1 = '64a1c81b-e837-471a-8a58-ef54e13ca335';
    const number2 = '64a1c81b-e837-4151-8276-ef54e13ca339';
    return(
        <Container style={{marginBottom: 200}}>
            <h1>{`Dashboard View - Descriptive Statistics (${props.filter}/4)`}</h1>
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
                        }}>  <ChartSDK height={'280px'} width={'400px'} chartId={`${number1}`}></ChartSDK>
                            
                            
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
                        }}>   <ChartSDK height={'280px'} width={'400px'} chartId={`${number2}`}></ChartSDK>
                            
                </Col>

                <Col style={{marginTop: 0,
                        marginBottom: 0,
                        marginRight: 10,
                        width: 400,
                        height: 300
                        }}> 
                            
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
                        }}>  <ChartSDK height={'280px'} width={'400px'} chartId={`${pie1}`}></ChartSDK>
                            
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
                        }}>   <ChartSDK height={'280px'} width={'400px'} chartId={`${pie2}`}></ChartSDK>
                            
                </Col>
                <Col style={{marginTop: 0,
                        marginBottom: 0,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 400,
                        height: 300
                        }}>  <ChartSDK height={'280px'} width={'400px'} chartId={`${pie3}`}></ChartSDK>
                            
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
                    <ChartSDK height={'650px'} width={'1250px'} chartId={`${table}`}></ChartSDK>
                </Col>
            </Row>
        </Container>
    );

}

export default DashboardScene;