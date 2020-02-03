import React from 'react';
import L from 'leaflet';
import { Map as LeafletMap, GeoJSON, TileLayer, Marker, Popup } from 'react-leaflet';
import Control from 'react-leaflet-control';
import bivakzones from './bivakzones.json';

import PopupCard from './PopupCard';
import { Link } from 'react-router-dom';
import Filter from './Header/Filter';


const myIcon = L.icon({
  iconUrl: 'https://image.flaticon.com/icons/svg/1271/1271831.svg',
  iconSize: [45, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [11, -41],
});

class Map extends React.Component {
  //defining state to keep track of the location

  constructor(props) {
    super(props);
    this.state = {
      location: { lat: 51, lng: 5 },
      haveLocationOfUser: false,
      zoom: 3,
      allowance: false,
      showLocation: false,
      showButton: false,
      bivakzones: props.bivakzones,
    };
    console.log(this.state.bivakzones);
  }

  currentLocation = () => {
    return navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          location: { lat: position.coords.latitude, lng: position.coords.longitude },
          haveLocationOfUser: true, //when it finds the location of the user, then it sets the state' haveLocationOfUser value as true
          zoom: 11,
        });
      },
      () => {
        this.setState({
          location: { lat: 50.85, lng: 4.48 },
          haveLocationOfUser: false, //making it false not to show the marker if user doesn't want his location to be used
          zoom: 10,
          allowance: false,
        });
      },
    );
  };

  componentDidMount() {
    if (!this.state.showLocation) {
      this.setState({
        location: { lat: 50.6, lng: 4.41 },
        haveLocationOfUser: false, //making it false not to show the marker if user doesn't want his location to be used
        zoom: 10,
        allowance: false,
      });
    }
  }
  showBivakzones = a => {
    this.setState({
      bivakzones: a,
    });
  };

  render() {
    const position = [this.state.location.lat, this.state.location.lng];
    return (
      
      <>
        <Filter callBack={this.showBivakzones}></Filter>
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
          {this.state.bivakzones.map(bivak => {
            if (bivak.geometry.type === 'Polygon') {
              const firstCoordinate = bivak.geometry.coordinates[0].map(a => a[0]);
              const x = firstCoordinate.reduce((c, d) => c + d, 0) / firstCoordinate.length;


              const secondCoordinate = bivak.geometry.coordinates[0].map(a => a[1]);
              const y = secondCoordinate.reduce((c, d) => c + d, 0) / secondCoordinate.length;

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
          <Control key={this.state.showLocation} position="topright">
          {/* Control is used to control a component's position on map */}
          <button
            onClick={() => {
              this.setState({ showLocation: true });
              this.currentLocation();
                               
            }}
          >
            Show my location
          </button>
        </Control>
        </LeafletMap>
      </>
    );
  }
}

export default Map;
