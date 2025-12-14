const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const port = process.env.PORT 
const dbConnectNoSql = require("./database/db_mongoose");


 dbConnectNoSql();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 