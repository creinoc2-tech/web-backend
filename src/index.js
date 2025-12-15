const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const port = process.env.PORT 
const dbConnectNoSql = require("./database/db_mongoose");
const userRoutes = require("./routes/user");
const cors = require('cors');
const Course = require('./models/course');

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json()); // <-- Esto permite leer JSON en el body
app.use("/api/users", userRoutes);

dbConnectNoSql();

app.listen(port, async () => {

 
  console.log(`Example app listening on port ${port}`)
}) 