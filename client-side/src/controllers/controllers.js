const bivakzones = require('../bivakzones.json');

class Controllers {
  //  constructor(arr){
  //      this.arr=arr;

  //  }

  // calculating the average value of polygon returns an array of the average lat and lng
  centroid = arr => {
    let arrX = arr[0].map(e => e[0]);
    let arrY = arr[0].map(e => e[1]);

    let CX = (Math.min(...arrX) + Math.max(...arrX)) / 2;
    let CY = (Math.min(...arrY) + Math.max(...arrY)) / 2;

    return [CX, CY];
  };

  filter = (Bivakzones, filters) => {
    const { openfire, bicycle, toilets, fee, reservation, drinking_water, dog } = filters;

    let result = Bivakzones.features;

    if (openfire) {
      result = result.filter(Bivakzone => Bivakzone.properties['openfire'] === 'yes');
    }

    if (bicycle) {
      result = result.filter(Bivakzone => Bivakzone.properties['bicycle'] === 'yes');
    }

    if (toilets) {
      result = result.filter(Bivakzone => Bivakzone.properties['toilets'] === 'yes');
    }

    if (fee) {
      result = result.filter(Bivakzone => Bivakzone.properties['fee'] === 'no');
    }

    if (drinking_water) {
      result = result.filter(Bivakzone => Bivakzone.properties['drinking_water'] === 'yes');
    }
    if (reservation) {
      result = result.filter(Bivakzone => Bivakzone.properties['reservation'] === 'yes');
    }
    if (dog) {
      result = result.filter(
        Bivakzone =>
          Bivakzone.properties['dog'] === 'yes' || Bivakzone.properties['dog'] === 'leashed',
      );
    }
    return result;
  };
  // a function that extract all images URLs from the geojson.
  imageExtractor = bivakzone => {
    let imgsURL = [];
    let imgsKeyArr = [];
    let image = 'image';

    let propertiesKeys = Object.keys(bivakzone.properties);

    imgsKeyArr = propertiesKeys.filter(p => {
      if (p.includes(image)) {
        return p;
      }
    });
    imgsKeyArr.map(key => imgsURL.push(bivakzone.properties[key]));
    return imgsURL;
  };
}

export default new Controllers();
