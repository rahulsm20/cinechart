const list = require('../models/watchlist.model')

const addtolist = async(req,res)=>{
     try{
        const updatedList = await list.create({name:req.param.moviename})
        res.status(200).send(updatedList)
     }
    catch(err){
        res.status(400).send(err)
    }
};

module.exports=addtolist