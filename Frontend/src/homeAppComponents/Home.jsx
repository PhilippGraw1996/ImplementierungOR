import React from 'react';
import Kacheln from './Kacheln';

import HomeBanner from "./HomeBanner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SubKacheln from './SubKacheln';
import Button from 'react-bootstrap/Button';
import {Form} from 'react-bootstrap';

import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

function Home() {

  return (
    <Container className="min-vh-100 pb-5" style={{marginTop: 100}}>
        <div style={{zIndex: "-1"}}>
            <HomeBanner/>
        </div>

        <div style={{zIndex: "1"}}>
            <Kacheln style={{marginTop: 0}}/>
        </div>
    
        <Container style={{marginTop: 80}}>
            <hr></hr>   
            <h1>Zeitraum der Anaylse</h1>
            <Form>
                <Row style={{marginTop: 20}}>
                    <Col>
                        <h4>Start Datum</h4>
                        <DatePicker
                            placeholderText="Keine Auswahl getroffen!"
                            inline
                        />
                    </Col>
                    <Col>
                        <h4>End Datum</h4>
                        <DatePicker
                            placeholderText="Keine Auswahl getroffen!"
                            inline
                        />
                    </Col>
                    <Col></Col>
                    <Col></Col>

                    <Row style={{marginTop:10}}>
                        <Col>
                            <Button style={{backgroundColor: "#26D477", borderColor: "#26D477"}}>Daten übernehmen</Button>
                        </Col>
                    </Row>
                    
                <h4 style={{marginTop:15}}>Für den Gewählten Zeitraum existieren 27598 Einträge.</h4>
                </Row>
            </Form>
        </Container>        

        <div style={{marginTop: 40}}>
            <hr></hr>   
            <h1>Grafische Analyse</h1>
        </div>

        <div style={{zIndex: "1", marginTop: 0, marginBottom: 80}}>
            <SubKacheln></SubKacheln>
        </div>
  </Container>
  );
}

export default Home;