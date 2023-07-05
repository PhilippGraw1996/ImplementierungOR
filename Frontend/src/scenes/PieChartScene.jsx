import React, { useState } from 'react';
import PieChartSDK from "../MongoDBChartComponents/MongoDBSDK/ChartSDK"

import {Row} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';
import 'react-datepicker/dist/react-datepicker.css';


const PieChartScene = () => {

    const [filter, setFilter] = useState(1);

    const submitHandler = (e) => {
        e.preventDefault();
        setFilter(e.target.value)
    }

    return(
        <Container className="min-vh-100 pb-5" style={{marginTop: 100}}>
        <h1>Piechart View</h1>
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
                        <Button style={{marginTop: 10, marginLeft: 5, borderColor: "#26D477", backgroundColor: "#26D477"}} onClick={() => setFilter(1)}>Amount of Trips by Weekday</Button>
                        <Button style={{marginTop: 10, marginLeft: 5, borderColor: "#26D477", backgroundColor: "#26D477"}} onClick={() => setFilter(2)}>Amount of Trips by Hour of Day</Button>
                        <Button style={{marginTop: 10, marginLeft: 5, borderColor: "#26D477", backgroundColor: "#26D477"}} onClick={() => setFilter(3)}>Amount of Trips by Weekend (yes/no)</Button>
                    </Form>
            </Row>
        { filter === 1 && <Row style={{marginTop: 20,
                        marginBottom: 0,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 1450,
                        height: 750
                        }}>
                <Col>
                    <PieChartSDK height={'650px'} width={'1250px'} filter={{"dayOfWeek": {$gte: 3}}} chartId={'649dfacb-b269-4702-8689-1fa3130bc4b3'}></PieChartSDK>
                </Col>
            </Row>
            }

            {filter === 2 &&  
            <Row style={{marginTop: 20,
                        marginBottom: 0,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 1450,
                        height: 750
                        }}>
                <Col>
                    <PieChartSDK height={'650px'} width={'1250px'} chartId={'649dfc19-e5b0-4467-8dd8-c2474b93d45f'}></PieChartSDK>
                </Col>
            </Row>}


            {filter === 3 && 
            <Row style={{marginTop: 20,
                        marginBottom: 0,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 1450,
                        height: 750
                        }}>
                <Col>
                    <PieChartSDK height={'650px'} width={'1250px'} chartId={'649dfb81-d8a7-4814-883e-650d4f42f0e2'}></PieChartSDK>
                </Col>
            </Row>}
        </Container>
    );
}

export default PieChartScene;