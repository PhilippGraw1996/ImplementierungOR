import React, {useState} from 'react';
import BarChartSDK from "../../MongoDBChartComponents/MongoDBSDK/ChartSDK"

import {Row} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';
import 'react-datepicker/dist/react-datepicker.css';

const BarchartHorMain = () => {

    const [filter, setFilter] = useState(1);

    const submitHandler = (e) => {
        e.preventDefault()
    }

    const mainBarChart = '649ffd6c-f2f0-4f3e-84a6-11daba20d8f0';
    const speedBarChart = '649ffecb-2ac4-4671-82d6-c2e1a95a2ed5';
    const durationBarChart = '649ffd3b-e5b0-405e-8df1-c2474bf3c923';
    const batteryDevBarChart = '64a00063-e837-4414-8196-ef54e156544f';
    const distanceBarChart = '649ffdea-b269-4655-89c6-1fa313671302';
    

    return(
        <Container className="min-vh-100 pb-5" style={{marginTop: 100}}>   
            <h1>Barchart Horizontal View</h1>
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
                        <Button style={{marginTop: 10, marginLeft: 5, borderColor: "#26D477", backgroundColor: "#26D477"}} onClick={() => setFilter(1)}>Overview</Button>
                        <Button style={{marginTop: 10, marginLeft: 5, borderColor: "#26D477", backgroundColor: "#26D477"}} onClick={() => setFilter(2)}>Speed Distribution by Hour</Button>
                        <Button style={{marginTop: 10, marginLeft: 5, borderColor: "#26D477", backgroundColor: "#26D477"}} onClick={() => setFilter(3)}>Trip Duration Distribution by Hour</Button>
                        <Button style={{marginTop: 10, marginLeft: 5, borderColor: "#26D477", backgroundColor: "#26D477"}} onClick={() => setFilter(4)}>Batterydeviation Distribution by Hour</Button>
                        <Button style={{marginTop: 10, marginLeft: 5, borderColor: "#26D477", backgroundColor: "#26D477"}} onClick={() => setFilter(5)}>Distance Distribution by Hour</Button>
                    </Form>

            </Row>

            {filter === 1 && <div></div>}
            {filter === 2 && <div></div>}
            {filter === 3 && <div></div>}
            {filter === 4 && <div></div>}
            {filter === 5 && <div></div>}

        </Container>
    );
}

export default BarchartHorMain;