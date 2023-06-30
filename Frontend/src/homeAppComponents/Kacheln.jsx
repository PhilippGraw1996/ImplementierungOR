import React from 'react';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";

import left from "../Images/Analyse_Bild_Links.jpg";
import middle from "../Images/Analyse_Bild_Mitte.jpg";
import right from "../Images/Analyse_Bild_rechts.jpg";

const AnalysisTool = () => {

  const renderArray = [
    {
      "shortText": "Die Heatmap dient der Analyse von häufig frequentierten Gebieten in Hannover.",
      "cardHeading": "Heatmap",
      "index": 1,
      "image": left,
      "DetailPageLink": "/heatmapCrossTab"
    }, {
      "shortText": "Die Dashboardfunktion stellt dynamische Analysen häufig genutzter Kennzahlen von E-Scootern zur Verfügung.",
      "cardHeading": "Linien Diagramm",
      "index": 2,
      "image": middle,
      "DetailPageLink": "/lineChart"
    }, {
      "shortText": "Die Standort Analyse bietet die Möglichkeit häufig frequentiert Abstellplätze und stark frequentierte Routen ausfindig zu machen.",
      "cardHeading": "Standort Analyse",
      "index": 3,
      "image": right,
      "DetailPageLink": "/standort"
    }

  ]

  return (
    <>
      <div className={"classes.card"}>
        <Row xs={1} sm={2} md={3} lg={3} className="p-2 g-5" >
          {renderArray.map((offering, index) => (
            <Col key={`Offer-${index}`}>
              <div>
                <div className={"classes.card__front"}>
                <Link to={offering.DetailPageLink} className={"classes.card__title"} style={{color: "black", textDecoration: "none"}}>
                  <Card style={{ height: '28rem'}} >
                    <Card.Img style={{height: '18rem', overflow: "hidden"}} variant="top" src={offering.image}/>
                    <Card.Body>
                      <Link to={offering.DetailPageLink} className={"classes.card__title"} style={{color: "black", textDecoration: "none"}}>
                        <Card.Title className={"classes.card__title"} >
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


export default AnalysisTool;