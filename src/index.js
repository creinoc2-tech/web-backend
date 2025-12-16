const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const port = process.env.PORT  || 4000
const dbConnectNoSql = require("./database/db_mongoose");
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const sanitizeMiddleware = require("./middleware/moogoSanitize");
const globalErrorHandler = require("./controllers/errorController");
const ErrorApi = require("./middleware/ErrorApi");
const companyRoutes = require('./routes/CompanyRouter');

app.use(express.json( {limit: '10mb'} )); 
app.use(helmet());
app.use(cors({ origin: 'http://localhost:3000' , credentials: true }));
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, 
  max: 10000, 
  message : 'Too many requests from this IP, please try again after an hour',
  standardHeaders: true, 
  legacyHeaders: false, 
})

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! Shutting down ....");
  console.log(err.name, err.message);
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! Shutting down ....");
  console.log(err.name, err.message);
  process.exit(1);
})


app.use("/api/v1/companies" , companyRoutes );

//app.use("/api/users" , limiter  , userRoutes);
dbConnectNoSql();
app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`)
}) 