import React from 'react';
import { Container} from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const BivakDetails=({bivak})=>{

    return (
      <Container>
        <h1>{bivak.properties.name}</h1>
        <ul>
           <li>operator:{bivak.properties.operator}</li>
            <li>openfire:{bivak.properties.openfire}</li>
            <li>opening_hours:{bivak.properties.opening_hours}</li>
            <li>reservation:{bivak.properties.reservation}</li> 
        </ul>
        <h1>BivakDetails</h1>
    </Container>
    )
};

export default BivakDetails;