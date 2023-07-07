import React from 'react';
import {useState} from 'react';

import LineChartSDK from "../MongoDBChartComponents/MongoDBSDK/ChartSDK"

import {Form, Row} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import 'react-datepicker/dist/react-datepicker.css';

import DatePicker from "react-datepicker";



const AreaDiagram = () => {

    const [startDate, setStartDate] = useState(new Date("2019-09-01"));
    const [endDate, setEndDate] = useState(new Date("2020-10-31"));

    const [chosenStartHour, setChosenStartHour] = useState(0);
    const [chosenEndHour, setChosenEndHour] = useState(23);

    const [filterDate, setFilterDateStart] = useState([new Date("2019-01-01"), new Date("2021-12-31")]);
    const [hourOfDayFilter, setHourOfDayFilter] = useState([0, 23]);


    const [selection, setSelection] = useState(1);

    const submitHandlerFilter = (e) => {
        e.preventDefault();
        setFilterDateStart([startDate, endDate]);

        setHourOfDayFilter([chosenStartHour, chosenEndHour]);

        console.log("Hi Mates!")
        console.log(hourOfDayFilter);
    }

    const submitHandler = (e) => {
        e.preventDefault();

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
                        <Button style={{marginTop: 10, marginLeft: 5}} onClick={() => setSelection(1)}>Amount of Trips by trip distance and Weekday</Button>
                        <Button style={{marginTop: 10, marginLeft: 5}} onClick={() => setSelection(2)}>Amount of Trips by Weekday</Button>
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
                    <LineChartSDK height={'680px'} width={'1430px'} filter={{$and: [{"hourOfDay": {$gte: hourOfDayFilter[0]}}, {"hourOfDay": {$lte: hourOfDayFilter[1]}}, {"newClock": {$gte: new Date(filterDate[0])}}, {"newClock": {$lte: new Date(filterDate[1])}}]}} chartId={`${mainChart}`}></LineChartSDK>
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
                    <LineChartSDK height={'680px'} width={'1430px'} filter={{$and: [{"hourOfDay": {$gte: hourOfDayFilter[0]}}, {"hourOfDay": {$lte: hourOfDayFilter[1]}}, {"newClock": {$gte: new Date(filterDate[0])}}, {"newClock": {$lte: new Date(filterDate[1])}}]}} chartId={`${secondChart}`} ></LineChartSDK>
                </Col>

            </Row>}                    <Row style={{marginTop: 10,
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
                            <h4>Hour of Day Start</h4>              
                            <label>Choose the start "Hour of Day" for your analysis. Choose the beginning of a time period. Only values between 0 and 23 are permitted.</label>
                            <input
                                style={{marginLeft:0, marginTop: 10}}
                                id="amountInputStart"
                                type='number'
                                onChange={(e) => setChosenStartHour(parseInt(e.target.value), 10)}
                                value={chosenStartHour}
                            />
                        </Col>
                        <Col style={{marginLeft: 30}}> 
                            <h4>Hour of Day End</h4>
                            <label>Choose the start "Hour of Day" for your analysis. Choose the end of a time period. Only values between 0 and 23 are permitted.</label>
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
                                    <Button onClick={submitHandlerFilter} type="submit">Submit changes</Button>
                                </Col>
                            </Row>
                        </Row>
                    </form>
            </Row>



        </Container>
    );
}

export default AreaDiagram;