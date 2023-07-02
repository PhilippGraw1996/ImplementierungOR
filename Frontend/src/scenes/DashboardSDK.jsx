import React from 'react';
import DescriptiveChartSDK from "../MongoDBChartComponents/MongoDBSDK/ChartSDK"

import {Row} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import 'react-datepicker/dist/react-datepicker.css';

const DashboardSDK = () => {

    const firstOverviewDashboard = '64a1c81b-e837-4462-8378-ef54e13ca333';
    const chartsAndScattersDashboard = '649ff39a-84f0-4d70-8e00-a5891ed0ce38';
    const mapsDashboard = '649ff18c-356a-40e4-80ec-d48f3f3d7828';
    const barchartsDashboard = '64a008b1-84f0-433d-8ae4-a5891edbe4b6';

    

    return(
        <Container className="min-vh-100 pb-5" style={{marginTop: 100}}>   
            <h1>Bar Chart View - Scooter Data</h1>
            <Col style={{marginTop: 30,
                        marginBottom: 100,
                        borderWidth: 1,
                        borderStyle: "solid",
                        borderRadius: "5px",
                        width: 1300,
                        height: 700
                        }}>
                <Row>
                    <DescriptiveChartSDK height={'650px'} width={'1250px'} chartId={`${firstOverviewDashboard}`}></DescriptiveChartSDK>
                </Row>
            </Col>
        </Container>
    );
}

export default DashboardSDK;