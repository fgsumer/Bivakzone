const mongoose = require('mongoose');
const uri = `mongodb://localhost/bivakzones`
 
const db = mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('Db Connected'))
    .catch(err => console.log(err));
