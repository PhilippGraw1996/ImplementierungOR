import React, {useState}from 'react';
import DescriptiveChartSDK from "../MongoDBChartComponents/MongoDBSDK/ChartSDK"

import {Row} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import 'react-datepicker/dist/react-datepicker.css';

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


import DatePicker from "react-datepicker";

const ScatterplotScene = () => {


    const [startDate, setStartDate] = useState(new Date("2019-01-01"));
    const [endDate, setEndDate] = useState(new Date("2021-12-31"));

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




    const mainScatter = '649ff0b3-e5b0-4fcd-83d8-c2474bee6576';
    const secondScatter = '649ff39a-84f0-43a4-8cd0-a5891ed0ce4c';
    const thirdScatter = '';
    const fourthScatter = '';

    

    return(
        <Container className="min-vh-100 pb-5" style={{marginTop: 100}}>   
            
            <h1>Scatterplots</h1>
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
                        <Button style={{marginTop: 10, marginLeft: 5}} onClick={() => setSelection(1)}>Duration by Distance</Button>
                        <Button style={{marginTop: 10, marginLeft: 5}} onClick={() => setSelection(2)}>attery Deviation by distance</Button>
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
                    <DescriptiveChartSDK height={'680px'} width={'1430px'} chartId={`${mainScatter}`}></DescriptiveChartSDK>
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
                    <DescriptiveChartSDK height={'680px'} width={'1430px'} chartId={`${secondScatter}`}></DescriptiveChartSDK>
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
                                onChange={(e) => setChosenEndHour(e.target.value)}
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

export default ScatterplotScene;