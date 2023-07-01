import React from 'react';
import {useState} from 'react';

import LineChartSDK from "../MongoDBChartComponents/MongoDBSDK/ChartSDK"

import {Form, FormControl, FormGroup, FormLabel, Row} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import 'react-datepicker/dist/react-datepicker.css';


import lineImage from '../Images/lineTop.jpg';


const LineChartScene = () => {

    const mainChart = '649fe3f0-2ac4-41cc-829d-c2e1a94ef2f4';
    const secondChart = '649fe631-84f0-4aa6-8a7e-a5891ecb6175';
    const thirdChart = '649fe631-84f0-4aa6-8a7e-a5891ecb6175';

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [submitStartDate, setSubmitStartDate] = useState(new Date());
    const [submitEndDate, setSubmitEndDate] = useState(new Date());

    let graphDates = [];

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(startDate, endDate)
        setSubmitStartDate(startDate);
        setSubmitEndDate(endDate);
        graphDates = [submitStartDate, submitEndDate];
        console.log(graphDates);
    }

    return(
        <Container className="min-vh-100 pb-5" style={{marginTop: 100}}>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <h1>Line Graph Dashboard</h1>
                        <Row style={{marginTop: 20}}>
                            <h3>Time of the Week:</h3>
                            <FormGroup className={'col'}>
                                <FormLabel></FormLabel>
                                <Button>Wochentage</Button>
                            </FormGroup>
                            <FormGroup className={'col'}>
                                <FormLabel></FormLabel>
                                <Button>Wochenende</Button>
                            </FormGroup>
                            <Col></Col>
                            <Col></Col>
                        </Row>
                        <Row style={{marginTop: 20}}>
                            <h3>Time of the Day:</h3>
                            <FormGroup className={'col'}>
                                <FormLabel></FormLabel>
                                <Button>Start Time</Button>
                            </FormGroup>
                            <FormGroup className={'col'}>
                                <FormLabel></FormLabel>
                                <Button>End Time</Button>
                            </FormGroup>
                            <Col></Col>
                            <Col></Col>
                        </Row>
                        <Row style={{marginTop: 40}}>
                            <Col>
                                <Button type="submit">
                                    Graphen generieren!
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
                <Col>
                    <Row>
                        
                    </Row>
                </Col>
            </Row>
            <h1>Line Chart View - Scooter Data</h1>
            <Col style={{marginTop: 30,
                        marginBottom: 100,
                        borderWidth: 1,
                        borderStyle: "solid",
                        borderRadius: "5px",
                        width: 1300,
                        height: 700
                        }}>
                <Row>
                    <LineChartSDK height={'650px'} width={'1250px'} chartId={`${mainChart}`} ></LineChartSDK>
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
                    <LineChartSDK height={'650px'} width={'1250px'} chartId={`${secondChart}`}></LineChartSDK>
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
                    <LineChartSDK height={'650px'} width={'1250px'} chartId={`${thirdChart}`} ></LineChartSDK>
                </Row>
            </Col>

        </Container>
    );
}

export default LineChartScene;