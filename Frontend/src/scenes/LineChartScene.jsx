import React from 'react';
import {useState} from 'react';

import LineChartSDK from "../MongoDBChartComponents/MongoDBSDK/ChartSDK"

import {Form, Row} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import 'react-datepicker/dist/react-datepicker.css';

import DatePicker from "react-datepicker";



const LineChartScene = () => {

    const mainChart = '64a684d8-e779-4fd3-8412-7d64813e8898';
    const secondChart = '64a6854e-bfd6-4f0d-8585-aed10e5d039a';
    const thirdChart = '64a6846e-bfd6-47e5-88b3-aed10e5cae23';

    const [startDate, setStartDate] = useState(new Date("2019-09-01"));
    const [endDate, setEndDate] = useState(new Date("2020-10-31"));

    const [chosenStartDay, setChosenStartDay] = useState(0);
    const [chosenEndDay, setChosenEndDay] = useState(6);

    const [filterDate, setFilterDateStart] = useState([new Date("2019-01-01"), new Date("2021-12-31")]);
    const [dayOfWeekFilter, setDayOfWeekFilter] = useState([0, 6]);


    const [selection, setSelection] = useState(1);

    const submitHandlerFilter = (e) => {
        e.preventDefault();
        setFilterDateStart([startDate, endDate]);
        setDayOfWeekFilter([chosenStartDay, chosenEndDay]);
    }

    const submitHandler = (e) => {
        e.preventDefault();

    }

    return(
        <Container className="min-vh-100 pb-5" style={{marginTop: 100}}>
            <h1>Linecharts</h1>
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
                        <Button style={{marginTop: 10, marginLeft: 5, background: "#0B8745", borderColor: "#0B8745"}} onClick={() => setSelection(1)}>Cumulative total amount of Trips over time</Button>
                        <Button style={{marginTop: 10, marginLeft: 5, background: "#0B8745", borderColor: "#0B8745"}} onClick={() => setSelection(2)}>Absolut amount of trips over time</Button>
                        <Button style={{marginTop: 10, marginLeft: 5, background: "#0B8745", borderColor: "#0B8745"}} onClick={() => setSelection(3)}>Barchart absolut amount of trips by month</Button>
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
                    <LineChartSDK height={'650px'} width={'1430px'} filter={{$and: [{"dayOfWeek": {$gte: dayOfWeekFilter[0]}}, {"dayOfWeek": {$lte: dayOfWeekFilter[1]}}, {"newClock": {$gte: new Date(filterDate[0])}}, {"newClock": {$lte: new Date(filterDate[1])}}]}}  chartId={`${mainChart}`} ></LineChartSDK>
                    {console.log(startDate.toISOString())}
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
                    <LineChartSDK height={'650px'} width={'1430px'} filter={{$and: [{"dayOfWeek": {$gte: dayOfWeekFilter[0]}}, {"dayOfWeek": {$lte: dayOfWeekFilter[1]}}, {"newClock": {$gte: new Date(filterDate[0])}}, {"newClock": {$lte: new Date(filterDate[1])}}]}} chartId={`${secondChart}`}></LineChartSDK>
                    {console.log(startDate.toISOString())}
                </Col>
            </Row>}
            {selection === 3 && <Row style={{marginTop: 10,
                        marginBottom: 0,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 1450,
                        height: 700
                        }}>
                <Col>
                    <LineChartSDK height={'650px'} width={'1430px'} filter={{$and: [{"dayOfWeek": {$gte: dayOfWeekFilter[0]}}, {"dayOfWeek": {$lte: dayOfWeekFilter[1]}}, {"newClock": {$gte: new Date(filterDate[0])}}, {"newClock": {$lte: new Date(filterDate[1])}}]}} chartId={`${thirdChart}`} ></LineChartSDK>
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
                                onChange={(e) => setChosenStartDay(parseInt(e.target.value), 10)}
                                value={chosenStartDay}
                            />
                        </Col>
                        <Col style={{marginLeft: 30}}> 
                            <h4>Day of Week End</h4>
                            <label>Choose the start "Day of Week" for your analysis. Choose the end of a time period. Only values between 0 and 6 are permitted.</label>
                            <input
                                style={{marginLeft:0, marginTop: 10}}
                                id="amountInputEnd"
                                type='number'
                                onChange={(e) => setChosenEndDay(parseInt(e.target.value), 10)}
                                value={chosenEndDay}
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

export default LineChartScene;


// filter={{$and:[{"newClock": {$gte: "2020-03-16T16:25:00.000+00:00"}}, {"newClock": {$lte: "2020-05-16T16:25:00.000+00:00"}}]}}

// filter={{$and:[{"newClock": {$gte: startDate.toISOString()}}, {"newClock": {$lte: endDate.toISOString()}}]}}