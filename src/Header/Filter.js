import React, { Component } from 'react';
import { Menu, Checkbox } from 'antd';

const { SubMenu } = Menu;
class Filter extends Component {
  handleClick = e => {
    console.log('click ', e);
  };

  render() {
    return (
      <Menu onClick={this.handleClick} mode="inline" className="icons">
        <SubMenu
          title={
            <span>
              <img src="/Icons/menu-icon.png" alt="menu icon" className="menubutton" />
            </span>
          }
        >
          <Menu.Item className="item">
            <span>
              <Checkbox onChange={this.onChange} className="checkbox">
                <span>
                  <img src="/Icons/bicycle.png" alt="bicycle icon" className="icon" />
                </span>
                Accesible by bike
              </Checkbox>
            </span>
          </Menu.Item>
          <Menu.Item className="item">
            <span>
              <Checkbox onChange={this.onChange}>
                <span>
                  <img src="/Icons/campfire.png" alt="campfire icon" className="icon" />
                </span>
                Fire
              </Checkbox>
            </span>
          </Menu.Item>
          <Menu.Item className="item">
            <span>
              <Checkbox onChange={this.onChange}>
                <span>
                  <img src="/Icons/noun_Water_2496699.png" alt="water icon" className="icon" />{' '}
                </span>
                Drinkable Water
              </Checkbox>
            </span>
          </Menu.Item>
          <Menu.Item className="item">
            <span>
              <Checkbox onChange={this.onChange}>
                <span>
                  <img src="/Icons/toilet.png" alt="toilet icon" className="icon" />
                </span>
                Toilet
              </Checkbox>
            </span>
          </Menu.Item>
          <Menu.Item className="item">
            <span>
              <Checkbox onChange={this.onChange}>
                <span>
                  <img src="/Icons/free.png" alt="no fee icon" className="icon" />
                </span>
                No Fee
              </Checkbox>
            </span>
          </Menu.Item>
          <Menu.Item className="item">
            <span>
              <Checkbox onChange={this.onChange}>
                <span>
                  <img src="/Icons/reservation.png" alt="reservation" className="icon" />
                </span>
                Reservation required
              </Checkbox>
            </span>
          </Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default Filter;
