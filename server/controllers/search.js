const movie = require('../models/movies.model')

const searchByName = async(req,res) =>{
    try{
        const movies = await movie.find({name:req.params.name});
        res.status(200).json(movies);
    }
    catch(error){
        res.status(400).json(error);
    }
};

module.exports=searchByName