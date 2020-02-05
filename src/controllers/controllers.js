
const bivakzones = require("../bivakzones.json")

    
       class Controllers {
         constructor(arr){
             this.arr=arr;

         }
         
        // calculating the average value of polygon returns an array of the average lat and lng 
        centroid= (arr)=>{
           console.log(arr) 
        let arrX= arr[0].map(e=> e[0]);
        let arrY= arr[0].map(e=> e[1]);
    
          let CX = (Math.min(...arrX) + Math.max(...arrX)) /2;
          let CY = (Math.min(...arrY) + Math.max(...arrY)) /2;
         console.log(CX,CY)
          return [CX, CY]
        }



       }
   

 



export default  new Controllers();