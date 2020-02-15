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
                  <td><Translate id="properties.bicycle">Accessible by Bicycle </Translate>?</td>
                  <td>{bicycle}</td>
                </tr>
                <tr>
                  <td> <Translate id="properties.fire">Is Camp-fire Allowed</Translate>? </td>
                  <td>{openfire}</td>
                </tr>
                <tr>
                  <td><Translate id="properties.toilet">Is there a toilet </Translate>?</td>
                  <td>{toilets}</td>
                </tr>
                <tr>
                  <td><Translate id="properties.water">Is there drinkable water</Translate> ? </td>
                  <td>{drinking_water}</td>
                </tr>
                <tr>
                  <td><Translate id="properties.fee">Should I have to pay</Translate>?</td>
                  <td>{fee}</td>
                </tr>
                <tr>
                  <td><Translate id="properties.reservation">Is reservation required</Translate>? </td>
                  <td>{reservation}</td>
                </tr>
                <tr>
                  <td><Translate id="properties.dog">Is dog allowed </Translate>?</td>
                  <td>{dog}</td>
                </tr>
                <tr>
                  <td><Translate id="properties.hours">Opening Hours</Translate></td>
                  <td>{opening_hours}</td>
                </tr>
                <tr>
                  <td><Translate id="properties.stay">Maximum Stay</Translate></td>
                  <td>{maxstay}</td>
                </tr>
                <tr>
                  <td><Translate id="properties.tent">Maximum Tent</Translate></td>
                  <td>{maxtents}</td>
                </tr>
              </tbody>
            </Table>
        </Card>
    </Container>
    )  
};

export default BivakDetails;
