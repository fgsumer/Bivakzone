export default (Bivakzones, filters) => {
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
    result = result.filter(Bivakzone => Bivakzone.properties['fee'] === 'yes');
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
