import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from './Menu';
import Map from '../Map';
import BivakMap from './BivakMap';
import Bivakzone from './Bivakzone';
import { useParams } from 'react-router-dom';
import bivakzones from '../bivakzones.json';

const Layout = () => {
  const node = `node`;
  const way = `way`;
  return (
    <Router>
      <Row>
        <Col lg={12}>
          <Menu />
        </Col>
      </Row>
      <Row>
        <Switch>
          <Route exact path="/home">
            <Col lg={12}>
              <Map bivakzones={bivakzones.features} />
            </Col>
          </Route>
          <Route path={`/bivakzone/way/:id`} exact>
            <Col lg={6}>
              <BivakMap />
            </Col>
            <Col lg={6}>
              <Bivakzone />
            </Col>
          </Route>
          <Route path={`/bivakzone/node/:id`} exact>
            <Col lg={6}>
              <BivakMap />
            </Col>
            <Col lg={6}>
              <Bivakzone />
            </Col>
          </Route>
        </Switch>
      </Row>
    </Router>
  );
};

export default Layout;
