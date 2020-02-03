import React from 'react';
import { Container} from 'react-bootstrap';
import {Translate} from 'react-localize-redux';

const BivakDetails=({bivak})=>{
    if (bivak.geometry.type === 'Polygon') {
      const firstCoordinate = bivak.geometry.coordinates[0].map(a => a[0]);
      const x = firstCoordinate.reduce((c, d) => c + d, 0) / firstCoordinate.length;

      const secondCoordinate = bivak.geometry.coordinates[0].map(a => a[1]);
      const y = secondCoordinate.reduce((c, d) => c + d, 0) / secondCoordinate.length;
      
      bivak.geometry.type = 'Point';
      bivak.geometry.coordinates = [x, y];
    }

    return (
      <Container>
        <h1>{bivak.properties.name}</h1>
        <ul>
           <li><Translate id="properties.operator">operator</Translate>:{bivak.properties.operator}</li>
            <li><Translate id="properties.fire">openfire</Translate>{bivak.properties.openfire}</li>
            <li>opening_hours:{bivak.properties.opening_hours}</li>
            <li>reservation:{bivak.properties.reservation}</li> 
            <li>location:{bivak.geometry.coordinates[0]},{bivak.geometry.coordinates[1]}</li>       
        </ul>
    </Container>
    )
};

export default BivakDetails;