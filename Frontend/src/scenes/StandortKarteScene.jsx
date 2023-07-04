import React from 'react';
import LocationChartSDK from "../MongoDBChartComponents/MongoDBSDK/ChartSDK"

import {Row} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import 'react-datepicker/dist/react-datepicker.css';

const StandortKarteScene = () => {

    const locationMap = '649efa26-e837-4aa6-8299-ef54e1a17554';

    return(
        <Container className="min-vh-100 pb-5" style={{marginTop: 100}}>  
            <h1>Location Map View - Scooter Data</h1> 
            <Row style={{marginTop: 30,
                        marginBottom: 100,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 1450,
                        height: 700
                        }}>
                <Col>
                    <LocationChartSDK height={'680px'} width={'1430px'} chartId={`${locationMap}`}></LocationChartSDK>
                </Col>
            </Row>

        </Container>
    );
}

export default StandortKarteScene;