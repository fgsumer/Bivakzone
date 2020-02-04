import React, {Component, useState} from 'react'
import {Carousel} from 'react-bootstrap'
import Bivakzones from '../bivakzones.json'


export default (props)=>{
    
    const bivakzone = props.bivakzone;
    
    const [index, setIndex] = useState(0);
     
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    let imgsURL=[];
    let imgsKeyArr=[];
    let image="image";
 
    if (bivakzone){
        console.log(bivakzone)
       
        let propertiesKeys= Object.keys(bivakzone.properties);
        console.log(propertiesKeys)
       
            
    
            
     imgsKeyArr= propertiesKeys.filter((p) => {if(p.includes(image)){ return p}})
      imgsKeyArr.map((key)=>imgsURL.push(bivakzone.properties[key]) )
      console.log(imgsKeyArr)
      console.log(imgsURL)
     
    
      return (
      
        <Carousel style={{width:"100%",height:"100%", border:"1px solid black", overflow:"hidden"}} activeIndex={index} onSelect={handleSelect}>
          
        

    {imgsURL.map(url=> 
        <Carousel.Item style={{width:"100%",height:"200px", overflow:"hidden"}}>
                <img 
                    // style={{overflow:"hidden", backgroundSize: "cover", width:"100px", height:"100px"}}
                    className="d-block w-100 h-100"
                    src={url}
                    alt={url.index + 1}
                    />
        </Carousel.Item>
    )
    }
    
        </Carousel>
      );
    
    }else{
        return <h1>Nothingness</h1>
    }
     
  }