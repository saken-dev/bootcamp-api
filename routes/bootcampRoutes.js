const express = require('express')
const { 
    getAllBootCamps, 
    getBootCamp, 
    createBootCamp, 
    deleteBootCamp, 
    updateBootCamp} = require('../controllers/bootcampsController')

const router = express.Router()

router
    .route('/')
    .get(getAllBootCamps)
    .post(createBootCamp)

router.route('/:id')
    .get(getBootCamp)
    .delete(deleteBootCamp)
    .put(updateBootCamp)
    
module.exports = router