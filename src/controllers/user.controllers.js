const course = require("../models/course");


const createCourse  = async (req, res) => {
   try {
    const {title } = req.body;
    const newUser =  await course.create({title});
    res.status(201).json(newUser);
   } catch (error) {
    res.status(500).json({message: error.message});
   }
}

const ReadCourse = async (req, res) => {
      try {
        const users =  await course.find();
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({message: error.message});
      }
}




module.exports ={ createCourse , ReadCourse } ;