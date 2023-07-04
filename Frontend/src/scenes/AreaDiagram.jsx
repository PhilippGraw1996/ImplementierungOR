import React from 'react';
import {useState} from 'react';

import LineChartSDK from "../MongoDBChartComponents/MongoDBSDK/ChartSDK"

import {Form, Row} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import 'react-datepicker/dist/react-datepicker.css';



const AreaDiagram = () => {

    const [filter, setFilter] = useState(1);

    const submitHandler = (e) => {
        e.preventDefault()
    }


    const mainChart = '649fe631-84f0-4aa6-8a7e-a5891ecb6175';
    const secondChart = '649fe3f0-2ac4-41cc-829d-c2e1a94ef2f4';

    return(
        <Container className="min-vh-100 pb-5" style={{marginTop: 100}}>

            <h1>Areachart View</h1>
            <Row style={{marginTop: 10,
                        marginBottom: 0,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 1450,
                        height: 60
                        }}>
                <Form onSubmit={submitHandler}>
                        <Button style={{marginTop: 10, marginLeft: 5}} onClick={() => setFilter(1)}>Amount of Trips by Weekday</Button>
                        <Button style={{marginTop: 10, marginLeft: 5}} onClick={() => setFilter(2)}>Amount of Trips by Hour of Day</Button>
                    </Form>

            </Row>

            {filter === 1 && <Row style={{marginTop: 30,
                        marginBottom: 100,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 1450,
                        height: 750
                        }}>
                <Col>
                    <LineChartSDK height={'650px'} width={'1430px'} chartId={`${mainChart}`}></LineChartSDK>
                </Col>

                <Col>
                    <Form>
                        <Button style={{marginTop: 0, marginLeft: 10}}>First Selection</Button>
                        <Button style={{marginTop: 0, marginLeft: 10}}>Second Selection</Button>
                        <Form.Select style={{width: 300, marginTop: 5, marginLeft: 10}}>
                            <option>Choose </option>
                            <option value="1">One </option>
                            <option value="2">Two </option>
                            <option value="3">Three </option>
                        </Form.Select>
                    </Form>
                </Col>
            </Row>} 
            {filter === 2 && <Row style={{marginTop: 30,
                        marginBottom: 100,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 1450,
                        height: 750
                        }}>
                <Col>
                    <LineChartSDK height={'650px'} width={'1430px'} chartId={`${secondChart}`} ></LineChartSDK>
                </Col>

                <Col>
                    <Form>
                        <Button style={{marginTop: 0, marginLeft: 10}}>First Selection</Button>
                        <Button style={{marginTop: 0, marginLeft: 10}}>Second Selection</Button>
                        <Form.Select style={{width: 300, marginTop: 5, marginLeft: 10}}>
                            <option>Choose </option>
                            <option value="1">One </option>
                            <option value="2">Two </option>
                            <option value="3">Three </option>
                        </Form.Select>
                    </Form>
                </Col>
            </Row>}

        </Container>
    );
}

export default AreaDiagram;