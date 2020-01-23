import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './Map';
import BivakMap from './BivakMap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="leaflet-container">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Map />
          </Route>
          <Route path="/page1" exact>
            <BivakMap />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
