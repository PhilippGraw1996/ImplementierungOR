import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";

import Footer from "./globalView/Footer";
import Header from './globalView/Header';
import LeftSideBar from "./globalView/LeftSideBar";



function App() {
  return (
    <BrowserRouter>
      <div className="min-vh-100">
          <Header></Header>
          <LeftSideBar></LeftSideBar>
          <Footer></Footer>     
      </div>
    </BrowserRouter>
  );
}

export default App;
