import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Layout from './Components/Layout';

function App() {
  return (
    <div>
      <Layout />
    </div>
  );
}

export default App;
