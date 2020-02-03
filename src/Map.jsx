import React from 'react';
import L from 'leaflet';
import { Map as LeafletMap, GeoJSON, TileLayer, Marker, Popup } from 'react-leaflet';
import bivakzones from './bivakzones.json';
import PopupCard from './PopupCard';
import { Link } from 'react-router-dom';
import Filter from './Header/Filter';
import { Handler } from 'leaflet';
import {Modal} from 'react-bootstrap';
import BivakzoneModal from './components/BivakzoneModal2';
import './App.css';
import {ShowModalContext} from './utils/Context'
import {Icon} from 'antd'
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';


var myIcon = L.icon({
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
      showButton: false,
      bivakzones: props.bivakzones,
      showModal:false,
      arrowDirection: false,
    };
    console.log(this.state.bivakzones);
  }
  
  // eslint-disable-next-line no-useless-constructor
  
 
 showModalFunc=(modalState)=>{
   this.setState(
     {
     
     showModal: modalState
     }
   )
 }
 
 handleOnClick= (e)=>{
   this.setState(
     {
     showModal: !this.state.showModal,
     bivakzone: e.sourceTarget.feature
     }
   )
  //  this.context= false;
   console.log(e.sourceTarget)
   console.log(this.state.showModal)
  //  this.child.showModal()
  }
  handlArrowClick=()=>{
    this.setState({
      showModal: !this.state.showModal,
      arrowDirection: !this.state.arrowDirection
    },()=>{console.log(this.state.arrowDirection)})
  }

 handleOnClose= ()=>{
  this.setState({
    ...this.state,
    showModal: !this.state.showModal
  })
 
}




    
      
      
            
                  
                 
              
             





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
        this.setState({
          location: { lat: 50.85, lng: 4.48 },
          haveLocationOfUser: false, //making it false not to show the marker if user doesn't want his location to be used
          zoom: 10,
          allowance: false,
        });
      },
    );
  }
  showBivakzones = a => {
    this.setState({
      bivakzones: a,
    });
  };

  render() {
      const showStyle={
        width:"25vw",
        height:"60vw",
        background:"white",
        transition:"width 1s ease-in-out",
        overflow:"hidden",
        float:"left",
        zIndex:"1",
        border:"1 solid black",
        boxShadow:"2px 2px  rgba(0,0,0,0.5)",
        display:"block"
      }
      const hideStyle={
        width:"0px",
        height:"200px",
        backGround:"blue",
        transition:"width 1s ease-in-out",
        overflow:"hidden",
        float:"left",
        zIndex:"1"
      }
        let modal;
        const rightArrow = <Icon  type="right" />;
     const leftArrow =<Icon  type="left" />
    // if (this.state.showModal){
    //     return  
    //     }
        modal= 
       
        <BivakzoneModal  
        style={this.state.showModal ? hideStyle:showStyle}
        // className={this.state.showModal ? "modal_on_click":"modal"}
        modalState={this.showModalFunc}
        handleOpen={this.handleOnClick} 
        onRef={ref => (this.child = ref)}  
        handleClose={this.handleOnClose} 
        bivakzone={this.state.bivakzone}
        showModal={this.state.showModal}
        >

        </BivakzoneModal>

    const position = [this.state.location.lat, this.state.location.lng];
    return (
      <>
        {modal}
  
        <button style={{float:"left", zIndex:"1", height:"3rem", color:"blue"}} onClick={this.handlArrowClick} className="exp_btn" >
        {this.state.arrowDirection ? leftArrow:rightArrow}
        </button>
        <Filter callBack={this.showBivakzones}></Filter>
        <LeafletMap
          className="leaflet-container"
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
                onMouseOver={e => {
                  e.target.openPopup();
                }}
                onMouseOut={e => {
                  setTimeout(() => {
                    e.target.closePopup();
                  }, 5000);
                }
                }
                onClick ={e => {
                  this.handleOnClick(e)
                }} 
              >
                <Popup>
                  {/* <PopupCard bivakzone={bivakzone} /> */}
                  <Link to={`/bivakzone/${bivak.id}`}>{bivak.properties.name}</Link>
                </Popup>
              </GeoJSON>
            );
          })}
        </LeafletMap>
      </>
    )
  }
  }

export default Map;
