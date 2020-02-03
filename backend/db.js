const mongoose = require('mongoose');
const uri = `mongodb+srv://berihu:7bSVMR0ePMZU4Jdq@cluster0-wbino.mongodb.net/test?retryWrites=true&w=majority`
 
const db = mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('Db Connected'))
    .catch(err => console.log(err));
