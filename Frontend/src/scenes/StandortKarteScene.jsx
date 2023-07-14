import React, {useState} from 'react';
import LocationChartSDK from "../MongoDBChartComponents/MongoDBSDK/ChartSDK"

import {Row} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';
import 'react-datepicker/dist/react-datepicker.css';

import DatePicker from "react-datepicker";

const StandortKarteScene = () => {

    const [startDate, setStartDate] = useState(new Date("2019-09-01"));
    const [endDate, setEndDate] = useState(new Date("2020-10-31"));

    const [chosenStartHour, setChosenStartHour] = useState(0);
    const [chosenEndHour, setChosenEndHour] = useState(23);

    const [chosenStartDay, setChosenStartDay] = useState(0);
    const [chosenEndDay, setChosenEndDay] = useState(6);

    const [filterDate, setFilterDateStart] = useState([new Date("2019-01-01"), new Date("2021-12-31")]);
    const [dayOfWeekFilter, setDayOfWeekFilter] = useState([0, 6]);

    const [chosenCode, setChosenCode] = useState(224807);

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

    const locationMapEnd = '649ff18c-356a-4be3-80f6-d48f3f3d783a';
    const locationMapStart = '64a49023-fd0b-425e-8b14-8b7e4719551b';
    const locationMapSingle = '64a491db-0834-4bcd-8deb-d7e659f05c29';

    return(
        <Container className="min-vh-100 pb-5" style={{marginTop: 100}}>  
            <h1>Geo Scatterplots</h1>
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
                        <Button style={{marginTop: 10, marginLeft: 5 , background: "#0B8745", borderColor: "#0B8745"}} onClick={() => setSelection(1)}>Geo Scatter by end location</Button>
                        <Button style={{marginTop: 10, marginLeft: 5, background: "#0B8745", borderColor: "#0B8745"}} onClick={() => setSelection(2)}>Geo Scatter by start location</Button>
                        <Button style={{marginTop: 10, marginLeft: 5, background: "#0B8745", borderColor: "#0B8745"}} onClick={() => setSelection(3)}>Geo Scatter - Single Scooter Movement</Button>
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
                    <LocationChartSDK height={'680px'} width={'1430px'} filter={{$and: [{"dayOfWeek": {$gte: dayOfWeekFilter[0]}}, {"dayOfWeek": {$lte: dayOfWeekFilter[1]}}, {"newClock": {$gte: new Date(filterDate[0])}}, {"newClock": {$lte: new Date(filterDate[1])}}, {"hourOfDay": {$gte: hourOfDayFilter[0]}}, {"hourOfDay": {$lte: hourOfDayFilter[1]}}]}} chartId={`${locationMapEnd}`}></LocationChartSDK>
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
                    <LocationChartSDK height={'680px'} width={'1430px'} filter={{$and: [{"dayOfWeek": {$gte: dayOfWeekFilter[0]}}, {"dayOfWeek": {$lte: dayOfWeekFilter[1]}}, {"newClock": {$gte: new Date(filterDate[0])}}, {"newClock": {$lte: new Date(filterDate[1])}}, {"hourOfDay": {$gte: hourOfDayFilter[0]}}, {"hourOfDay": {$lte: hourOfDayFilter[1]}}]}} chartId={`${locationMapStart}`}></LocationChartSDK>
                </Col>
            </Row>}

            {selection === 3 && <Row style={{marginTop: 10,
                        marginBottom: 0,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 1450,
                        height: 800
                        }}>
                <Col>
                    <LocationChartSDK height={'680px'} width={'1430px'} filter={{$and: [{"dayOfWeek": {$gte: dayOfWeekFilter[0]}}, {"dayOfWeek": {$lte: dayOfWeekFilter[1]}}, {"newClock": {$gte: new Date(filterDate[0])}}, {"newClock": {$lte: new Date(filterDate[1])}}, {"hourOfDay": {$gte: hourOfDayFilter[0]}}, {"hourOfDay": {$lte: hourOfDayFilter[1]}}, {"code": chosenCode}]}}  chartId={`${locationMapSingle}`}></LocationChartSDK>
                </Col>
                <Col>
                <h4>Day of Week Start</h4>              
                            <label>Choose the Code of the Scooter you are interested in: </label>
                            <input
                                style={{marginLeft:20, marginTop: 10}}
                                id="amountInputStart"
                                type='number'
                                onChange={(e) => setChosenCode(e.target.value)}
                                value={chosenCode}
                            />   
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
                                    <Button onClick={submitHandlerFilter} type="submit"  style={{ background: "#0B8745", borderColor: "#0B8745"}}>Submit changes</Button>
                                </Col>
                            </Row>
                        </Row>
                    </form>
            </Row>

        </Container>
    );
}

export default StandortKarteScene;