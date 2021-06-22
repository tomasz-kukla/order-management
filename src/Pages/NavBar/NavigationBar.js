import styled from 'styled-components'

import React, { Component } from "react";

import { Navbar, Nav, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export const NavigationBar = () => {

    return (
        <Navbar bg="dark justify-content-center" variant="dark">
            <Navbar.Brand href="/">Kitchen Management</Navbar.Brand>
        </Navbar>
    );
};


const MyButton = styled(Button)`

`