const listSchema = require('../models/watchlist.model')

const getWatchlist = async(req,res)=>{
     try{
        const watchlist=await listSchema.find({})
        res.status(200).send(watchlist)
     }
    catch(err){
        res.status(400).send(err)
    }
};

module.exports=getWatchlist