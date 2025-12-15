const course = require("../models/course");


const createCourse  = async (req, res) => {
   try {
    const {name  , thumbnail} = req.body;
     const data = { 
        title: "Primer video ", 
        videoUrl  : "https://www.youtube.com/watch?v=mJ_eCCRJPrY" ,
        duration : "4:13"
     }


    const newUser =  await course.create({name, thumbnail , videos: [data]});
    res.status(201).json(newUser);
   } catch (error) {
    res.status(500).json({message: error.message});
   }
}

const ReadCourse = async (req, res) => {
      try {
        const users =  await course.find();
        res.status(200).json({ ok: true, data: users });
      } catch (error) {
      res.status(500).json({ ok: false, message: error.message });
      }
}




module.exports ={ createCourse , ReadCourse } ;