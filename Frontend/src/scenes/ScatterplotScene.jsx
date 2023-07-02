import React from 'react';
import DescriptiveChartSDK from "../MongoDBChartComponents/MongoDBSDK/ChartSDK"

import {Row} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import 'react-datepicker/dist/react-datepicker.css';

const ScatterplotScene = () => {

    const mainScatter = '649ff0b3-e5b0-4fcd-83d8-c2474bee6576';
    const secondScatter = '649f2d2c-9232-43f4-81bf-bbf53d099ebf';
    const thirdScatter = '';
    const fourthScatter = '';

    

    return(
        <Container className="min-vh-100 pb-5" style={{marginTop: 100}}>   
            <h1>Bar Chart View - Scooter Data</h1>
            <Col style={{marginTop: 30,
                        marginBottom: 100,
                        borderWidth: 1,
                        borderStyle: "solid",
                        borderRadius: "5px",
                        width: 1300,
                        height: 700
                        }}>
                <Row>
                    <DescriptiveChartSDK height={'650px'} width={'1250px'} chartId={`${mainScatter}`}></DescriptiveChartSDK>
                </Row>
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
                    <DescriptiveChartSDK height={'650px'} width={'1250px'} chartId={`${secondScatter}`}></DescriptiveChartSDK>
                </Row>
            </Col>

        </Container>
    );
}

export default ScatterplotScene;