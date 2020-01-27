import React from 'react';
import { Map as LeafletMap,GeoJSON, TileLayer, Marker, Popup} from 'react-leaflet';
import bivakzones from './bivakzones.json';
import PopupCard from './PopupCard';
import Filter from './filter';
import { Handler } from 'leaflet';
import {Container, Row, Col} from 'react-bootstrap';
import BivakzoneModal from './components/BivakzoneModal';
import './App.css';

class Map extends React.Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
    this.state= {
      showModal:false,
      bivakzone:{}
    }
  }


 componentDidMount(){
   console.log(this.state)
   
 }
 handleOnClick= (e)=>{
   this.setState(
     {
     showModal: !this.state.showModal,
     bivakzone: e.sourceTarget.feature
     }
   )
   console.log(e.sourceTarget.feature)
   console.log(this.state)
 }

 handleOnClose= ()=>{
  this.setState({
    ...this.state,
    showModal: !this.state.showModal
  })
}

 

    render() {
      let modal;  
      if (this.state.showModal){
        return  modal = <BivakzoneModal handleOnClose={this.handleOnClose} bivakzone={this.state.bivakzone} showModal={this.state.showModal}></BivakzoneModal>
      }

      return (
        <>
        <div className= "map-container">
              <LeafletMap
              className="leaflet-container"
              center={[51, 5]}
              zoom={9}
              maxZoom={19}
              attributionControl={true}
              zoomControl={true}
              doubleClickZoom={true}
              scrollWheelZoom={true}
              dragging={true}
              animate={true}
              easeLinearity={0.35}
              >
                <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'/>
            
                {   bivakzones.features.map((bivakzone)=>
                   <GeoJSON
                    data={bivakzone}
                    style={() => ({
                      color: '#4a83ec',
                      weight: 0.5,
                      fillColor: "#1a1d62",
                      fillOpacity: 1,
                      }
                      )
                    }
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
                      <PopupCard bivakzone={bivakzone} />
                        <a href={`/home/${bivakzone.id}`}>{bivakzone.properties.name}</a> 
                    </Popup>
                  </GeoJSON>
                )
            }
       
              </LeafletMap>
           
              {modal} 
              </div>  
        </>
      );
          }
    }
  

export default Map;

