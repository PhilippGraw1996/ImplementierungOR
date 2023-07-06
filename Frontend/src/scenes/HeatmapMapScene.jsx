import React, {useState} from 'react';
import HeatmapSDK from "../MongoDBChartComponents/MongoDBSDK/ChartSDK"

import {Row} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';
import 'react-datepicker/dist/react-datepicker.css';

import DatePicker from "react-datepicker";

const HeatMapScene = () => {

    const [startDate, setStartDate] = useState(new Date("2019-01-01"));
    const [endDate, setEndDate] = useState(new Date("2021-12-31"));

    const [chosenStartHour, setChosenStartHour] = useState(0);
    const [chosenEndHour, setChosenEndHour] = useState(23);

    const [chosenStartDay, setChosenStartDay] = useState(0);
    const [chosenEndDay, setChosenEndDay] = useState(6);

    const [filterDate, setFilterDateStart] = useState([new Date("2019-01-01"), new Date("2021-12-31")]);
    const [dayOfWeekFilter, setDayOfWeekFilter] = useState([0, 6]);

    const [hourOfDayFilter, setHourOfDayFilter] = useState([0, 23]);

    const [selection, setSelection] = useState(1);

    const submitHandlerFilter = (e) => {
        e.preventDefault();
        setFilterDateStart([startDate, endDate]);
        setHourOfDayFilter([chosenStartHour, chosenEndHour]);
        setDayOfWeekFilter([chosenStartHour, chosenEndHour]);

        console.log("Hi Mates!")
        console.log(dayOfWeekFilter);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setSelection(e.target.value)
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
                        <Button style={{marginTop: 10, marginLeft: 5}} onClick={() => setSelection(1)}>Heatmap by start locations of trips</Button>
                        <Button style={{marginTop: 10, marginLeft: 5}} onClick={() => setSelection(2)}>Heatmap by end locations of trips</Button>
                        <Button style={{marginTop: 10, marginLeft: 5}} onClick={() => setSelection(3)}>Heatmaps by start and end locations: weekdays 07:00 am - 09:00 am</Button>
                    </Form>

            </Row>


            {selection === 1 && <Row style={{marginTop: 10,
                        marginBottom: 0,
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

            {selection === 2 && <Row style={{marginTop: 10,
                        marginBottom: 0,
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

            {selection === 3 && <div>    <Row style={{marginTop: 10,
                        marginBottom: 0,
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
                    <HeatmapSDK height={'680px'} width={'1430px'} chartId={`${heatMapWorkWayFilterStart}`}></HeatmapSDK>
                </Col>
            </Row> </div>}
            <Row style={{marginTop: 10,
                        marginBottom: 0,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 1450,
                        height: 480
                        }}>
                    
                    
                    <form onSubmit={submitHandlerFilter}>
                        <h3>Change Query Parameter</h3>
                        <p>This Menu offers the possibility to run filters to specify the graphs further. To submit your changes, click the button below.</p>


                        <Row style={{marginTop: 25}}>
                            <Col>
                                <h4>Start date</h4>
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    placeholderText="Choose Start Date!"
                                    inline
                                />
                            </Col>
                            <Col>
                                <h4>End Date</h4>
                                <DatePicker
                                    selected={endDate}
                                    onChange={(date) => setEndDate(date)}
                                    placeholderText="Choose End Date!"
                                    inline
                                />
                            </Col>
                            <Col >  
                            <h4>Day of Week Start</h4>              
                            <label>Choose the start "Day of Week" for your analysis. Choose the beginning of a time period. Only values between 0 and 6 are permitted.</label>
                            <input
                                style={{marginLeft:0, marginTop: 10}}
                                id="amountInputStart"
                                type='number'
                                onChange={(e) => setChosenStartDay(e.target.value)}
                                value={chosenStartDay}
                            />                      
                            <hr></hr>
                            <h4>Hour of Day Start</h4>
                            <label>Choose Hour of Day. Only values between 0 and 23 permitted.</label>
                            <input
                                style={{marginLeft:0, marginTop: 10}}
                                id="amountInputEnd"
                                type='number'
                                onChange={(e) => setChosenStartHour(e.target.value)}
                                value={chosenStartHour}
                            />
                        </Col>
                        <Col style={{marginLeft: 30}}> 
                            <h4>Day of Week End</h4>
                            <label>Choose the start "Day of Week" for your analysis. Choose the end of a time period. Only values between 0 and 6 are permitted.</label>
                            <input
                                style={{marginLeft:0, marginTop: 10}}
                                id="amountInputEnd"
                                type='number'
                                onChange={(e) => setChosenEndDay(e.target.value)}
                                value={chosenEndDay}
                            />
                            <hr></hr>
                            <h4>Hour of Day End</h4>
                            <label>Choose Hour of Day. Only values between 0 and 23 permitted.</label>
                            <input
                                style={{marginLeft:0, marginTop: 10}}
                                id="amountInputEnd"
                                type='number'
                                onChange={(e) => setChosenEndHour(e.target.value)}
                                value={chosenEndHour}
                            />
                            
                            </Col>
                            <Col></Col>


                            <Row style={{marginTop:10, marginBottom: 100}}>
                                <Col>
                                    <Button onClick={submitHandlerFilter} type="submit">Submit changes</Button>
                                </Col>
                            </Row>
                        </Row>
                    </form>
                    <p>{`StartDate: ${filterDate[0]}`}</p>
                    <p>{`StartDate: ${filterDate[1]}`}</p>
                    <p>{`Start Hour of Day Filter: ${dayOfWeekFilter[0]}`}</p>
                    <p>{`End Hour of Day Filter: ${dayOfWeekFilter[1]}`}</p>
                    <p>{`${startDate}`}</p>
                    <p>{`${endDate}`}</p>
                    <p>{chosenStartHour}</p>
                    <p>{chosenEndHour}</p>
                    <p>.</p>
                    <p>.</p>
            </Row>

        </Container>
    );
}

export default HeatMapScene; 