import React from 'react';
import './App.css';
import Map from './Map';
import BivakzoneModal from './components/BivakzoneModal';
import Routes from './routes/routes'
import 'bootstrap/dist/css/bootstrap.min.css';
import showModalContextProvider from './utils/Context'

function App() {
  return (
    <div>
     
      <Routes/>
    
    </div>
  );
}

export default App;
