const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
var cookieParser = require('cookie-parser')
const LOGIN_API_ROUTE = require('./routes/routes.js');
var bodyParser = require("body-parser");
const dotenv = require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api", LOGIN_API_ROUTE);

app.use(function(req, res, next) {
    next({
      message : 'Not Found',
      status  : 404
    });
  });
  
  app.use(function(err, req, res, next) {
    res.status(err.status || 400).send({
      message : err.message || err,
      status  : err.status || 400,
    });
  });

  app.listen(port,()=>{
    console.log(`listening @ ${port}`);
})

