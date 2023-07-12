import React, {useState} from 'react';
import BarChartSDK from "../MongoDBChartComponents/MongoDBSDK/ChartSDK"

import {Row} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';
import 'react-datepicker/dist/react-datepicker.css';

import DatePicker from "react-datepicker";

const BarChartSceneUp = () => {

    const [startDate, setStartDate] = useState(new Date("2019-09-01"));
    const [endDate, setEndDate] = useState(new Date("2020-10-31"));

    const [chosenStartHour, setChosenStartHour] = useState(0);
    const [chosenEndHour, setChosenEndHour] = useState(6);

    const [filterDate, setFilterDateStart] = useState([new Date("2019-01-01"), new Date("2021-12-31")]);
    const [dayOfWeekFilter, setDayOfWeekFilter] = useState([0, 6]);


    const [selection, setSelection] = useState(1);

    const submitHandlerFilter = (e) => {
        e.preventDefault();
        setFilterDateStart([startDate, endDate]);
        setDayOfWeekFilter([chosenStartHour, chosenEndHour]);
    }

    const submitHandler = (e) => {
        e.preventDefault();

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
                        <Button style={{marginTop: 10, marginLeft: 5, background: "#0B8745", borderColor: "#0B8745"}} onClick={() => setSelection(1)}>Overview</Button>
                        <Button style={{marginTop: 10, marginLeft: 5, background: "#0B8745", borderColor: "#0B8745"}} onClick={() => setSelection(2)}>Speed Distribution by Weekday</Button>
                        <Button style={{marginTop: 10, marginLeft: 5, background: "#0B8745", borderColor: "#0B8745"}} onClick={() => setSelection(3)}>Trip Duration Distribution by Weekday</Button>
                        <Button style={{marginTop: 10, marginLeft: 5, background: "#0B8745", borderColor: "#0B8745"}} onClick={() => setSelection(4)}>Batterydeviation Distribution by Weekday</Button>
                        <Button style={{marginTop: 10, marginLeft: 5, background: "#0B8745", borderColor: "#0B8745"}} onClick={() => setSelection(5)}>Distance Distribution by Weekday</Button>
                    </Form>

            </Row>

            {selection === 1 &&            
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
                            <BarChartSDK height={'650px'} filter={{$and: [{"dayOfWeek": {$gte: dayOfWeekFilter[0]}}, {"dayOfWeek": {$lte: dayOfWeekFilter[1]}}, {"newClock": {$gte: new Date(filterDate[0])}}, {"newClock": {$lte: new Date(filterDate[1])}}]}}  width={'1430px'} chartId={`${mainBarChart}`}></BarChartSDK>
                        </Col>
                    </Row>}
                    {selection === 2 &&            
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
                            <BarChartSDK height={'650px'} width={'1430px'} filter={{$and: [{"dayOfWeek": {$gte: dayOfWeekFilter[0]}}, {"dayOfWeek": {$lte: dayOfWeekFilter[1]}}, {"newClock": {$gte: new Date(filterDate[0])}}, {"newClock": {$lte: new Date(filterDate[1])}}]}}  chartId={`${speedBarChart}`}></BarChartSDK>
                        </Col>
                    </Row>}

                    {selection === 3 &&            
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
                            <BarChartSDK height={'650px'} width={'1430px'} filter={{$and: [{"dayOfWeek": {$gte: dayOfWeekFilter[0]}}, {"dayOfWeek": {$lte: dayOfWeekFilter[1]}}, {"newClock": {$gte: new Date(filterDate[0])}}, {"newClock": {$lte: new Date(filterDate[1])}}]}}  chartId={`${durationBarChart}`}></BarChartSDK>
                        </Col>
                    </Row>}


                    {selection === 4 &&            
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
                            <BarChartSDK height={'650px'} width={'1430px'} filter={{$and: [{"dayOfWeek": {$gte: dayOfWeekFilter[0]}}, {"dayOfWeek": {$lte: dayOfWeekFilter[1]}}, {"newClock": {$gte: new Date(filterDate[0])}}, {"newClock": {$lte: new Date(filterDate[1])}}]}}  chartId={`${batteryDevBarChart}`}></BarChartSDK>
                        </Col>
                    </Row>}


                    {selection === 5 &&            
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
                            <BarChartSDK height={'650px'} width={'1430px'} filter={{$and: [{"dayOfWeek": {$gte: dayOfWeekFilter[0]}}, {"dayOfWeek": {$lte: dayOfWeekFilter[1]}}, {"newClock": {$gte: new Date(filterDate[0])}}, {"newClock": {$lte: new Date(filterDate[1])}}]}}  chartId={`${distanceBarChart}`}></BarChartSDK>
                        </Col>
                    </Row>}

                    <Row style={{marginTop: 10,
                        marginBottom: 100,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 1450,
                        height: 440
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
                                onChange={(e) => setChosenStartHour(parseInt(e.target.value), 10)}
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
                                onChange={(e) => setChosenEndHour(parseInt(e.target.value), 10)}
                                value={chosenEndHour}
                            /></Col>
                            <Col></Col>


                            <Row style={{marginTop:10, marginBottom: 100}}>
                                <Col>
                                    <Button onClick={submitHandlerFilter} type="submit" style={{ background: "#0B8745", borderColor: "#0B8745"}}>Submit changes</Button>
                                </Col>
                            </Row>
                        </Row>
                    </form>
            </Row>


        </Container>
    );
}

export default BarChartSceneUp;