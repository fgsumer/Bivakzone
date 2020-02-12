import React from 'react';
import {Translate} from 'react-localize-redux';
import { Container, Table, Card, ListGroup } from 'react-bootstrap';

const BivakDetails=({bivak})=>{
    
    let {openfire, bicycle, fee,dog, drinking_water, reservation, opening_hours, maxstay,maxtents, toilets} = bivak.properties;
    return (
      <Container>
        <Card style={{ width: '100%' }}>
          <Table striped bordered hover>
              <tbody>
                <tr>
                  <td>Accessible by Bicycle?</td>
                  <td>{bicycle}</td>
                </tr>
                <tr>
                  <td>Is Camp-fire Allowed? </td>
                  <td>{openfire}</td>
                </tr>
                <tr>
                  <td>Is there a toilet ?</td>
                  <td>{toilets}</td>
                </tr>
                <tr>
                  <td>Is there drinkable water? </td>
                  <td>{drinking_water}</td>
                </tr>
                <tr>
                  <td>Should I have to pay?</td>
                  <td>{fee}</td>
                </tr>
                <tr>
                  <td>Is reservation Required? </td>
                  <td>{reservation}</td>
                </tr>
                <tr>
                  <td>Is it dog allowed ?</td>
                  <td>{dog}</td>
                </tr>
                <tr>
                  <td>Opening Hours</td>
                  <td>{opening_hours}</td>
                </tr>
                <tr>
                  <td>Maximum Stay</td>
                  <td>{maxstay}</td>
                </tr>
                <tr>
                  <td>Maximum Tent</td>
                  <td>{maxtents}</td>
                </tr>
              </tbody>
            </Table>
        </Card>
    </Container>
    )  
};

export default BivakDetails;