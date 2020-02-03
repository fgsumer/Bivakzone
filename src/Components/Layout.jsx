import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from './Menu';
import Map from '../Map';
import BivakMap from './BivakMap';
import Bivakzone from './Bivakzone';
import LanguageToggle from './LanguageToggle';
import bivakzones from '../bivakzones.json'

const Layout =(props)=>{
 
    return(
        <Router>
            <Row>
                <Col lg={12}><Menu /> </Col>
            </Row>
            <Switch>
                <Route exact path="/" render= {(props)=><Map {...props} bivakzones={bivakzones.features}/>}/>
                
                <Route path={`/bivakzone/way/:id`} exact>
                    <Col lg={6} ><BivakMap /></Col>
                    <Col lg={6} ><Bivakzone  /></Col>
                </Route>
                <Route path={`/bivakzone/node/:id`} exact>
                    <Col lg={6} ><BivakMap /></Col>
                    <Col lg={6} ><Bivakzone  /></Col>
                </Route>
            </Switch>
        </Router>
  )
}

export default Layout;
