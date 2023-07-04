import React, {useState} from 'react';
import BarChartSDK from "../MongoDBChartComponents/MongoDBSDK/ChartSDK"

import {Row} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';
import 'react-datepicker/dist/react-datepicker.css';

const BarChartSceneUp = () => {

    const [filter, setFilter] = useState(1);

    const submitHandler = (e) => {
        e.preventDefault(1)
    }

    const mainBarChart = '649ff95b-58ae-4c40-8bdf-032013080e3d';
    const speedBarChart = '649ffca7-84f0-43c9-88d0-a5891ed4b69e';
    const durationBarChart = '649ff8f0-9232-4eed-8d88-bbf53d85e70a';
    const batteryDevBarChart = '649ffaab-d0b5-4506-83fb-82e669f4c036';
    const distanceBarChart = '649ffb79-b269-4cf8-834e-1fa3136611fc';
    

    return(
        <Container className="min-vh-100 pb-5" style={{marginTop: 100}}>   
            <h1>Barchart View</h1>
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
                        <Button style={{marginTop: 10, marginLeft: 5}} onClick={() => setFilter(3)}>Amount of Trips by Weekend (yes/no)</Button>
                        <Button style={{marginTop: 10, marginLeft: 5}} onClick={() => setFilter(4)}>Amount of Trips by Weekend (yes/no)</Button>
                        <Button style={{marginTop: 10, marginLeft: 5}} onClick={() => setFilter(5)}>Amount of Trips by Weekend (yes/no)</Button>
                    </Form>

            </Row>

            {filter === 1 &&            
                     <Row style={{marginTop: 20,
                        marginBottom: 100,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 1450,
                        height: 700
                        }}>
                        <Col>
                            <BarChartSDK height={'650px'} width={'1430px'} chartId={`${mainBarChart}`}></BarChartSDK>
                        </Col>
                    </Row>}
                    {filter === 2 &&            
                     <Row style={{marginTop: 20,
                        marginBottom: 100,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 1450,
                        height: 700
                        }}>
                        <Col>
                            <BarChartSDK height={'650px'} width={'1430px'} chartId={`${speedBarChart}`}></BarChartSDK>
                        </Col>
                    </Row>}

                    {filter === 3 &&            
                     <Row style={{marginTop: 20,
                        marginBottom: 100,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 1450,
                        height: 700
                        }}>
                        <Col>
                            <BarChartSDK height={'650px'} width={'1430px'} chartId={`${durationBarChart}`}></BarChartSDK>
                        </Col>
                    </Row>}


                    {filter === 4 &&            
                     <Row style={{marginTop: 20,
                        marginBottom: 100,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 1450,
                        height: 700
                        }}>
                        <Col>
                            <BarChartSDK height={'650px'} width={'1430px'} chartId={`${batteryDevBarChart}`}></BarChartSDK>
                        </Col>
                    </Row>}


                    {filter === 5 &&            
                     <Row style={{marginTop: 20,
                        marginBottom: 100,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 1450,
                        height: 700
                        }}>
                        <Col>
                            <BarChartSDK height={'650px'} width={'1430px'} chartId={`${distanceBarChart}`}></BarChartSDK>
                        </Col>
                    </Row>}


        </Container>
    );
}

export default BarChartSceneUp;