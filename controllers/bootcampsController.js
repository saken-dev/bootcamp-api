const Bootcamp = require('../models/bootcampModel')
const ErrorResponse =require('../utils/errorResponse')

// @desc        Show all bootcamps
// @route       GET /api/v1/bootcamps
// @access      Public
exports.getAllBootCamps = async(req, res, next) =>{
    try{
        const bootcamps = await Bootcamp.find()

        res
        .status(200)
        .json({ success: true, count: bootcamps.length, data: bootcamps })
    }catch(err){
        res
        .status(400)
        .json({ success: true, err: err})
    }
}

// @desc        Show bootcamp
// @route       GET /api/v1/bootcamps/:id
// @access      Public
exports.getBootCamp = async(req, res, next) =>{
    try{
        const bootcamp = await Bootcamp.findById(req.params.id)

        if(!bootcamp){
            return next(
                new ErrorResponse(`Bootcamp with id:${req.params.id} not found`, 404)
            )
        }

        res
        .status(200)
        .json({ success: true, data: bootcamp })
        
    }catch(err){
        next(err)
    }
}

// @desc        Update bootcamp
// @route       PUT /api/v1/bootcamps/:id
// @access      Private
exports.updateBootCamp = async(req, res, next) =>{
    try{
        const bootcampUpdate = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, 
        {
            new: true,
            runValidators: true
        })

        if(!bootcampUpdate){
            return next(
                new ErrorResponse(`Bootcamp with id:${req.params.id} not found`, 404)
            )
        }

        res.status(200).json({ success: true, data: bootcampUpdate});
    }catch(err){
        next(err)
    }
}

// @desc        Delete bootcamp
// @route       DELETE /api/v1/bootcamps/
// @access      Private
exports.deleteBootCamp = async(req, res, next) =>{
    try{
        const bootcampDelete = await Bootcamp.findByIdAndDelete(req.params.id)

        if(!bootcampDelete){
            return next(
                new ErrorResponse(`Bootcamp with id:${req.params.id} not found`, 404)
            )
        }

        res.status(200).json({ success: true, data: {}})
    }catch(err){
        next(err)
    }
}

// @desc        Create bootcamp
// @route       POST /api/v1/bootcamps/:id
// @access      Private
exports.createBootCamp = async(req, res, next) =>{
    try{
        const bootcamp = await Bootcamp.create(req.body)

        res
        .status(201)
        .json({ success: true, data: bootcamp})
    }catch(err){
        next(err)
    }
}   