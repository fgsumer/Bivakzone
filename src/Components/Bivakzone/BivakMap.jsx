import React , { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Map as LeafletMap,GeoJSON, TileLayer, Marker, Popup} from 'react-leaflet';
import { useParams } from 'react-router-dom';
import bivakzones from '../../bivakzones.json';
import Control from 'react-leaflet-control';
import ImageComponent from '../Bivakzone/ImageComponent';

const BivakMap=(props)=>{
    const {id}= props;
   
    const bivakzone = bivakzones.features.find((bivakzone)=> bivakzone.id === id );
    let x= 0, y=0;
    const [showImage , setShowImage] = useState(false)

    const handleClick =()=>{
      setShowImage(true)
      console.log("clicked")
    }

    useEffect(()=>{
      console.log(showImage)
    })

    if(bivakzone.geometry.type==='Point'){
         x = bivakzone.geometry.coordinates[0];
         y = bivakzone.geometry.coordinates[1];
    }else {
      // find average coordinates of the polygon
         x = bivakzone.geometry.coordinates[0][0][0];
         y = bivakzone.geometry.coordinates[0][0][1];
    }

    if(showImage){
      return <ImageComponent data={bivakzone} setShowImage={setShowImage}/>
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
                     data={bivakzone}
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
                       {bivakzone.properties.name}
                     </Popup>
                     <Control position="topright" >
                      <Button variant="primary" className="btn-lg ml-5" onClick={handleClick}>
                        <i class="far fa-images"></i>
                      </Button>
                      <Button variant="primary" className="btn-lg ml-5" onClick={handleClick}>
                        <i class="fas fa-globe-europe"></i>
                      </Button>
                   </Control>
                   </GeoJSON>
         
           </LeafletMap>
         )
     }
};

export default BivakMap;