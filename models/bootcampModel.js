const moongoose = require('mongoose')

const bootcampSchema = new moongoose.Schema({
    name: {
        type: String,
        required: [true, 'You should to add a name'],
        unique: true,
        trim: true,
        minlength: [2, 'The name must have more than 2 characters'],
        maxlength: [50, 'Name can`t be more 50 characters']
    },
    slug: String,
    description:{
        type: String,
        required: [true, 'You should to write a description'],
        maxlength: [500, 'Description can`t be more 500 characters'],
        minlength: [20, 'The description must have more than 20 characters']
    },
    website:{
        type: String,
        match: [
            /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/,
            'Please write valid HTTP url'
        ]
    },
    phone: {
        type: String,
        maxlength: [20, 'Phone number can`t be more 20 characters']
    },
    email: {
        type: String,
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            'Please write valid email'
        ]
    },
    address:{
        type: String,
        required: [true, 'Please write address']
    },
    location:{
        type: {
            type: String,
            enum: ['Point'],
          },
          coordinates: {
            type: [Number],
            index: '2dsphere'
          },
          formattedAdress: String,
          street: String,
          city: String,
          state: String,
          zipcode: String,
          country: String
    },
    careers: {
        type: [String],
        required: true,
        enum: [
            'Web Development',
            'Mobile Development',
            'UI/UX',
            'Data Science',
            'Business',
            'Other'
        ]
    },
    averageRating: {
        type: Number,
        min: [1, 'Rating must be at least 1'],
        max: [10, 'Rating must can not be more than 10']
    },
    averageCost: Number,
    photo:{
        type: String,
        default: 'no-photo.jpg'
    },
    housing:{
        type: Boolean,
        default: false
    },
    jobAssistanse:{
        type: Boolean,
        default: false
    },
    jobGuarantee: {
        type: Boolean,
        default: false
    },
    acceptGi:{
        type: Boolean,
        default: false
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = moongoose.model('Bootcamp', bootcampSchema)