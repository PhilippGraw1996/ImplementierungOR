import React, {useState} from 'react';
import BarChartSDK from "../MongoDBChartComponents/MongoDBSDK/ChartSDK"

import {Row} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from "react-datepicker";

const BarChartSceneHorizontal = () => {

    const [startDate, setStartDate] = useState(new Date("2019-09-01"));
    const [endDate, setEndDate] = useState(new Date("2020-10-31"));

    const [chosenStartHour, setChosenStartHour] = useState(0);
    const [chosenEndHour, setChosenEndHour] = useState(23);

    const [filterDate, setFilterDateStart] = useState([new Date("2019-09-01"), new Date("2020-10-31")]);
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

    const mainBarChart = '649ffd6c-f2f0-4f3e-84a6-11daba20d8f0';
    const speedBarChart = '649ffecb-2ac4-4671-82d6-c2e1a95a2ed5';
    const durationBarChart = '649ffd3b-e5b0-405e-8df1-c2474bf3c923';
    const batteryDevBarChart = '64a00063-e837-4414-8196-ef54e156544f';
    const distanceBarChart = '649ffdea-b269-4655-89c6-1fa313671302';
    

    return(
        <Container className="min-vh-100 pb-5" style={{marginTop: 100}}>   
            <h1 style={{marginTop: 10 }}>Barchart Horizontal View</h1>
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
                        <Button style={{marginTop: 10, marginLeft: 5, background: "#0B8745", borderColor: "#0B8745"}} onClick={() => setSelection(2)}>Speed Distribution by Hour</Button>
                        <Button style={{marginTop: 10, marginLeft: 5, background: "#0B8745", borderColor: "#0B8745"}} onClick={() => setSelection(3)}>Trip Duration Distribution by Hour</Button>
                        <Button style={{marginTop: 10, marginLeft: 5, background: "#0B8745", borderColor: "#0B8745"}} onClick={() => setSelection(4)}>Batterydeviation Distribution by Hour</Button>
                        <Button style={{marginTop: 10, marginLeft: 5, background: "#0B8745", borderColor: "#0B8745"}} onClick={() => setSelection(5)}>Distance Distribution by Hour</Button>
                    </Form>

            </Row>

            {selection === 1 &&            
                     <Row style={{marginTop: 10,
                        marginBottom: 10,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 1450,
                        height: 700
                        }}>
                        <Col>
                            <BarChartSDK height={'650px'} width={'1430px'} filter={{$and: [{"hourOfDay": {$gte: hourOfDayFilter[0]}}, {"hourOfDay": {$lte: hourOfDayFilter[1]}}, {"newClock": {$gte: new Date(filterDate[0])}}, {"newClock": {$lte: new Date(filterDate[1])}}]}} chartId={`${mainBarChart}`}></BarChartSDK>
                        </Col>
                        
                    </Row>}
                    {selection === 2 &&            
                     <Row style={{marginTop: 10,
                        marginBottom: 10,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 1450,
                        height: 700
                        }}>
                        <Col>
                            <BarChartSDK height={'650px'} width={'1430px'} filter={{$and: [{"hourOfDay": {$gte: hourOfDayFilter[0]}}, {"hourOfDay": {$lte: hourOfDayFilter[1]}}, {"newClock": {$gte: new Date(filterDate[0])}}, {"newClock": {$lte: new Date(filterDate[1])}}]}} chartId={`${speedBarChart}`}></BarChartSDK>
                        </Col>
                    </Row>}

                    {selection === 3 &&            
                     <Row style={{marginTop: 10,
                        marginBottom: 10,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 1450,
                        height: 700
                        }}>
                        <Col>
                            <BarChartSDK height={'650px'} filter={{$and: [{"hourOfDay": {$gte: hourOfDayFilter[0]}}, {"hourOfDay": {$lte: hourOfDayFilter[1]}}, {"newClock": {$gte: new Date(filterDate[0])}}, {"newClock": {$lte: new Date(filterDate[1])}}]}} width={'1430px'} chartId={`${durationBarChart}`}></BarChartSDK>
                        </Col>
                    </Row>}


                    {selection === 4 &&            
                     <Row style={{marginTop: 10,
                        marginBottom: 10,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 1450,
                        height: 700
                        }}>
                        <Col>
                            <BarChartSDK height={'650px'} width={'1430px'} filter={{$and: [{"hourOfDay": {$gte: hourOfDayFilter[0]}}, {"hourOfDay": {$lte: hourOfDayFilter[1]}}, {"newClock": {$gte: new Date(filterDate[0])}}, {"newClock": {$lte: new Date(filterDate[1])}}]}} chartId={`${batteryDevBarChart}`}></BarChartSDK>
                        </Col>
                    </Row>}


                    {selection === 5 &&            
                     <Row style={{marginTop: 10,
                        marginBottom: 10,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 1450,
                        height: 700
                        }}>
                        <Col>
                            <BarChartSDK height={'650px'} width={'1430px'} filter={{$and: [{"hourOfDay": {$gte: hourOfDayFilter[0]}}, {"hourOfDay": {$lte: hourOfDayFilter[1]}}, {"newClock": {$gte: new Date(filterDate[0])}}, {"newClock": {$lte: new Date(filterDate[1])}}]}} chartId={`${distanceBarChart}`}></BarChartSDK>
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
                            <h4>Hour of Day Start</h4>              
                            <label>Choose the start "Hour of Day" for your analysis. Choose the beginning of a time period. Only values between 0 and 23 are permitted.</label>
                            <input
                                style={{marginLeft:0, marginTop: 10}}
                                id="amountInputStart"
                                type='number'
                                onChange={(e) => setChosenStartHour(parseInt(e.target.value))}
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
                                onChange={(e) => setChosenEndHour(parseInt(e.target.value))}
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

export default BarChartSceneHorizontal;




/*


                <Form onSubmit={submitHandler}>
                        <Button style={{marginTop: 10, marginLeft: 5}} onClick={() => setSelection(1)}>Overview</Button>
                        <Button style={{marginTop: 10, marginLeft: 5}} onClick={() => setSelection(2)}>Speed Distribution by Hour</Button>
                        <Button style={{marginTop: 10, marginLeft: 5}} onClick={() => setSelection(3)}>Trip Duration Distribution by Weekday</Button>
                        <Button style={{marginTop: 10, marginLeft: 5}} onClick={() => setSelection(4)}>Batterydeviation Distribution by Weekday</Button>
                        <Button style={{marginTop: 10, marginLeft: 5}} onClick={() => setSelection(5)}>Distance Distribution by Weekday</Button>
                    </Form>

*/ 