import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from './Header/Menu';
import Map from './MainMap/Map';
import bivakzones from '../bivakzones.json';
import Single from './Bivakzone/Index';
import './Layout.css';

const Layout = props => {
  const [showFilter, setShowFilter] = useState();
  return (
    <Router>
      <Container className={'layout'} fluid={true}>
        <header className={'layout_header'}>
          <Row noGutters={true}>
            <Col lg={12}>
              <Menu setShowFilter={setShowFilter} showFilter={showFilter} />
            </Col>
          </Row>
        </header>
        <section className={'layout_body'}>
          <Row noGutters={true}>
            <Col lg={12}>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <Map
                      {...props}
                      bivakzones={bivakzones.features}
                      showFilter={showFilter}
                      setShowFilter={setShowFilter}
                    />
                  )}
                />
                <Route
                  path={['/home/node/:bivakzoneId', '/home/way/:bivakzoneId']}
                  exact
                  component={Single}
                />
              </Switch>
            </Col>
          </Row>
        </section>
      </Container>
    </Router>
  );
};

export default Layout;
