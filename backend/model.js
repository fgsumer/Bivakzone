const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    bivakzone:{
        name:{
            type: String,
            required:true
        },
        message:{
            type:String,
            required: true
        }     
    },
   
});

module.exports=mongoose.model('Comment', commentSchema);