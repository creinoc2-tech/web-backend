const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema(
    {
        name : { type: String, required: true} ,
        videos :[
            {
               title : String, 
               videoUrl : String ,
               duration : String
            }
        ]

    } ,
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Course', CourseSchema);