import React from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';

const FavoriteLists = () => {
  let favourites = JSON.parse(localStorage.getItem('favourites'));
  if (!favourites) {
    return (
      <Card style={{ width: '20rem' }}>
        <Card.Header>Favorite Bivakzones</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Your Favorite List is Empty</ListGroup.Item>
        </ListGroup>
      </Card>
    );
  }

  return (
    <Card style={{ width: '20rem' }}>
      <Card.Header>Favorite Bivakzones</Card.Header>
      <ListGroup variant="flush">
        {favourites.map(fav => (
          <ListGroup.Item action href={`/home/${fav.id}`}>
            {fav.properties.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default FavoriteLists;
