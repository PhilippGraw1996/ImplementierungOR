import React, { useState } from 'react';

import DashboardScene from './DashboardScene'
import DashboardScene2 from './DashboardScene2'
import DashboardScene3 from './DashboardScene3'
import DashboardScene4 from './DashboardScene4'
import {Row} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';

import BackgroundImage from "../Images/DashBoard.jpg"

import Button from 'react-bootstrap/Button';


const MainDashboardScene = () => {

    const [filter, setFilter] = useState(1);

    const submitHandler = (e) => {
        e.preventDefault();
    }

    return(
        <div>
            <Container style={{marginTop: 100}}>
            <form onSubmit={submitHandler}>
            <Row style={{marginTop: 0,
                        marginBottom: 10,
                        width: 1320,
                        height: 100
                        }}>
                <Col style={{marginTop: 0,
                        marginBottom: 0,
                        marginRight: 10,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 325,
                        height: 100,
                        backgroundImage: BackgroundImage
                        }}>   <Button type="submit"
                                      onClick={() => setFilter(1)}
                                      style={{background: "#26D477",
                                      marginTop: "30px",
                                      borderColor: "#26D477",
                                      marginLeft: "85px"}}
                                    >Dashboard 1/4</Button>
                    </Col>
                    <Col style={{marginTop: 0,
                        marginBottom: 0,
                        marginRight: 10,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 325,
                        height: 100,
                        backgroundImage: BackgroundImage
                        }}>   <Button type="submit"
                                      onClick={() => setFilter(2)}
                                      style={{background: "#26D477",
                                              marginTop: "30px",
                                              borderColor: "#26D477",
                                              marginLeft: "85px"}}
                                    >Dashboard 2/4</Button>
                    </Col>
                    <Col style={{marginTop: 0,
                        marginBottom: 0,
                        marginRight: 10,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 325,
                        height: 100,
                        backgroundImage: BackgroundImage
                        }}>      
                                    <Button type="submit"
                                        onClick={() => setFilter(3)}
                                        style={{background: "#26D477",
                                              borderColor: "#26D477",
                                              align: "center",
                                              marginTop: "30px",
                                              marginLeft: "85px"
                                    }}

                                    >Dashboard 3/4</Button>
                    </Col>
                    <Col style={{marginTop: 0,
                        marginBottom: 0,
                        marginRight: 0,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 325,
                        height: 100,
                        backgroundImage: BackgroundImage
                        }}>   <Button type="submit"
                                      onClick={() => setFilter(4)}
                                      style={{background: "#26D477",
                                      borderColor: "#26D477",
                                      marginTop: "30px",
                                      marginLeft: "85px"}}
                                    >Dashboard 4/4</Button>
                    </Col>
            </Row>
            </form>
        </Container>


        <div>
            {filter === 1 && <DashboardScene filter={filter}/>}
            {filter === 2 && <DashboardScene4 filter={filter}/>}
            {filter === 3 && <DashboardScene3 filter={filter}/>}
            {filter === 4 && <DashboardScene2 filter={filter}/>}
        </div>
        </div>
    );
}

export default MainDashboardScene;