import React from 'react';
import L from 'leaflet';
import {GeoJSON, Map as LeafletMap, Marker, Popup, TileLayer, ZoomControl} from 'react-leaflet';
import Control from 'react-leaflet-control';
import {Link} from 'react-router-dom';
import BivakZoneModal from '../Modal/BivakZoneModal';
import '../../App.css';
import './Map.css';
import {Icon} from 'antd'
import 'react-confirm-alert/src/react-confirm-alert.css';
import Controllers from '../../controllers/controllers.js'

const Leaflet = window.L;

const myIcon = L.icon({
    iconUrl: 'https://image.flaticon.com/icons/svg/1271/1271831.svg',
    iconSize: [45, 41],
    iconAnchor: [12.5, 41],
    popupAnchor: [11, -41],
});

class Map extends React.Component {
    constructor(props) {
        super(props);
        //defining state to keep track of the location
        this.state = {
            location: {lat: 51, lng: 5},
            haveLocationOfUser: false,
            zoom: 3,
            allowance: false,
            showLocation: false,
            showButton: false,
            bivakzones: props.bivakzones,
            showModal: false,
            bivakzone: null,
            markerPosition: {}
        };

    }

    // eslint-disable-next-line no-useless-constructor

    showModalFunc = modalState => {
        this.setState({
            showModal: modalState,
        });
    };

    handleOnClick = e => {
        const prevBivId = this.state.bivakzone;

        if (e.sourceTarget.feature === prevBivId) {
            this.setState({
                showModal: false,
                bivakzone: null
            })
        }
        else {
            this.setState({
                showModal: true,
                bivakzone: e.sourceTarget.feature,
            })
        }

        this.setState({
            ...this.state,
            markerPosition: e.latlng
        })
    };

    handleArrowClick = () => {
        this.setState(
            {
                showModal: !this.state.showModal,
                arrowDirection: !this.state.arrowDirection,
            },
            () => {
                console.log(this.state.arrowDirection);
            },
        );
    };

    handleOnClose = () => {
        this.setState({
            ...this.state,
            showModal: false,
        });
    };

    currentLocation = () => {
        return navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({
                    location: {lat: position.coords.latitude, lng: position.coords.longitude},
                    haveLocationOfUser: true, //when it finds the location of the user, then it sets the state' haveLocationOfUser value as true
                    zoom: 11,
                });
            },
            () => {
                this.setState({
                    location: {lat: 50.85, lng: 4.48},
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
                location: {lat: 50.6, lng: 4.41},
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
        const showStyle = {};

        const hideStyle = {
            width: '0',
            transform: 'translateX(-30vw)'
        };

        let modal;
        const rightArrow = <Icon type="right"/>;
        const leftArrow = <Icon type="left"/>;
        modal = (
            <BivakZoneModal
                style={this.state.showModal ?  showStyle : hideStyle}
                modalState={this.showModalFunc}
                handleOpen={this.handleOnClick}
                onRef={ref => (this.child = ref)}
                handleClose={this.handleOnClose}
                bivakzone={this.state.bivakzone}
                showModal={this.state.showModal}
            />
        );

        const position = [this.state.location.lat, this.state.location.lng];
        const bounds = Leaflet.latLngBounds([position, this.state.markerPosition]);
        return (
            <>
                <LeafletMap
                    bounds={bounds}
                    className="leaflet-container"
                    center={position}
                    zoom={this.state.zoom}
                    maxZoom={19}
                    attributionControl={true}
                    zoomControl={false}
                    doubleClickZoom={true}
                    scrollWheelZoom={true}
                    dragging={true}
                    animate={true}
                    easeLinearity={0.35}
                >
                    <ZoomControl position="bottomright"></ZoomControl>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors & Icons made by <a href="https://www.flaticon.com/authors/phatplus" title="phatplus">
            phatplus</a>, <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> flaticon.com</a>'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {//Adjusting the location marker if browser finds the location of the user to show marker, if not then not to show it
                        this.state.haveLocationOfUser ? (
                            <Marker position={position} icon={myIcon} className="markerIcon">
                                <Popup>You are here</Popup>
                            </Marker>
                        ) : (
                            ''
                        )}
                    {this.state.bivakzones.map(bivak => {
                        if (bivak.geometry.type === 'Polygon') {

                            bivak.geometry.coordinates = Controllers.centroid(bivak.geometry.coordinates);
                            bivak.geometry.type = 'Point';

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
                                onMouseOver={e => {
                                    e.target.openPopup();
                                }}
                                onMouseOut={e => {
                                    setTimeout(() => {
                                        e.target.closePopup();
                                    }, 5000);
                                }}
                                onClick={e => {
                                    this.handleOnClick(e);
                                }}
                            >
                                <Popup>
                                    {/* <PopupCard bivakzone={bivakzone} /> */}
                                    <Link to={`/home/${bivak.id}`}>{bivak.properties.name}{bivak.geometry.type}</Link>
                                </Popup>
                            </GeoJSON>
                        );
                    })}
                    <Control key={this.state.showLocation} position="bottomright">
                        {/* Control is used to control a component's position on map */}
                        <button
                            onClick={() => {
                                this.setState({showLocation: true});
                                this.currentLocation();
                            }}
                        >
                            <img
                                src={'/Icons/location.png'}
                                alt="Location button"
                                width="30px"
                                height="30px"
                            />
                        </button>
                    </Control>
                    <section className={'sidepanel'}>
                        {modal}
                        <button
                            onClick={this.handleArrowClick}
                            className="sidepanel_btn"
                        >
                            {this.state.showModal ? leftArrow : rightArrow}
                        </button>
                    </section>
                    {/* <Filter style={{position:"static", zIndex:"0"}} callBack={this.showBivakzones}></Filter> */}
                </LeafletMap>
            </>
        );
    }
}

export default Map;
