import React , { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Map as LeafletMap,GeoJSON, TileLayer, Marker, Popup} from 'react-leaflet';
import { useParams } from 'react-router-dom';
import bivakzones from '../../bivakzones.json';
import Control from 'react-leaflet-control';
import ImageComponent from '../Bivakzone/ImageComponent';

const BivakMap=()=>{
    const {id}  = useParams();
    const bivakzone = bivakzones.features.filter((bivakzone)=> bivakzone.id ===`node/${id}`|| bivakzone.id === `way/${id}`);
    const data = bivakzone[0];
    let x= 0, y=0;
    const [showImage , setShowImage] = useState(false)

    const handleClick =()=>{
      setShowImage(true)
    }

    useEffect(()=>{
      console.log(showImage)
    })
  
    if(data.geometry.type==='Point'){
         x = data.geometry.coordinates[0];
         y = data.geometry.coordinates[1];
    }else {
      // find average coordinates of the polygon
         x = data.geometry.coordinates[0][0][0];
         y = data.geometry.coordinates[0][0][1];
    }

    if(showImage){
      return <ImageComponent data={data} setShowImage={setShowImage}/>
    }
     else{
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
                     <Control position="topright" >
                      <Button variant="primary" className="btn-lg ml-5" onClick={handleClick}>
                        <i class="far fa-images"></i>
                      </Button>
                      <Button variant="primary" className="btn-lg ml-5" onClick={handleClick}>
                        <i class="fas fa-globe-americas"></i>
                      </Button>
                   </Control>
                   </GeoJSON>
         
           </LeafletMap>
         )
     }
};

export default BivakMap;