const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema(
    {
        name:String,
        image:String,
        rating:String,
        director:String,
        genre:String,
        description:String
    }
);

module.exports=mongoose.model('movies',movieSchema)