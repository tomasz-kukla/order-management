import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react'

import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

import { Label, Field } from '../../utils/Theme';
import { Container, Col, Button } from 'react-bootstrap';


export const HomePage = (props) => {



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
                                class="btn btn-danger"
                            >
                                Edit
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
                            <a
                                href={'/'}
                                class="btn btn-danger"
                            >
                                Edit
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
                            <a
                                href={'/'}
                                class="btn btn-danger"
                            >
                                Edit
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

