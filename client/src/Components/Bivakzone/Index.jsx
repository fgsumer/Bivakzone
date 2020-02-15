import React, { Component } from 'react';
import BivakMap from './BivakMap';
import Bivakzone from './Bivakzone';
import { Col } from 'react-bootstrap';

class Single extends Component {
  id = this.props.location.pathname
    .split('/')
    .slice(2)
    .slice(-5)
    .join('/');

  render() {
    return (
      <>
        <Bivakzone id={this.id} />
      </>
    );
  }
}

export default Single;
