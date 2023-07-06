import { useEffect, useState } from 'react';

import {observer} from "mobx-react";

import Card from "react-bootstrap/Card";
import {Form, Row} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';

import {useStore} from "../stores/querieStore";

import DatePicker from "react-datepicker";

// Setting Form Input and Querie Parameters


const QuerieResultsByScooter = () => {

    const {myDateStore} = useStore(); 

    // Form Data updated when Form Input changes
    const [chosenCategory, setChosenCategory] = useState('duration');
    const [chosenAmount, setChosenAmount] = useState(5);
    const [chosenOrder, setChosenOrder] = useState('descending');
    const [chosenCode, setChosenCode] = useState(0);

    // Setting Form Input and Querie Parameters - Updated on OnSubmit
    const [category, setCategory] = useState('duration');
    const [amount, setAmount] = useState(5);
    const [displayOrder, setDisplayOrder] = useState("descending");
    const [code, setCode] = useState(0);

    const submitHandlerFilter = (e) => {
        e.preventDefault();
        setCategory(chosenCategory);
        setAmount(chosenAmount);
        setDisplayOrder(chosenOrder);
        setCode(chosenCode);
    };

    const [scooter, setScooter] = useState(null);

    useEffect(() => {
        const fetchScooters = async () => {
            const response = await fetch(`/api/scooters/descByCat/${category}/${amount}/${displayOrder}/${code}`);
            const json = await response.json();
        

            if (response.ok){
                setScooter(json);
            }
        }
        fetchScooters();
    }, [category, amount, displayOrder, code])

/* --------------------------------------------------------------------------------*/




    return (
        <Container className="min-vh-100 pb-5" style={{marginTop: 100}}>
            <h1>Manual Queries</h1>
            <Row style={{marginTop: 20,
                        marginBottom: 10,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 1320,
                        height: 320
                        }}>
                    
                    
                    <form onSubmit={submitHandlerFilter}>
                        <h3>Change Query Parameter</h3>
                        <p>This Menu offers the possibility to run queries based on category you want to sort the results be in either descending or ascending order. If known you can further narrow down the results by filtering for specific scooter Codes.</p>

                        <Row style={{marginTop: 25}}>
                            <Col>
                                <h4>Category Filter</h4>
                                <label>Choose Category you want to Order your results by in either Descending or Ascending order:</label>
                                <select 
                                    style={{margintTop : 20}}
                                    value={chosenCategory}
                                    onChange={(e) => setChosenCategory(e.target.value)}
                                    >
                                    <option value="duration">Duration</option>
                                    <option value="speed">Speed</option>
                                    <option value="distance_osrm">Distance</option>
                                    <option value="batteryDeviation">Battery Drawdown</option>
                                </select>
                            </Col>
                            <Col>
                                <h4>Sorting Order </h4>
                                <label>Choose the order you want to sort the results by. Either ascending or descdning order:</label>
                                <select 
                                    style={{margintTop : 20}}
                                    value={chosenOrder}
                                    onChange={(e) => setChosenOrder(e.target.value)}
                                    >
                                    <option value="descending">Descending</option>
                                    <option value="ascending">Ascending</option>
                                </select>
                            </Col>
                            <Col >  
                            <h4>Amount of Results</h4>              
                            <label>Choose the amount of querieresults you want to be displayed in given order in the list below:</label>
                            <input
                                style={{margintTop : 20}}
                                id="amountInput"
                                type='number'
                                onChange={(e) => setChosenAmount(e.target.value)}
                                value={chosenAmount}
                            />
                            </Col>
                            <Col style={{marginLeft: 30}}> 
                                <h4>Scooter Code</h4>
                                <label>If known, enter a Scooter Code to filter by Code and only retrieve values of a certain Scooter:</label>
                                <input
                                    style={{margintTop : 20}}
                                    id="scooterCode"
                                    type='number'
                                    onChange={(e) => setChosenCode(e.target.value)}
                                    value={chosenCode}
                                />  
                            </Col>

                            <Row style={{marginTop:15, marginBottom: 100}}>
                                <Col>
                                    <Button onClick={submitHandlerFilter} type="submit">Submit changes</Button>
                                </Col>
                            </Row>
                        </Row>
                    </form>
            </Row>

            <Row xs={1} sm={2} md={3} lg={3} className="p-2 g-5" >
                {scooter && scooter.map((scooter, index) => (
                    <Col key={scooter.id}>
                    <div>
                        <div className={"classes.card__front"}>
                        <Card style={{ height: '15rem'}} >
                            <Card.Body>
                                <Card.Title className={"classes.card__title"} >
                                <h2 style={{color: "black", textDecoration: "none"}}>{`Scooter Code: ${scooter.code}`}</h2>
                                </Card.Title>
                                <Card.Text className={"classes.card__subtitle"}>{`Distance: ${scooter.distance_osrm} meter`}</Card.Text>
                                <Card.Text className={"classes.card__subtitle"}>{`Duration: ${scooter.duration} minutes`}</Card.Text>
                                <Card.Text className={"classes.card__subtitle"}>{`Battery Deviation: ${scooter.batteryDeviation} %`}</Card.Text>
                                <Card.Text className={"classes.card__subtitle"}>{`Average Speed: ${scooter.speed} km/h`}</Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                    </div>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default observer(QuerieResultsByScooter);



/*            
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {category}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item 
                        value="duration" 
                        onClick={(e) => setCategory(e.target.value)}
                        >Duration
                    </Dropdown.Item>

                    <Dropdown.Item 
                        value="distance_osrm"
                        onClick={(e) => setCategory(e.target.value)}
                        >Distance
                    </Dropdown.Item>

                    <Dropdown.Item 
                        value="batteryDeviation"
                        onClick={(e) => setCategory(e.target.value)}
                        >Battery Consumption
                    </Dropdown.Item>
                    <Dropdown.Item 
                        value="speed"
                        onClick={(e) => setCategory(e.target.value)}
                        >Speed
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
 */

/*
        <input
            id="categoryInput"
            type='text'
            onChange={(e) => setChosenCategory(e.target.value)}
            value={chosenCategory}
        /> 
*/



/**
 * 
                <div>
                    {scooter && scooter.map((scooter) => (
                        <div key={scooter._id} style={{borderStyle: "solid", margin: 5}}>
                            <div className={"classes.card__front"}>
                                <Card style={{ height: '12rem'}} >
                                    <h3>Code: {scooter.code}</h3>
                                    <p>Battery Consumption: {scooter.batteryDeviation}</p>
                                    <p>Trip Distance: {scooter.distance_osrm}</p>
                                    <p>Trip Speed: {scooter.speed}</p>
                                    <p>Trip Duration: {scooter.duration}</p>
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>






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
 */