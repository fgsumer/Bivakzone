import React from 'react';
import L from 'leaflet';
import { Map as LeafletMap, GeoJSON, TileLayer, Marker, Popup } from 'react-leaflet';
import bivakzones from './bivakzones.json';
import PopupCard from './PopupCard';
import { Link } from 'react-router-dom';
import Filter from './filter';

var myIcon = L.icon({
  iconUrl: 'https://image.flaticon.com/icons/svg/1271/1271831.svg',
  iconSize: [45, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [11, -41],
});

class Map extends React.Component {
  //defining state to keep track of the location
  state = {
    location: { lat: 51, lng: 5 },
    haveLocationOfUser: false,
    zoom: 3,
    allowance: false,
    //showButton: false,
  };

  componentDidMount() {
    //setting state to get the user's current location from position
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          location: { lat: position.coords.latitude, lng: position.coords.longitude },
          haveLocationOfUser: true, //when it finds the location of the user, then it sets the state' haveLocationOfUser value as true
          zoom: 13,
        });
      },
      () => {
        console.log("Couldn't get the location from the browser");
        this.setState({
          //showButton: true,
          location: { lat: 50.85, lng: 4.48 },
          haveLocationOfUser: false, //making it false not to show the marker if user doesn't want his location to be used
          zoom: 10,
          allowance: false,
        });
      },
    );
  }

  render() {
    const position = [this.state.location.lat, this.state.location.lng];
    return (
      <LeafletMap
        className="map"
        center={position}
        zoom={this.state.zoom}
        maxZoom={19}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
        ref={map => (this.map = map)}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors & Icon made by <a href="https://www.flaticon.com/authors/phatplus" title="phatplus">
            phatplus</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {//Adjusting the marker if browser finds the location of the user to show marker, if not then not to show it
        this.state.haveLocationOfUser ? (
          <Marker position={position} icon={myIcon} className="markerIcon">
            <Popup>You are here</Popup>
          </Marker>
        ) : (
          ''
        )}
        {bivakzones.features.map(bivak => {
          if (bivak.geometry.type === 'Polygon') {
            const firstCoordinate = bivak.geometry.coordinates[0].map(a => a[0]);
            const x = firstCoordinate.reduce((c, d) => c + d, 0) / firstCoordinate.length;

            const secondCoordinate = bivak.geometry.coordinates[0].map(a => a[1]);
            const y = secondCoordinate.reduce((c, d) => c + d, 0) / secondCoordinate.length;

            console.log(x, y);
            bivak.geometry.type = 'Point';
            bivak.geometry.coordinates = [x, y];
          }
          return (
            <GeoJSON
              data={bivak}
              style={() => ({
                color: '#4a83ec',
                weight: 0.5,
                fillColor: '#1a1d62',
                fillOpacity: 1,
              })}
            >
              <Popup>
                {/* <PopupCard bivakzone={bivakzone} /> */}
                <Link to={`/bivakzone/${bivak.id}`}>{bivak.properties.name}</Link>
              </Popup>
            </GeoJSON>
          );
        })}
      </LeafletMap>
    );
  }
}

export default Map;
