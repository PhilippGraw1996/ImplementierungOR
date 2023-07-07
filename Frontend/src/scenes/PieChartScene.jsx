import React, { useState } from 'react';
import PieChartSDK from "../MongoDBChartComponents/MongoDBSDK/ChartSDK"

import {Row} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';
import 'react-datepicker/dist/react-datepicker.css';

import DatePicker from "react-datepicker";


const PieChartScene = () => {

    const [startDate, setStartDate] = useState(new Date("2019-09-01"));
    const [endDate, setEndDate] = useState(new Date("2020-10-31"));

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
        setDayOfWeekFilter([chosenStartDay, chosenEndDay]);

        console.log("Hi Mates!")
        console.log(dayOfWeekFilter);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setSelection(e.target.value)
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
                        <Button style={{marginTop: 10, marginLeft: 5}} onClick={() => setSelection(1)}>Amount of Trips by Weekday</Button>
                        <Button style={{marginTop: 10, marginLeft: 5}} onClick={() => setSelection(2)}>Amount of Trips by Hour of Day</Button>
                        <Button style={{marginTop: 10, marginLeft: 5}} onClick={() => setSelection(3)}>Amount of Trips by Weekend (yes/no)</Button>
                    </Form>
            </Row>
        { selection === 1 && <Row style={{marginTop: 10,
                        marginBottom: 0,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 1450,
                        height: 700
                        }}>
                <Col>
                    {console.log(typeof chosenStartDay)}
                    <PieChartSDK height={'680px'} width={'1250px'} filter={{$and: [{"dayOfWeek": {$gte: dayOfWeekFilter[0]}}, {"dayOfWeek": {$lte: dayOfWeekFilter[1]}}, {"newClock": {$gte: new Date(filterDate[0])}}, {"newClock": {$lte: new Date(filterDate[1])}}, {"hourOfDay": {$gte: hourOfDayFilter[0]}}, {"hourOfDay": {$lte: hourOfDayFilter[1]}}]}} chartId={'64a1c81b-e837-4ad9-8016-ef54e13ca33b'}></PieChartSDK>
                </Col>
            </Row>
            }

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
                    <PieChartSDK height={'680px'} width={'1250px'} filter={{$and: [{"dayOfWeek": {$gte: dayOfWeekFilter[0]}}, {"dayOfWeek": {$lte: dayOfWeekFilter[1]}}, {"newClock": {$gte: new Date(filterDate[0])}}, {"newClock": {$lte: new Date(filterDate[1])}}, {"hourOfDay": {$gte: hourOfDayFilter[0]}}, {"hourOfDay": {$lte: hourOfDayFilter[1]}}]}} chartId={'649dfc19-e5b0-4467-8dd8-c2474b93d45f'}></PieChartSDK>
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
                    <PieChartSDK height={'680px'} width={'1250px'} filter={{$and: [{"dayOfWeek": {$gte: dayOfWeekFilter[0]}}, {"dayOfWeek": {$lte: dayOfWeekFilter[1]}}, {"newClock": {$gte: new Date(filterDate[0])}}, {"newClock": {$lte: new Date(filterDate[1])}}, {"hourOfDay": {$gte: hourOfDayFilter[0]}}, {"hourOfDay": {$lte: hourOfDayFilter[1]}}]}} chartId={'649dfb81-d8a7-4814-883e-650d4f42f0e2'}></PieChartSDK>
                </Col>
            </Row>}

            <Row style={{marginTop: 10,
                        marginBottom: 100,
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
                                onChange={(e) => setChosenStartDay(parseInt(e.target.value, 10))}
                                value={chosenStartDay}
                            />                      
                            <hr></hr>
                            <h4>Hour of Day Start</h4>
                            <label>Choose Hour of Day. Only values between 0 and 23 permitted.</label>
                            <input
                                style={{marginLeft:0, marginTop: 10}}
                                id="amountInputEnd"
                                type='number'
                                onChange={(e) => setChosenStartHour(parseInt(e.target.value, 10))}
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
                                onChange={(e) => setChosenEndDay(parseInt(e.target.value, 10))}
                                value={chosenEndDay}
                            />
                            <hr></hr>
                            <h4>Hour of Day End</h4>
                            <label>Choose Hour of Day. Only values between 0 and 23 permitted.</label>
                            <input
                                style={{marginLeft:0, marginTop: 10}}
                                id="amountInputEnd"
                                type='number'
                                onChange={(e) => setChosenEndHour(parseInt(e.target.value, 10))}
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
            </Row>
        </Container>
    );
}

export default PieChartScene;







/**
 *                  <p>{`StartDate: ${filterDate[0]}`}</p>
                    <p>{`StartDate: ${filterDate[1]}`}</p>
                    <p>{`Start Hour of Day Filter: ${dayOfWeekFilter[0]}`}</p>
                    <p>{`End Hour of Day Filter: ${dayOfWeekFilter[1]}`}</p>
                    <p>{`${startDate}`}</p>
                    <p>{`${endDate}`}</p>
                    <p>{chosenStartHour}</p>
                    <p>{chosenEndHour}</p>
                    <p>.</p>
                    <p>.</p>
 */