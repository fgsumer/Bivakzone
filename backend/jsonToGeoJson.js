const fs =require('fs')
const originalJSON= JSON.parse(fs.readFileSync('GeoJson.json'));

let geoJSON= {
    "type": "FeatureCollection",
    "generator": "overpass-ide",
    "copyright": "The data included in this document is from www.openstreetmap.org. The data is made available under ODbL.",
    "timestamp": "2020-01-23T12:45:02Z",
    "features": [],
  };

function jsonToGeoJson ( originalJSON ){

    originalJSON.map((element)=>{

        geoJSON.features.push(
            {
                "type": "Feature",
      "properties": {
        "@id": element.tags.id,
        "backcountry":element.tags.backcountry ,
        "bicycle": element.bicycle,
        "camp_site": element.tags.camp_site,
        "capacity": element.tags.capacity,
        "description":element.tags.description,
        "reservation": element.tags.reservation,
        "drinking_water":element.tags.drinking_water ,
        "fee": element.tags.fee,
        "image":element.tags["image"], 
        "image:1":element.tags["image1"] ,
        "image:2": element.tags["image2"],
        "image:3": element.tags["image3"],
        "maxstay": element.tags.maxstay,
        "maxtents": element.maxtents,
        "motor_vehicle":element.tags.motor_vehicle,
        "name":element.tags.name ,
        "openfire": element.tags.openfire,
        "operator": element.tags.operator,
        "reservation":element.tags.reservation ,
        "start_date":element.tags.start_date ,
        "tents": element.tags.tents,
        "toilets":element.tags.toilets ,
        "tourism": element.tags.tourism,
        "url": element.tags.url,
        "website":element.tags.website
      },
      "geometry": {
        "type":"" ,
        "coordinates": [element.lat, element.lon]
       },
       "id":element.id ,
                
              }
              )
            }
            
        )

        return geoJSON;

    } 
 
    module.exports.jsonToGeoJson = jsonToGeoJson;


