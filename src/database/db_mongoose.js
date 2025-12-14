const mongoose = require('mongoose'); 
const dotenv = require('dotenv').config()
const dbConnect = async () => {
    const MONGO_DB_URL = process.env.MONGO_DB_URL;
    try {
        await mongoose.connect(MONGO_DB_URL);
        console.log('**** CONEXION CORRECTA ****');
    } catch (err) {
        console.log('***** ERROR DE CONEXION ****');
    }
};

module.exports = dbConnect