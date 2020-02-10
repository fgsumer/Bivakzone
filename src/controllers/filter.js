const bivakzones = require ('../bivakzones.json')
const bivakzone = bivakzones.features[0];
const filters ={
    openfire: false,
    drinking_water:true,
    fee:false  
}



const filter=function (bivakzone,filters){
 const entries=  Object.entries(bivakzone.properties).reduce((acc,val)=> val,0,{})

}

const pounds = [11, 21, 16, 19, 46, 29, 46, 19, 21];

const count = pounds.reduce( (data, pound) => {
  data[pound] = (data[pound] || 0) + 1 ;
  return data;
} , {})
let a
let b=0
console.log(a = b || 1 )
console.log(count)

const newEntries = Object.values(count)
.map(entry=> entry > 1 ? entry:"").reduce((acc, val)=> acc + val, [])
console.log(newEntries)
