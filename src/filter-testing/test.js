const filter = require('./filter')
const bivakzones = require('./test_data.json')
//const assert =require('assert')
const state= {
    "openfire": "yes",
    "bicycle": null,
    "toilets": null,
    "fee": "no",
     "motor_vehicle": "no",

}
const first = filter(bivakzones, state)
.map(site => site.properties.name)
//assert.deepStrictEqual(first,  ["Steenberg Meerdaalwoud Oud-Heverlee","Het Vinne - Zoutleeuw", "Root Colony (Hoogstraten)", "Hoge Vijvers - Arendonk", ], 'openfire: yes')
 console.log(first)
// console.log(state);



/*

return Bivakzones.features
.filter((bivakzone) => 
{for(var i = 0 ; i < keys.length; i++)
  { bivakzone.properties[keys[i]] == values[i]}

    }    ) */


