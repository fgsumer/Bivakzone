import React, { Component } from 'react';
import { Menu, Checkbox } from 'antd';
import Bivakzones from '../../bivakzones.json';
import Controllers from '../../controllers/controllers';
import './Filter.css';
import { Col, Container, Row } from 'react-bootstrap';

const { SubMenu } = Menu;
let filtredBivs;

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bicycle: false,
      toilets: false,
      drinking_water: false,
      motor_vehicle: false,
      fee: false,
      openfire: false,
      dog: false,
      reservation: false,
    };
  }

  handleFilterClick = () => {
    filtredBivs = Controllers.filter(Bivakzones, this.state);
    this.props.callBack(filtredBivs);
  };

  handleOnChange = e => {
    this.setState({
      [e.target.id]: e.target.checked,
    });
    this.handleFilterClick();
  };

  render() {
    return (
      <Container>
        <Row>
          <Col lg={12}>
            <h3>Filters</h3>
            <ul className="item">
              <li>
                <Checkbox id="bicycle" onChange={this.handleOnChange}>
                  <span>
                    <img src="/Icons/bicycle.png" alt="bicycle icon" className="icon" />
                  </span>
                  Accesible by bike
                </Checkbox>
              </li>
              <li>
                <Checkbox id="openfire" onChange={this.handleOnChange}>
                  <span>
                    <img src="/Icons/campfire.png" alt="campfire icon" className="icon" />
                  </span>
                  Fire
                </Checkbox>
              </li>
              <li>
                <Checkbox id="drinking_water" onChange={this.handleOnChange}>
                  <span>
                    <img src="/Icons/drinking_water.png" alt="water icon" className="icon" />{' '}
                  </span>
                  Drinkable Water
                </Checkbox>
              </li>
              <li>
                <Checkbox id="toilets" onChange={this.handleOnChange}>
                  <span>
                    <img src="/Icons/toilet.png" alt="toilet icon" className="icon" />
                  </span>
                  Toilet
                </Checkbox>
              </li>
              <li>
                <Checkbox id="fee" onChange={this.handleOnChange}>
                  <span>
                    <img src="/Icons/free.png" alt="no fee icon" className="icon" />
                  </span>
                  No Fee
                </Checkbox>
              </li>
              <li>
                <Checkbox id="reservation" onChange={this.handleOnChange}>
                  <span>
                    <img src="/Icons/reservation.png" alt="reservation" className="icon" />
                  </span>
                  Reservation required
                </Checkbox>
              </li>
              <li>
                <Checkbox id="dog" onChange={this.handleOnChange}>
                  <span>
                    <img src="/Icons/dog.png" alt="reservation" className="icon" />
                  </span>
                  Dog is allowed
                </Checkbox>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Filter;
