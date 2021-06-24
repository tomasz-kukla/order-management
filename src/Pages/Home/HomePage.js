import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react'

import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

import { Label, Field } from '../../utils/Theme';
import { Container, Col, Button } from 'react-bootstrap';


export const HomePage = (props) => {

    var cors = require('cors');

    const [orders, setOrders] = useState([]);


    useEffect(() => {
        axios.get("http://127.0.0.1:8083/orders/")
            .then(res => console.log(res.data),
            
            )
            .catch(console.log)
    }, []);

    const filteredReady = orders.filter(x => x.status === "Przyjęto do realizacji");
    const filteredInProgress = orders.filter(x => x.status === "W trakcie realizacji");
    const filteredDone = orders.filter(x => x.status === "Do odbioru");



    // const handleForward = () => {
    //     console.log(data)

    //     axios.post("http://127.0.0.1:8083/, {
    //         category: data.category,
    //         origin: data.origin,
    //         established: data.established,
    //     })
    //         .then(res => {
    //             console.log(res.data)
    //         })
    // .catch(console.log)

    // }

    // const handleBackward = () => {
    //     console.log(data)

    //     axios.post("http://127.0.0.1:8083//", {
    //         name: data.name,
    //         category: data.category,
    //         origin: data.origin,
    //         established: data.established,
    //     })
    //         .then(res => {
    //             console.log(res.data)
    //         })
    //         .catch(console.log)
    // }







    return (
        <Container className="container">
            <div className="row">
                <div className="col justify-content-center">
                    <H1>Przyjęto do realizacji</H1>

                    <Div className="card text-center border-success mb-3" styles={`width: 20rem`}>
                        <div className="card-header">
                            <h5 className="card-title">
                                Title</h5>
                        </div>

                        <div className="card-body">
                            <t className="card-text" >
                                text</t>
                            <br />
                            <t className="card-text" > Text</t>
                            <br />
                            <h4 className="card-text">
                                <b> Text</b></h4>
                        </div>

                        <div className="card-footer">
                            <a
                                href={'/'}
                                class="btn btn-success"
                            >
                                Zaktualizuj status
                            </a>
                        </div>
                    </Div>


                </div>
                <div className="col">
                    <H1>W trakcie realizacji</H1>
                    <Div className="card text-center border-info  mb-3" styles={`width: 20rem`}>
                        <div className="card-header">
                            <h5 className="card-title">
                                Title</h5>
                        </div>

                        <div className="card-body">
                            <t className="card-text" >
                                text</t>
                            <br />
                            <t className="card-text" > Text</t>
                            <br />
                            <h4 className="card-text">
                                <b> Text</b></h4>
                        </div>

                        <div className="card-footer">
                            <a href={'/'} class="btn btn-danger">
                                Cofnij status
                            </a>
                            <a>     </a>
                            <a href={'/'} class="btn btn-success">
                                Zaktualizuj status
                            </a>
                        </div>
                    </Div>



                </div>
                <div className="col">
                    <H1>Do odbioru</H1>
                    <Div className="card text-center border-danger mb-3" styles={`width: 20rem`}>
                        <div className="card-header">
                            <h5 className="card-title">
                                Title</h5>
                        </div>

                        <div className="card-body">
                            <t className="card-text" >
                                text</t>
                            <br />
                            <t className="card-text" > Text</t>
                            <br />
                            <h4 className="card-text">
                                <b> Text</b></h4>
                        </div>

                        <div className="card-footer">
                            <a href={'/'} class="btn btn-danger">
                                Cofnij status
                            </a>
                            <a>     </a>
                            <a href={'/'} class="btn btn-success">
                                Zaktualizuj status
                            </a>
                        </div>
                    </Div>



                </div>
            </div>
        </Container>
    );

};

const Sect = styled.div`
    margin: auto;
    margin-top: 70px !important;
    height: 100vh;
    
`
const Cols = styled.div`
    text-align: center;
    
`

const Div = styled.div`
    margin-top: 30px;
    
`
const H1 = styled.div`
text-align: center;
text-decoration: solid;
margin-top: 10px;
justify-content: center;
font-size: 35px;



`

