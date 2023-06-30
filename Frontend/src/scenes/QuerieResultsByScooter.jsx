import { useEffect, useState } from 'react';

import {observer} from "mobx-react";

import Card from "react-bootstrap/Card";

import {useStore} from "../stores/querieStore";

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

    const onSubmitHandler = (e) => {
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

    return (
        <div style={{marginLeft: 350, marginTop: 120, marginBottom: 100, width: 1200}}>
            <form className="create" onSubmit={onSubmitHandler}>

                <label>Choose Category you want to Filter by in Order:</label>
                <select 
                    value={chosenCategory}
                    onChange={(e) => setChosenCategory(e.target.value)}
                    >
                    <option value="duration">Duration</option>
                    <option value="speed">Speed</option>
                    <option value="distance_osrm">Distance</option>
                    <option value="batteryDeviation">Battery Drawdown</option>
                </select>
                <label>Choose Order you want to sort by:</label>
                <select 
                    value={chosenOrder}
                    onChange={(e) => setChosenOrder(e.target.value)}
                    >
                    <option value="descending">Descending</option>
                    <option value="ascending">Ascending</option>
                </select>

                <label>Choose amount of hits you want to be displayed:</label>
                <input
                    id="amountInput"
                    type='number'
                    onChange={(e) => setChosenAmount(e.target.value)}
                    value={chosenAmount}
                />

                <input
                    id="scooterCode"
                    type='number'
                    onChange={(e) => setChosenCode(e.target.value)}
                    value={chosenCode}
                />

                <button
                    type="submit"
                >Submit!</button>

            </form>
            <p>{chosenCategory}</p>
            <p>{chosenAmount}</p>
            <p>{chosenOrder}</p>
            <p>{chosenCode}</p>

            <p>Hallo!!!</p>
            <p>{myDateStore.startDate.getDate()}</p>
            <p>{myDateStore.endDate.getDate()}</p>

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
        </div>
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