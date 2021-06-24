import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react'

import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

import { Label, Field } from '../../utils/Theme';
import { Container, Col, Button } from 'react-bootstrap';


export const HomePage = (props) => {

    const [orders, setOrders] = useState([]);



    useEffect(() => {
        axios.get("http://127.0.0.1:8083/orders/")
            .then(res => {
                let result = res.data;
                setOrders(result);

            }
            )
            .catch(console.log)
    }, []);

    // if (orders.length)
    //     console.log("Orders: " + JSON.stringify(orders[0].orderPositionDTOList, null, 2));





    const filteredReady = orders.filter(x => x.status === "Przyjęto do realizacji");
    // console.log("Ready: " + JSON.stringify(filteredReady, null, 2));
    const filteredInProgress = orders.filter(x => x.status === "W trakcie realizacji");
    // console.log("Progress: " + JSON.stringify(filteredInProgress, null, 2));
    const filteredDone = orders.filter(x => x.status === "Do odbioru");


    const handleForward = (id, event) => {
        console.log({ id });

        axios.put("http://127.0.0.1:8083/order/forward/" + id + "/")
            .then(res => {
                console.log(res.data)
            })
            .catch(console.log)

    }

    const handleBackward = (id, event) => {
        console.log({ id });

        axios.put("http://127.0.0.1:8083/order/backward/" + id + "/")
            .then(res => {
                console.log(res.data)
            })
            .catch(console.log)

    }




    return (
        <Container className="container">
            <div className="row">
                <div className="col justify-content-center">
                    <H1>Przyjęto do realizacji</H1>

                    {filteredReady.map((ready, index) => {
                        console.log("ID: " + ready.id);
                        return (
                            <Div className="card text-center border-danger mb-3" styles={`width: 20rem`}>
                                <div className="card-header">
                                    <h5 className="card-title" key={ready.id}>
                                        {ready.status}</h5>
                                </div>
                                <div className="card-body" key={ready.id}>
                                    <t className="card-text" >
                                        <b>Numer stolika: </b>{ready.tableNo}</t>
                                    <br />
                                    <hr />
                                    <h5 className="card-text" key={ready.id}>
                                        {ready.orderPositionDTOList.map((dishes, index) => (
                                            <div key={dishes.id}>
                                                <h5>Do przygotowania: {dishes.dishDTO.name} x {dishes.quantity}</h5>

                                            </div>
                                        ))}
                                    </h5>
                                </div>

                                <div className="card-footer">


                                    <a
                                        onClick={(event) => handleForward(ready.id, event)}
                                        href="/"
                                        class="btn btn-success"
                                    >
                                        Zaktualizuj status
                                    </a>
                                </div>
                            </Div>

                        )
                    })
                    }


                </div>
                <div className="col">
                    <H1>W trakcie realizacji</H1>
                    {filteredInProgress.map((ready, index) => (
                        <Div className="card text-center border-danger mb-3" styles={`width: 20rem`}>
                            <div className="card-header">
                                <h5 className="card-title" key={ready.id}>
                                    {ready.status}</h5>
                            </div>
                            <div className="card-body" key={ready.id}>
                                <t className="card-text" >
                                    <b>Numer stolika: </b>{ready.tableNo}</t>
                                <br />
                                <hr />
                                <h5 className="card-text" key={ready.id}>
                                    {ready.orderPositionDTOList.map((dishes, index) => (
                                        <div key={dishes.id}>
                                            <h5>Do przygotowania: {dishes.dishDTO.name} x {dishes.quantity}</h5>

                                        </div>
                                    ))}
                                </h5>
                            </div>

                            <div className="card-footer">
                                <a href={'/'} class="btn btn-danger" onClick={(event) => handleBackward(ready.id, event)}>
                                    Cofnij status
                                </a>
                                <br />
                                <a href={'/'} class="btn btn-success" onClick={(event) => handleForward(ready.id, event)}>
                                    Zaktualizuj status
                                </a>
                            </div>
                        </Div>

                    ))
                    }

                </div>
                <div className="col">
                    <H1>Do odbioru</H1>
                    {filteredDone.map((ready, index) => (
                        <Div className="card text-center border-danger mb-3" styles={`width: 20rem`}>
                            <div className="card-header">
                                <h5 className="card-title" key={ready.id}>
                                    {ready.status}</h5>
                            </div>

                            <div className="card-body" key={ready.id}>
                                <t className="card-text" >
                                    <b>Numer stolika: </b>{ready.tableNo}</t>

                                <br />
                                <hr />

                                <h5 className="card-text" key={ready.id}>
                                    {ready.orderPositionDTOList.map((dishes, index) => (
                                        <div key={dishes.id}>
                                            <h5>Do przygotowania: {dishes.dishDTO.name} x {dishes.quantity}</h5>

                                        </div>
                                    ))}
                                </h5>
                            </div>

                            <div className="card-footer">
                                <a href={'/'} class="btn btn-danger" onClick={(event) => handleBackward(ready.id, event)}>
                                    Cofnij status
                                </a>
                                <br />
                                <a href={'/'} class="btn btn-success" onClick={handleForward(ready.id)}>
                                    Zaktualizuj status
                                </a>
                            </div>
                        </Div>

                    ))
                    }


                </div>

            </div >
        </Container >
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

