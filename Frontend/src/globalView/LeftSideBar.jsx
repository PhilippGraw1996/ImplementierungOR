import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {useState} from 'react';
import {observer} from "mobx-react";

import {Form} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import PageContent from "../routingService/PageContent";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

import {useStore} from "../stores/querieStore";

import "./LeftSideBar.css"

const LeftSideBar = () => {

    const {myDateStore} = useStore();

    const [startDate, setStartDate] = useState(new Date("2019-01-01"));
    const [endDate, setEndDate] = useState(new Date("2021-12-31"));

    const handleSubmit = (e) => {
        e.preventDefault();
        myDateStore.startDate = startDate;
        myDateStore.endDate = endDate;

        console.log(`This is the START: ${myDateStore.startDate}`)
        console.log(`This is the END: ${myDateStore.endDate}`)
    }

    return(
        <div className='container-fluid'>
            <div className="row">
                <div className='col-auto min-vh-100 bg-dark' style={{marginTop: 60, position: "fixed", color: "white"}}>
                    <ul>
                        <li>
                            <h3>Main Menu</h3>
                        </li>
                        <li>
                            <a className='nav-link px-2' href='/'>
                                <i className='bi-house' /> <span className='ms-1 d-none d-sm-inline'>Home</span>
                            </a>
                        </li>
                        <li>
                            <a className='nav-link px-2' href='/dashboard'>
                                <i className='bi-speedometer' /> <span className='ms-1 d-none d-sm-inline'>Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a className='nav-link px-2' href='/querie'>
                                <i className="bi bi-search" /> <span className='ms-1 d-none d-sm-inline'>Descriptive queries</span>
                            </a>
                        </li>
                        <hr></hr>

                        <li>
                            <h3>Detailed analysis</h3>
                        </li>
                        <h5>Graphs & Charts</h5>
                        <li>
                            <a className='nav-link px-2' href='/barChartHorizontal'>
                                <i className="bi bi-bar-chart-line" /> <span className='ms-1 d-none d-sm-inline'>Barchart horizontal</span>
                            </a>
                        </li>
                        <li>
                            <a className='nav-link px-2' href='/barChartUp'>
                                <i className="bi bi-bar-chart-line" /> <span className='ms-1 d-none d-sm-inline'>Barchart</span>
                            </a>
                        </li>
                        <li>
                            <a className='nav-link px-2' href='/boxplot'>
                                <i className='bi bi-align-middle' /> <span className='ms-1 d-none d-sm-inline'>Boxplot</span>
                            </a>
                        </li>

                        <hr></hr>
                        <h5>Location Maps </h5>
                        <li>
                            <a className='nav-link px-2' href='/pieChart'>
                                <i className='bi-table' /> <span className='ms-1 d-none d-sm-inline'>Piechart</span>
                            </a>
                        </li>
                        <li>
                            <a className='nav-link px-2' href='/lineChart'>
                                <i className="bi bi-graph-up" /> <span className='ms-1 d-none d-sm-inline'>Diagram</span>
                            </a>
                        </li>
                        <li>
                            <a className='nav-link px-2' href='/locationMap'>
                                <i className="bi bi-geo" /> <span className='ms-1 d-none d-sm-inline'>Location's</span>
                            </a>
                        </li>

                        <hr></hr>
                        <h5>Scatterplots & Tables</h5>
                        <li>
                            <a className='nav-link px-2' href='/akkordDiagramm'>
                                <i className='bi-house' /> <span className='ms-1 d-none d-sm-inline'>Akkord Diagramm???</span>
                            </a>
                        </li>
                        <li>
                            <a className='nav-link px-2' href='/flussDiagram'>
                                <i className='bi-speedometer' /> <span className='ms-1 d-none d-sm-inline'>Fluss Karte???</span>
                            </a>
                        </li>
                        <li>
                            <a className='nav-link px-2' href='/parallelLines'>
                                <i className='bi bi-graph-down' /> <span className='ms-1 d-none d-sm-inline'>Parallel Diagramm???</span>
                            </a>
                        </li>

                        <hr></hr>
                        <h5>Descriptive Statistics</h5>
                        <li>
                            <a className='nav-link px-2' href='/heatmapCrossTab'>
                                <i className="bi bi-grid-3x3" /> <span className='ms-1 d-none d-sm-inline'>Heatmap table</span>
                            </a>
                        </li>
                        <li>
                            <a className='nav-link px-2' href='/heatmapLocation'>
                                <i className='bi-map' /> <span className='ms-1 d-none d-sm-inline'>Heatmap</span>
                            </a>
                        </li>
                        <li>
                            <a className='nav-link px-2' href='/areaDiagram'>
                                <i className='bi-house' /> <span className='ms-1 d-none d-sm-inline'>Area diagram</span>
                            </a>
                        </li>

                        <hr></hr>

                        <li>
                            <a className='nav-link px-2' href='/scatterPlots'>
                                <i className='bi bi-graph-down' /> <span className='ms-1 d-none d-sm-inline'>Scatterplots</span>
                            </a>
                        </li>

                        <li>
                            <a className='nav-link px-2' href='/descriptiveTables'>
                                <i className='bi bi-graph-down' /> <span className='ms-1 d-none d-sm-inline'>Descriptive tables</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='col'>
                    <PageContent></PageContent>
                </div>
            </div>
        </div>
    );
}

export default observer(LeftSideBar);



/*
<h3>Timespan</h3>
<Form onSubmit={handleSubmit}>
    <li>
        <i className='bi-calendar' /> <span className='ms-1 d-none d-sm-inline'>Start Date</span>
    </li>
    <li style={{marginTop: 3}}>
        <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="Choose Start Date!"
        />
    </li>
    <li style={{marginTop: 15}}>
        <i className='bi-calendar' /> <span className='ms-1 d-none d-sm-inline'>End Date</span>
    </li>
    <li style={{marginTop: 3}}>
        <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            placeholderText="Choose End Date!"
        />
    </li>
    <Button onSubmit={handleSubmit} type="submit" style={{backgroundColor: "#26D477", borderColor: "#26D477", marginTop: 15, marginLeft: 15}}>
        Submit Dates
    </Button>
</Form>
<hr></hr>

*/