import React from 'react';
import { Card } from 'react-bootstrap';

const PopupCard=({bivak})=>{
    return (
      <Card>
        <Card.Body>
        <Card.Title>{bivak.properties.name}</Card.Title>
        <Card.Text>
          <ul>
            <li>operator:{bivak.properties.operator}</li>
            <li>openfire:{bivak.properties.openfire}</li>
            <li>opening_hours:{bivak.properties.opening_hours}</li>
            <li>reservation:{bivak.properties.reservation}</li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PopupCard;
