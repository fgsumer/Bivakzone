const queryOverpass = require('@derhuerst/query-overpass');
const fs=require('fs')



const dayInMilliseconds= 1000 * 60 * 60 * 24;

    setInterval(() => {
        queryOverpass(`
    [out:json][timeout:25];  
    node["backcountry"="yes"]["tourism"="camp_site"]["camp_site"="basic"];
    out body;
    `)
    .then((results)=> results)
    .then(data => {
        fs.writeFile('GeoJson.json', JSON.stringify(data),function (err) {
            if (err) throw err;
            
          });

        
    
         
    }).then(()=>{
        let event = "last update at " + Date(Date.now()).toString()
        fs.writeFile('udpate_log.txt' , event, (err)=>{
            if (err) throw err;
        })
    }    
    )
    .catch(console.error)
        
    }, dayInMilliseconds);

   
// console.log(JSON.parse(fs.readFileSync('GeoJson.json')))