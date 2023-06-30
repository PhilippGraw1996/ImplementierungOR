import React from 'react';
import HeatMap from "../graphComponents/HeatMapPlain"
import HeatMapTableChartSDK from "../MongoDBChartComponents/MongoDBSDK/ChartSDK"

import {Row} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import 'react-datepicker/dist/react-datepicker.css';

const HeatMapScene = () => {

    return(
        <Container className="min-vh-100 pb-5" style={{marginTop: 100}}> 
            <h1>Heatmap - Scooter Data</h1>  
            <Col style={{marginTop: 30,
                        marginBottom: 100,
                        borderWidth: 1,
                        borderStyle: "solid",
                        width: 1300,
                        height: 700
                        }}>
                <Row>
                    <HeatMapTableChartSDK height={'700px'} width={'1300px'} chartId={'649dca7a-e837-489e-87e6-ef54e1e1b155'}></HeatMapTableChartSDK>
                </Row>
            </Col>

        </Container>
    );
}

export default HeatMapScene; 