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
  
            <h1 style={{color: "white"}} data-testid="headline">Scooter analysis Project</h1>
            <Carousel>
              <Carousel.Item>
                <h2 style={{color: "white"}}>Analysis tools</h2>
                <h5 style={{color: "white"}}>
                  Geo Heatmaps
                </h5>
                <h5 style={{color: "white"}}>
                  Dynamic Dashboards
                </h5>
                <h5 style={{color: "white"}}>
                  Location Maps
                </h5>
                <h5 style={{color: "white"}}>
                  Barcharts
                </h5>
                <h5 style={{color: "white"}}>
                  Graphs
                </h5>
                <h5 style={{color: "white"}}>
                  Areacharts
                </h5>
                <h5 style={{color: "white"}}>
                  Heatmap Tables
                </h5>
                <h5 style={{color: "white"}}>
                  Piecharts
                </h5>
                <h5 style={{color: "white"}}>
                  Descriptive Manual queries
                </h5>
              </Carousel.Item>
              <Carousel.Item>
                <h2 style={{color: "white"}}>Goal of the Project</h2>
                <h5 style={{color: "white"}}>
                  The goal of the project is to create a webbapplication that offers the necessary tools to analyse a dataset of
                  roughly 600.000 e-Scooter strips in Berlin. The dataset contains trips in the time period of september 2019 until october 2020. 
                  The dataset shows trips of 10.724 different e-Scooters. 
                  This website offers the necessary tools that are needed, to get a first visual overview over the dataset and furthemore offers necessary queries
                  to adjust the graphs and bars to retrieve the needed insides over the data.
                </h5>
              </Carousel.Item>
            </Carousel>
          </div>
  
        </div>
      </>
    );
}

export default HomeBanner;