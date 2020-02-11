import React from 'react';
import {Translate} from 'react-localize-redux';
import { Container, Table, Card, ListGroup } from 'react-bootstrap';

const BivakDetails=({bivak})=>{
    if (bivak.geometry.type === 'Polygon') {
      const firstCoordinate = bivak.geometry.coordinates[0].map(a => a[0]);
      const x = firstCoordinate.reduce((c, d) => c + d, 0) / firstCoordinate.length;

      const secondCoordinate = bivak.geometry.coordinates[0].map(a => a[1]);
      const y = secondCoordinate.reduce((c, d) => c + d, 0) / secondCoordinate.length;
      
      bivak.geometry.type = 'Point';
      bivak.geometry.coordinates = [x, y];
    }
    let {openfire, bicycle, fee,dog, drinking_water, reservation, opening_hours, maxstay,operator, phone, name, toilets} = bivak.properties;

    // Object.keys(bivak.properties).forEach((key)=>{
    //   console.log(key)
    //   console.log(key)
    //   if(!key){
    //     key = 'no information'
    //   }
    // })
    return (
      <Container>
        <h4>{name}</h4>
       <p className="fas fa-map-marker-alt mr-2">:{bivak.geometry.coordinates[0]},{bivak.geometry.coordinates[1]}</p> 
        <Card style={{ width: '100%' }}>
          <Table striped bordered hover>
              <tbody>
                <tr>
                  <td>Accessible by <img src="/Icons/bicycle.png" alt="bicycle icon" className="icon" />?</td>
                  <td>{bicycle}</td>
                </tr>
                <tr>
                  <td>Is <img src="/Icons/campfire.png" alt="campfire icon" className="icon" /> Allowed? </td>
                  <td>{openfire}</td>
                </tr>
                <tr>
                  <td>Is there <img src="/Icons/toilet.png" alt="toilet icon" className="icon" /> ?</td>
                  <td>{toilets}</td>
                </tr>
                <tr>
                  <td>Is there drinkable <img src="/Icons/noun_Water_2496699.png" alt="water icon" className="icon" />? </td>
                  <td>{drinking_water}</td>
                </tr>
                <tr>
                  <td>Fee <img src="/Icons/free.png" alt="no fee icon" className="icon" /> ?</td>
                  <td>{fee}</td>
                </tr>
                <tr>
                  <td>Is <img src="/Icons/reservation.png" alt="reservation" className="icon" />Required? </td>
                  <td>{reservation}</td>
                </tr>
                <tr>
                  <td>Is <img src="/Icons/dog.png" alt="reservation" className="icon" /> allowed ?</td>
                  <td>{dog}</td>
                </tr>
                <tr>
                  <td>Opening Hours</td>
                  <td>{opening_hours}</td>
                </tr>
              </tbody>
            </Table>
        </Card>
    </Container>
    )
};

export default BivakDetails;