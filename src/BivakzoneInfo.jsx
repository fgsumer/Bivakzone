/*
import React from 'react';
import { Map as LeafletMap, GeoJSON, Marker, Popup } from 'react-leaflet';
import bivakzones from './bivakzones.json';
import { Card, Button } from 'react-bootstrap';

import { connect } from 'react-redux';

const BivakzoneInfo = ({ bivakzone }) => {
  console.log(bivakzone);

  const marker = () => {
    if (props.map.point) {
      return <Marker position={props.map.point} />;
    }
  };

  const data = () => {
    if (this.props.map.data.length > 0) {
      const json = this.props.map.data;
      return <GeoJSON key={keyFunction(props.map.data.json)} data={props.map.data.json} />;
    }
  };

  return (
    <div className="my-map">
      <div className="my-map__map-container">
        <Map center={props.map.center} zoom={13} onClick={mapClick.bind(this)}>
          <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {marker()}
          {data()}
        </Map>
      </div>
      <div className="my-map__debug">{JSON.stringify(this.props.map)}</div>
    </div>
  );

  return (
    <Card>
      <Card.Img className="image" variant="top" src={`${bivakzone.properties.image}`} />
      <Card.Body>
        <Card.Title>{bivakzone.properties.name}</Card.Title>
        <Card.Text>
          <ul>
            <li>operator:{bivakzone.properties.operator}</li>
            <li>openfire:{bivakzone.properties.openfire}</li>
            <li>opening_hours:{bivakzone.properties.opening_hours}</li>
            <li>reservation:{bivakzone.properties.reservation}</li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BivakzoneInfo;
*/
