const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema(
    {
        name : { type: String, required: true} ,
        thumbnail : { type: String } ,
        videos :[
            {
               title : String, 
               videoUrl : String ,
               duration : String
            }
        ] ,
        price : { type: Number , default: 19.99 }

    } ,
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Course', CourseSchema);