const express = require("express");
const app = express();
const cors = require('cors')
const connectDB = require('./db/connect')
const movieSearch = require('./routes/movies');
const searchByName = require("./routes/search");
require('dotenv').config()
app.use(cors());
app.use(express.json())


const start = async() =>{
    try{
        await connectDB(process.env.MONGO_URL)
        app.listen(5000,()=>console.log('Listening on port 5000'))
    }
    catch(e){
        console.log(e.message)
    }
}
start()

app.use('/movies',movieSearch)
app.use('/:name',searchByName)