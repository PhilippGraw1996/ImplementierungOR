import React, {useState} from 'react';
import HeatmapSDK from "../MongoDBChartComponents/MongoDBSDK/ChartSDK"

import {Row} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';
import 'react-datepicker/dist/react-datepicker.css';

const HeatMapScene = () => {

    const [filter, setFilter] = useState(1);

    const submitHandler = (e) => {
        e.preventDefault()
    }

    const heatMapStart = '64a48d72-2d1e-4176-8969-62018e7dc493';
    const heatMapEnd = '649ff18c-356a-4502-8940-d48f3f3d7838'; 
    const heatMapWorkWayFilterEnd = '64a49343-2d1e-457c-8c70-62018e8106bc';
    const heatMapWorkWayFilterStart = '64a494d1-2d1e-4ada-81b9-62018e81bd53';

    return(
        <Container className="min-vh-100 pb-5" style={{marginTop: 100}}>  

            <h1>Heatmap Locations based</h1>
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
                        <Button style={{marginTop: 10, marginLeft: 5}} onClick={() => setFilter(3)}>Amount of Trips by Hour of Day</Button>
                    </Form>

            </Row>


            {filter === 1 && <Row style={{marginTop: 30,
                        marginBottom: 100,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 1450,
                        height: 700
                        }}>
                <Col>
                    <HeatmapSDK height={'680px'} width={'1430px'} chartId={`${heatMapStart}`}></HeatmapSDK>
                </Col>
            </Row>}

            {filter === 2 && <Row style={{marginTop: 30,
                        marginBottom: 100,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 1450,
                        height: 700
                        }}>
                <Col>
                    <HeatmapSDK height={'680px'} width={'1430px'} chartId={`${heatMapEnd}`}></HeatmapSDK>
                </Col>
            </Row>}

            {filter === 3 && <div>    <Row style={{marginTop: 30,
                        marginBottom: 20,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 1450,
                        height: 700
                        }}>
                <Col>
                    <HeatmapSDK height={'680px'} width={'1430px'} chartId={`${heatMapWorkWayFilterEnd}`}></HeatmapSDK>
                </Col>
            </Row>    
                
                <Row style={{marginTop: 5,
                        marginBottom: 100,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 1450,
                        height: 700
                        }}>
                <Col>
                    <HeatmapSDK height={'680px'} width={'1430px'} chartId={`${heatMapWorkWayFilterStart}`}></HeatmapSDK>
                </Col>
            </Row> </div>}

        </Container>
    );
}

export default HeatMapScene; 