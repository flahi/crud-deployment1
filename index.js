const mongoose = require("mongoose");
const express = require("express");
const studentRoute = require("./controller/studentRoute");
const cors = require("cors");
const bodyParser = require("body-parser");


//MongoDB connection
mongoose.set("strictQuery", true);
mongoose.connect("mongodb+srv://test:1234@cluster0.zviwcbc.mongodb.net/schooldb");
var db = mongoose.connection;
db.on("open",()=>console.log("Connected to DB"));
db.on("error",()=>console.log("An error has occured"));

//Create the express app
const app = express();

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use("/students",studentRoute);

//Listening to port number
app.listen(4000,()=>{
    console.log("Server started at 4000");
})