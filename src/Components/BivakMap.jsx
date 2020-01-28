import React from 'react';
import { Card} from 'react-bootstrap';
import { Map as LeafletMap,GeoJSON, TileLayer, Marker, Popup} from 'react-leaflet';
import { useParams } from 'react-router-dom';
import bivakzones from '../bivakzones.json'


const BivakMap=()=>{
    const {id}  = useParams();
    const bivakzone = bivakzones.features.filter((bivakzone)=> bivakzone.id ===`node/${id}`|| bivakzone.id === `way/${id}`);
    const data = bivakzone[0];
    let x= 0, y=0;
    if(data.geometry.type==='Point'){
         x = data.geometry.coordinates[0];
         y = data.geometry.coordinates[1];
    }else {
      // find average coordinates of the polygon
         x = data.geometry.coordinates[0][0][0];
         y = data.geometry.coordinates[0][0][1];
    }
    return (
        <LeafletMap
          center={[y, x]}
          zoom={13}
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
                <GeoJSON
                  data={data}
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
                    {data.properties.name}
                  </Popup>
                </GeoJSON>
      
        </LeafletMap>
    )
};

export default BivakMap;