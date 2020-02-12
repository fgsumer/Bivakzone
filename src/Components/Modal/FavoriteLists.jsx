import React from 'react';
import {Card, ListGroup, Col, Row} from 'react-bootstrap';

const FavoriteLists = ()=>{
    let favourites =JSON.parse(localStorage.getItem('favourites'));
     
    return(
        <Row className="mt-4">
            <Col md={{ span: 6, offset: 3 }}>
                <Card style={{ width: '30rem' }}>
                    <h2 className="center">Favorite Bivakzones</h2>
                    <ListGroup variant="flush">
                        {favourites? favourites.map((fav)=>(
                            <ListGroup.Item action href={`/home/${fav.id}`}>
                              {fav.properties.name}
                            </ListGroup.Item>
                        ))
                        : (
                        <ListGroup variant="flush">
                          Your Favorite list is Empty
                        </ListGroup>
                        )
                    }
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    )

};

export default FavoriteLists;