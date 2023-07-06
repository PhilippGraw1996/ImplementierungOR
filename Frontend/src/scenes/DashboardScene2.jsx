import React from 'react';

import {Row} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import 'react-datepicker/dist/react-datepicker.css';
import ChartSDK from "../MongoDBChartComponents/MongoDBSDK/ChartSDK"



const DashboardScene = (props) => {

    const heatmapStarting = '64a48d72-2d1e-4176-8969-62018e7dc493';
    const heatmapDestination = '649ff18c-356a-4502-8940-d48f3f3d7838';
    const locationMapStart = '64a49023-fd0b-425e-8b14-8b7e4719551b';
    const locationMapEnd = '649ff18c-356a-4be3-80f6-d48f3f3d783a';
    const locationMapSingle = '64a491db-0834-4bcd-8deb-d7e659f05c29'; 
   

    return(
        <Container style={{marginBottom: 200}}>
            <h1>{`Dashboard View - Location Maps (${props.filter}/4)`}</h1>
            <Row style={{marginTop: 10,
                        marginBottom: 0,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 1450,
                        height: 700
                        }}>
                <Col>
                    <ChartSDK height={'650px'} width={'1430px'} chartId={`${heatmapStarting}`}></ChartSDK>
                </Col>
            </Row>
            <Row style={{marginTop: 10,
                        marginBottom: 0,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 1450,
                        height: 700
                        }}>
                <Col>
                    <ChartSDK height={'650px'} width={'1430px'} chartId={`${heatmapDestination}`}></ChartSDK>
                </Col>
            </Row>

            <Row style={{marginTop: 10,
                        marginBottom: 0,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 1450,
                        height: 700
                        }}>
                <Col>
                    <ChartSDK height={'650px'} width={'1430px'} chartId={`${locationMapStart}`}></ChartSDK>
                </Col>
            </Row>

            <Row style={{marginTop: 10,
                        marginBottom: 0,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 1450,
                        height: 700
                        }}>
                <Col>
                    <ChartSDK height={'650px'} width={'1430px'} chartId={`${locationMapEnd}`}></ChartSDK>
                </Col>
            </Row>

            <Row style={{marginTop: 10,
                        marginBottom: 0,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 1450,
                        height: 700
                        }}>
                <Col>
                    <ChartSDK height={'650px'} width={'1430px'} chartId={`${locationMapSingle}`}></ChartSDK>
                </Col>
            </Row>
        </Container>
    );

}

export default DashboardScene;