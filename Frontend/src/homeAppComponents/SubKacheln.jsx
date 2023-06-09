import React from 'react';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";

import pie from "../Images/PieChartFinal.jpg";
import bar from "../Images/BarChartFinal.jpg";
import line from "../Images/LinienDiagrammFinal.jpg";
import area from "../Images/AreaDaigrammFinal.jpg";
import heatMap from "../Images/HeatMapFinal.jpg";
import heatMapKarte from"../Images/HeatMapKarteFinal.jpg";
import standOrtKarte from "../Images/StandOrtKarteFinal.jpg";


const SubKacheln = () => {
    const renderArray = [
        {
            "shortText": "The Piecharts show the aggregated amount of trips by several Categories.",
            "cardHeading": "Piecharts",
            "index": 2,
            "image": pie,
            "DetailPageLink": "/pieChart"
        }, {
            "shortText": "The barcharts give a first sense of the distribution of the e-scooter metrics by different metrics.",
            "cardHeading": "Barcharts",
            "index": 3,
            "image": bar,
            "DetailPageLink": "/barChartUp"
        }, {
            "shortText": "The linegraph's show the (aggregated) amount of scooter trips over the time.",
            "cardHeading": "Graphs",
            "index": 4,
            "image": line,
            "DetailPageLink": "/lineChart"
        }, {
            "shortText": "The location map offers the possibility to analyse locations of the scooters.",
            "cardHeading": "Location Maps",
            "index": 5,
            "image": standOrtKarte,
            "DetailPageLink": "/locationMap"
        }, {
            "shortText": "The barcharts give a first sense of the distribution of the e-scooter metrics by different metrics.",
            "cardHeading": "Barcharts",
            "index": 8,
            "image": bar,
            "DetailPageLink": "/BarChartSceneHorizontal"
        }, {
            "shortText": "The heatmaps give a borad overview over the density of several metrics.",
            "cardHeading": "Heatmap tables",
            "index": 9,
            "image": heatMap,
            "DetailPageLink": "/heatmapCrossTab"
        }, {
            "shortText": "The geo heatmap gives an overview over the start and end locations of scooter Trips.",
            "cardHeading": "Geo Heatmap",
            "index": 10,
            "image": heatMapKarte,
            "DetailPageLink": "/heatmapLocation"
        }, {
            "shortText": "The areacharts show the amount of trips in dependency of the hour of the day.",
            "cardHeading": "Areacharts",
            "index": 11,
            "image": area,
            "DetailPageLink": "/areaDiagram"
        }, {
            "shortText": "The scatterplots show the data points along to dimensions.",
            "cardHeading": "Scatterplots",
            "index": 12,
            "image": area,
            "DetailPageLink": "/scatterPlots"
        }, {
            "shortText": "The descriptive tables give a first overview over the data.",
            "cardHeading": "Descriptive's",
            "index": 13,
            "image": area,
            "DetailPageLink": "/descriptiveTables"
        }
    ]

    return (
        <>
            <div className={"classes.card"}>
            <Row xs={1} sm={2} md={3} lg={4} className="p-2 g-5" >
                {renderArray.map((offering, index) => (
                <Col key={`Offer-${index}`}>
                    <div>
                        <div className={"classes.card__front"}>
                        <Link to={offering.DetailPageLink} className={"classes.card__title"} style={{color: "black", textDecoration: "none"}}>
                                <Card style={{ height: '28rem'}} >
                                <Card.Img style={{height: '18rem', overflow: "hidden"}} variant="top" src={offering.image}/>
                                <Card.Body>
                                    <Link to={offering.DetailPageLink} className={"classes.card__title"} style={{color: "black", textDecoration: "none"}}>
                                    <Card.Title className={"classes.card__title"}>
                                        <h2 style={{color: "black", textDecoration: "none"}}>{offering.cardHeading}</h2>
                                    </Card.Title>
                                    </Link>
                                    <Card.Text className={"classes.card__subtitle"}>{offering.shortText}</Card.Text>
                                </Card.Body>
                                </Card>
                        </Link>
                        </div>
                    </div>
                </Col>
                ))}
            </Row>
            </div>
        </>
    );

}

export default SubKacheln;



/**
 *         {
            "shortText": "Die Standort Analyse bietet die Möglichkeit häufig frequentiert Abstellplätze und stark frequentierte Routen ausfindig zu machen.",
            "cardHeading": "Boxplot",
            "index": 1,
            "image": boxplot,
            "DetailPageLink": "/boxPlot"
        }, 
        {
            "shortText": "Die Standort Analyse bietet die Möglichkeit häufig frequentiert Abstellplätze und stark frequentierte Routen ausfindig zu machen.",
            "cardHeading": "Akkord",
            "index": 6,
            "image": akkord,
            "DetailPageLink": "/akkordDiagramm"
        },     
        
         {
            "shortText": "Die Standort Analyse bietet die Möglichkeit häufig frequentiert Abstellplätze und stark frequentierte Routen ausfindig zu machen.",
            "cardHeading": "Fluss",
            "index": 7,
            "image": fluss,
            "DetailPageLink": "/flussDiagram"
        }, 

 */