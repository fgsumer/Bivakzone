module.exports = (Bivakzones, filters) => {
    


const {openfire, bicycle, toilets, fee, motor_vehicle}= filters;


let result= Bivakzones.features;

  if (openfire) {

    result = Bivakzones.features.filter(Bivakzone => Bivakzone.properties["openfire"] === openfire);
    
  }
  
  if (bicycle) {

    result = Bivakzones.features.filter(Bivakzone => Bivakzone.properties["bicycle"] === bicycle);
   
  }
  

  if (toilets) {
    
    result = Bivakzones.features.filter(Bivakzone => Bivakzone.properties["toilets"] === toilets);
  
  }
    

  if (fee) {

    result = Bivakzones.features.filter(Bivakzone => Bivakzone.properties["fee"] === fee);
    
  } 

  if (motor_vehicle) {
    
    result = Bivakzones.features.filter(Bivakzone => Bivakzone.properties["motor_vehicle"] === motor_vehicle);
    
  }

  return result;

}
    

  //   const keys = Object.keys(filters)
  //   const values= Object.values(filters)
        
  // console.log(keys)
  // console.log(values)

  //   return Bivakzones.features
  //   .filter((bivakzone) =>
  //     {for (var i = 0 ; i < keys.length; i++){
  //     bivakzone.properties[keys[i]] == values[i]
    
  //       }
  //     }
  //       ) 
  //   }
// the obove for loop should automate the folloing filter callback:
//Bivakzones.features.filter(bivakzone => bivakzone.properties[key1] == 'yes', key2 == 'yes')