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
                  <td>Accessible by <b>Bicycle</b>?</td>
                  <td>{bicycle}</td>
                </tr>
                <tr>
                  <td>Is <b>Camp-fire</b> Allowed? </td>
                  <td>{openfire}</td>
                </tr>
                <tr>
                  <td>Is there a <b>toilet</b> ?</td>
                  <td>{toilets}</td>
                </tr>
                <tr>
                  <td>Is there <b>drinkable water </b>? </td>
                  <td>{drinking_water}</td>
                </tr>
                <tr>
                  <td>Should I have to <b>pay</b>?</td>
                  <td>{fee}</td>
                </tr>
                <tr>
                  <td>Is <b>reservation</b> Required? </td>
                  <td>{reservation}</td>
                </tr>
                <tr>
                  <td>Is it <b>dog</b> allowed ?</td>
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
