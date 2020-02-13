import React, { Component } from 'react';
import { Menu, Checkbox } from 'antd';
import Bivakzones from '../../bivakzones.json';
import Controllers from '../../controllers/controllers';
import './Filter.css';
import { Col, Container, Row, Button } from 'react-bootstrap';
import {Translate} from 'react-localize-redux';

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
  };

  render() {
    return (
      <Container className="filterField">
        <Row>
          <ul className="listItem">
            <li className="item">
              <Checkbox id="bicycle" onChange={this.handleOnChange}>
                <acronym title="accessibility by bike">
                  <span>
                    <img src="/Icons/bicycle.png" alt="bicycle icon" className="icon" />
                  </span>
                </acronym>
              </Checkbox>
            </li>
            <li className="item">
              <Checkbox id="openfire" onChange={this.handleOnChange}>
                <acronym title="campfires allowed">
                  <span>
                    <img src="/Icons/campfire.png" alt="campfire icon" className="icon" />
                  </span>
                </acronym>
              </Checkbox>
            </li>
            <li className="item">
              <Checkbox id="drinking_water" onChange={this.handleOnChange}>
                <acronym title="drinkable Water">
                  <span>
                    <img src="/Icons/drinking_water.png" alt="water icon" className="icon" />{' '}
                  </span>
                </acronym>
              </Checkbox>
            </li>
            <li className="item">
              <Checkbox id="toilets" onChange={this.handleOnChange}>
                <acronym title="toilet">
                  <span>
                    <img src="/Icons/toilet.png" alt="toilet icon" className="icon" />
                  </span>
                </acronym>
              </Checkbox>
            </li>
            <li className="item">
              <Checkbox id="reservation" onChange={this.handleOnChange}>
                <acronym title="reservation required">
                  <span>
                    <img src="/Icons/reservation.png" alt="reservation" className="icon" />
                  </span>
                </acronym>
              </Checkbox>
            </li>
            <li className="item">
              <Checkbox id="fee" onChange={this.handleOnChange}>
                <acronym title="fee">
                  <span>
                    <img src="/Icons/fee.png" alt="no fee icon" className="icon" />
                  </span>
                </acronym>
              </Checkbox>
            </li>

            <li className="item">
              <Checkbox id="dog" onChange={this.handleOnChange}>
                <acronym title="dog is allowed">
                  <span>
                    <img src="/Icons/dog.png" alt="reservation" className="icon" />
                  </span>
                </acronym>
              </Checkbox>
            </li>
            <li className="item ">
              <Button onClick={this.handleFilterClick} className="listButton">
               <Translate id="menu.filter">Filter</Translate>
              </Button>
            </li>
          </ul>
        </Row>
      </Container>
    );
  }
}

export default Filter;
