import React from 'react';
import L from 'leaflet';
import { Map as LeafletMap, GeoJSON, TileLayer, Marker, Popup } from 'react-leaflet';
import bivakzones from './bivakzones.json';
import BivakMap from './PopupCard';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

var myIcon = L.icon({
  iconUrl: 'https://image.flaticon.com/icons/svg/1271/1271831.svg',
  iconSize: [45, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
});

class Map extends React.Component {
  //defining state to keep track of the location
  state = {
    location: { lat: 51, lng: 5 },
    haveLocationOfUser: false,
    zoom: 3,
    allowance: false,
    showButton: false,
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
          showButton: true,
        });
        confirmAlert({
          title: 'Do you allow your IP to be used for determining the location?',
          buttons: [
            {
              label: 'Yes',
              onClick: () => {
                fetch('https://ipapi.co/json/') //If navigator.geolocation can't get the user's location then we make a get req to this api to get the location
                  .then(res => res.json())
                  .then(location => {
                    //console.log(location);
                    this.setState({
                      location: { lat: 51, lng: 5 },
                      haveLocationOfUser: true,
                      zoom: 13,
                    });
                  });
              },
            },
            {
              label: 'No',
              onClick: () => {
                this.setState({
                  location: { lat: 50.85, lng: 4.48 },
                  haveLocationOfUser: false, //making it false not to show the marker if user doesn't want his location to be used
                  zoom: 10,
                  allowance: false,
                  showButton: false,
                });
              },
            },
          ],
        });
        /*const buttonStyle = {
          visibility() this.state.showButton ? 'visible' : 'hidden'  
            }
        <ButtonToolbar style={buttonStyle.visibility}>
          <p>Do you want to allow your ip to be used for location?</p>
          <Button
            variant="primary"
            onClick={e => {
              this.setState({ allowance: true, showButton: false });
            }}
          >
            Allow
          </Button>
          <Button
            variant="secondary"
            onClick={e => {
              this.setState({ allowance: false, showButton: false });
            }}
          >
            Don't Allow
          </Button>
        </ButtonToolbar>;
        */

        /*
        fetch('https://ipapi.co/json/') //If navigator.geolocation can't get the user's location then we make a get req to this api to get the location
          .then(res => res.json())
          .then(location => {
            //console.log(location);
            this.setState({
              location: { lat: location.latitude, lng: location.longitude },
              haveLocationOfUser: true,
              zoom: 13,
            });
          }); */
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
      >
        <TileLayer
          attribution='contributors & Icon made by <a href="https://www.flaticon.com/authors/phatplus" title="phatplus">
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
        {bivakzones.features.map(bivakzone => (
          <GeoJSON
            data={bivakzone}
            style={() => ({
              color: '#4a83ec',
              weight: 0.5,
              fillColor: '#1a1d62',
              fillOpacity: 1,
            })}
          >
            <Popup>
              <BivakMap bivakzone={bivakzone} />
              {/* <a href="/page1">{bivakzone.properties.name}</a> */}
            </Popup>
          </GeoJSON>
        ))}
      </LeafletMap>
    );
  }
}

export default Map;
