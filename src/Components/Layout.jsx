import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Menu from './Menu';
import Map from '../Map';
import BivakMap from './BivakMap';
import Bivakzone from './Bivakzone';

const Layout =()=>{
    return(
        <Router>
            <Row>
                <Col lg={12}><Menu /> </Col>
            </Row>
            <Row>
            <Switch>
                <Route exact path="/">
                <Col lg={12} ><Map /></Col>
                </Route>
                <Route path={`/bivakzone/way/:id`} exact>
                    <Col lg={6} ><BivakMap /></Col>
                    <Col lg={6} ><Bivakzone  /></Col>
                </Route>
                <Route path={`/bivakzone/node/:id`} exact>
                    <Col lg={6} ><BivakMap /></Col>
                    <Col lg={6} ><Bivakzone  /></Col>
                </Route>
            </Switch>
            </Row>
        </Router>
  )
};

export default Layout;