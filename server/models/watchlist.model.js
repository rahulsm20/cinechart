const mongoose = require('mongoose');
const listSchema = new mongoose.Schema(
    {
        name:{type:String,unique:true},
        image:String,
        director:String
    }
);

module.exports=mongoose.model('watchlists',listSchema)