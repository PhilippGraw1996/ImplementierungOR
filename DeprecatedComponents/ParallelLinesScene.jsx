import React from 'react';
import ParallelLines from "../graphComponents/ParallelLinesPlain"

import {Row} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import 'react-datepicker/dist/react-datepicker.css';

const ParallelLinesScene = () => {

    return(
        <Container className="min-vh-100 pb-5" style={{marginTop: 100}}>  
            <h1>Parallel Lines View - Scooter Data</h1> 
            <Col style={{marginTop: 30,
                        marginBottom: 100,
                        borderWidth: 1,
                        borderStyle: "solid",
                        width: 1300,
                        height: 700
                        }}>
                <Row style={{marginTop: 150}}>
                    <ParallelLines/>
                </Row>
            </Col>

        </Container>
    );
}

export default ParallelLinesScene;