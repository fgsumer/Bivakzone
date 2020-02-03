import React from 'react'



export default ({properties})=>{

    const {bicycle, openfire, fee, toilets , dog, drinking_water, reservation}= properties;
    const availableStyle={
        width:"10%",
    }
   const unavailableStyle={
       width:"10%",
       opacity:"0.1"
   }


    
    return (
       
   
       <>
       <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
       <img style={dog ==="yes" ? availableStyle:unavailableStyle} src={require("../assets/dog.png")}/>
        <img style={bicycle ==="yes" ? availableStyle:unavailableStyle} src={require("../assets/bicycle.png")}/>
        <img style={openfire ==="yes" ? availableStyle:unavailableStyle} src={require("../assets/campfire.png")}/>
        <img style={fee ==="yes" ? availableStyle:unavailableStyle} src={require("../assets/fee.png")}/>
        <img style={drinking_water ==="yes" ? availableStyle:unavailableStyle} src={require("../assets/drinking_water.png")}/>
        <img style={reservation ==="yes" ? availableStyle:unavailableStyle} src={require("../assets/reservation.png")}/>
        <img style={toilets ==="yes" ? availableStyle:unavailableStyle} src={require("../assets/toilet.png")}/>


       </div>
        
</>
        
    )
}