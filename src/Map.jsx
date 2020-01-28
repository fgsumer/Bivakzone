import React from 'react';
import { Map as LeafletMap,GeoJSON, TileLayer, Marker, Popup} from 'react-leaflet';
import bivakzones from './bivakzones.json';
import PopupCard from './PopupCard';
import {Link} from 'react-router-dom';
import Filter from './filter';

class Map extends React.Component {
    render() {
      return (
        <LeafletMap
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
          {/* {console.log(bivakzones.features.map((bivakzone)=>{
           return bivakzone.geometry.coordinates[0]
          }))} */}
            
          {   
          bivakzones.features
          .map((bivak)=>{
            if(bivak.geometry.type ==='Polygon'){
             const firstCoordinate =bivak.geometry.coordinates[0]
                                   .map((a)=>a[0])
             const x = firstCoordinate.reduce((c,d)=>c+d, 0)/firstCoordinate.length;

             const secondCoordinate = bivak.geometry.coordinates[0]
                                      .map((a)=>a[1])
             const y = secondCoordinate.reduce((c,d)=>c+d, 0)/secondCoordinate.length

                console.log(x, y)
                bivak.geometry.type ="Point"
                bivak.geometry.coordinates =[x, y]
            } 
               return <GeoJSON
                  data={bivak}
                  style={() => ({
                    color: '#4a83ec',
                    weight: 0.5,
                    fillColor: "#1a1d62",
                    fillOpacity: 1,
                    }
                    )
                  } 
                >
                  <Popup>
                    {/* <PopupCard bivakzone={bivakzone} /> */}
                    <Link to={`/bivakzone/${bivak.id}`}>{bivak.properties.name}</Link>
                  </Popup>
                </GeoJSON>  
          })
          
          }
      
        </LeafletMap>
      );
          }
    }
  

export default Map;

