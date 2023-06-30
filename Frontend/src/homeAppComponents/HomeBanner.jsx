import React from 'react';

import scooterVideo from '../Images/Scooter_City_Complex_Breit.mp4';

import Carousel from 'react-bootstrap/Carousel';

const HomeBanner = () => {
    return(
        <>
        <div style={{position: "relative", marginTop: "0px"}}>
          <div style={{ maxHeight: "400px"}}>
            <video
              style={{width: "100%"}}
              autoPlay loop muted playsInline
              unselectable={"on"}
              controls={false}
            >
              <source src={scooterVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
  
          <div style={{position: "absolute", top: "20px", left: "10%", right: "10%"}}>
  
            <h1 style={{color: "white"}} data-testid="headline">Scooter</h1>
            <Carousel>
              <Carousel.Item>
                <h2 style={{color: "white"}}>Analyse Tools</h2>
                <h5 style={{color: "white"}}>
                  Die Heatmap:
                </h5>
                <h5 style={{color: "white"}}>
                  Dynamische Dashboards:
                </h5>
                <h5 style={{color: "white"}}>
                  Standort Verfolgung:
                </h5>
              </Carousel.Item>
              <Carousel.Item>
                <h2 style={{color: "white"}}>Ziel des Projektes</h2>
                <h5 style={{color: "white"}}>
                  Das Ziel der Hausarbeit ist es, eine funktionsfähige WebPage für die Analyse der E-Scooter Daten von 
                  mobilen E-Scootern in und um Hannover bereitzustellen. Die Website umfasst verschiedene Analyse Tools: 
                  Heatmaps, Standortverfolgung, dynamische Dashboards.
                </h5>
              </Carousel.Item>
            </Carousel>
          </div>
  
        </div>
      </>
    );
}

export default HomeBanner;