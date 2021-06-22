import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import styled from "styled-components";

import { Theme } from './utils/Theme'
import { NavigationBar } from "./Pages/NavBar/NavigationBar";
import { HomePage } from "./Pages/Home/HomePage";

const Root = styled.div`
  overflow-x: hidden;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  background: ${props => Theme.bgPrimary};
`;

ReactDOM.render(
  <Router>
    <Root>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Root>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
