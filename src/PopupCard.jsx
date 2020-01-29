import React from 'react';
import { Card, Button } from 'react-bootstrap';

const PopupCard=({bivakzone})=>{
    return (
      <Card>
        <Card.Img className="image" variant="top" src={`${bivakzone.properties.image}`} />
        <Card.Body>
        <Card.Title>{bivakzone.properties.name}</Card.Title>
        <Card.Text>
            <ul>
                <li>operator:{bivakzone.properties.operator}</li>
                <li>openfire:{bivakzone.properties.openfire}</li>
                <li>opening_hours:{bivakzone.properties.opening_hours}</li>
                <li>reservation:{bivakzone.properties.reservation}</li>
            </ul>
        </Card.Text>
        </Card.Body>
    </Card>
    )
};

export default PopupCard;
