const movie = require('../models/movies.model')

const movieSearch = async(req,res) =>{
    try{
        const movies = await movie.find();
        res.status(200).json(movies);
    }
    catch(error){
        res.status(400).json(error);
    }
};

module.exports=movieSearch