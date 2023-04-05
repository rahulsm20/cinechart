const listSchema = require('../models/watchlist.model')

const addtolist = async(req,res)=>{
     try{
        const updatedList = await listSchema.create({name:req.params.moviename,image:req.body.image,director:req.body.director})
        res.status(200).send(updatedList)
     }
    catch(err){
        res.status(400).send(err)
    }
};

module.exports=addtolist