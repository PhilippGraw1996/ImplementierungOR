import React, { useState } from 'react';

import DashboardScene from './DashboardScene'
import DashboardScene2 from './DashboardScene2'
import DashboardScene3 from './DashboardScene3'
import DashboardScene4 from './DashboardScene4'
import {Row} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';


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
                        height: 100
                        }}>   <button type="submit"
                                      onClick={() => setFilter(1)}
                                    >First</button>
                    </Col>
                    <Col style={{marginTop: 0,
                        marginBottom: 0,
                        marginRight: 10,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 325,
                        height: 100
                        }}>   <button type="submit"
                                      onClick={() => setFilter(2)}
                                    >First</button>
                    </Col>
                    <Col style={{marginTop: 0,
                        marginBottom: 0,
                        marginRight: 10,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 325,
                        height: 100
                        }}>   <button type="submit"
                                      onClick={() => setFilter(3)}
                                    >First</button>
                    </Col>
                    <Col style={{marginTop: 0,
                        marginBottom: 0,
                        marginRight: 0,
                        borderWidth: 1,
                        borderColor: "#C8C8C8",
                        borderStyle: "solid",
                        borderRadius: 10,
                        width: 325,
                        height: 100
                        }}>   <button type="submit"
                                      onClick={() => setFilter(4)}
                                    >First</button>
                    </Col>
            </Row>
            </form>
        </Container>


        <div>
            {filter === 1 && <DashboardScene/>}
            {filter === 2 && <DashboardScene2/>}
            {filter === 3 && <DashboardScene3/>}
            {filter === 4 && <DashboardScene4/>}
        </div>
        </div>
    );
}

export default MainDashboardScene;