import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";

import Footer from "./globalView/Footer";
import Header from './globalView/Header';
import LeftSideBar from "./globalView/LeftSideBar";



function App() {
  return (
    // BrowserRouter enables dynamic page content based on the URL
    // Header, Footer and LeftSiedeBar as global components displayed on every page of the application
    <BrowserRouter>
      <div className="min-vh-100">
          <Header style={{zIndex: "100"}}></Header>
          <LeftSideBar style={{zIndex: "99"}}></LeftSideBar>
          <Footer style={{zIndex: "100"}}></Footer>     
      </div>
    </BrowserRouter>
  );
}

export default App;


