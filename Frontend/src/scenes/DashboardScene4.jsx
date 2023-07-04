import React from 'react';

import {Row} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import 'react-datepicker/dist/react-datepicker.css';
import ChartSDK from "../MongoDBChartComponents/MongoDBSDK/ChartSDK"



const DashboardScene = (props) => {

    const area1 = '649ff39a-84f0-4c86-8e85-a5891ed0ce52';
    const area2 = '649ff39a-84f0-471f-8131-a5891ed0ce4e';
    const heatmapCross = '649ff39a-84f0-4700-8e6f-a5891ed0ce50';
    const scatter1 = '649ff39a-84f0-43a4-8cd0-a5891ed0ce4c';
    const scatter2 = '649ff39a-84f0-4ecb-8859-a5891ed0ce54';

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
                        width: 650,
                        height: 400
                        }}>  <ChartSDK height={'380px'} width={'630px'} chartId={`${area1}`}></ChartSDK>
                            
                            
                    </Col>
                <Col style={{marginTop: 0,
                        marginBottom: 0,
                        marginRight: 0,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 650,
                        height: 400
                        }}>   <ChartSDK height={'380px'} width={'630px'} chartId={`${area2}`}></ChartSDK>
                            
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
                    <ChartSDK height={'650px'} width={'1250px'} chartId={`${heatmapCross}`}></ChartSDK>
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
                        width: 650,
                        height: 600
                        }}>  <ChartSDK height={'580px'} width={'630px'} chartId={`${scatter1}`}></ChartSDK>
                            
                            
                    </Col>
                <Col style={{marginTop: 0, 
                        marginBottom: 0,
                        marginRight: 0,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 650,
                        height: 600
                        }}>   <ChartSDK height={'580px'} width={'630px'} chartId={`${scatter2}`}></ChartSDK>
                            
                </Col>

            </Row>
        </Container>
    );

}

export default DashboardScene;