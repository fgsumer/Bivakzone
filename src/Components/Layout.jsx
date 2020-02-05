import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from './Header/Menu';
import Map from './MainMap/Map';
import BivakMap from './Bivakzone/BivakMap';
import Bivakzone from './Bivakzone/Bivakzone';
import LanguageToggle from './languages/LanguageToggle';
import bivakzones from '../bivakzones.json'
import Single from './Bivakzone/Index'

const Layout =(props)=>{
 
    return(
        <Router>
            <Row>
                <Col lg={12}><Menu /> </Col>
            </Row>
            <Switch>
                <Route exact path="/" render= {(props)=><Map {...props} bivakzones={bivakzones.features}/>}/>
                <Route path={["/home/node/:bivakzoneId","/home/way/:bivakzoneId" ]} exact component = {Single} />
                
            </Switch>
        </Router>
  )
}

export default Layout;
