const express = require('express')
const addtolist = require('../controllers/addtolist')
const movies = require('../controllers/movies')
const router = express.Router()

router.post('/:moviename',addtolist)
router.get('/search',movies)

module.exports=router