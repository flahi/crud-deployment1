const express = require("express");
const studentSchema = require("../model/studentSchema");
const mongoose = require("mongoose");

const studentRoute = express.Router();

//http://localhost:4000/students/createStudent
studentRoute.post("/createStudent",(req, res)=>{
    studentSchema.create(req.body,(err,data)=>{
        if (err) {
            return err;
        }
        else {
            res.json(data);
        }
    })
})
//http://localhost:4000/students
studentRoute.get("/",(req, res)=>{
    studentSchema.find((err,data)=>{
        if (err) {
            return err;
        }
        else {
            res.json(data);
        }
    })
})
studentRoute.route("/update-student/:id")
.get((req,res)=>{
    studentSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if (err) {
            return err;
        }
        else {
            res.json(data);
        }
    })
})
.put((req, res)=>{
    studentSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set:req.body},
    (err,data)=>{
        if (err) {
            return err;
        }
        else {
            res.json(data);
        }
    })
})
//http://localhost:4000/students/deleteStudent/:id
studentRoute.delete("/deleteStudent/:id",(req,res)=>{
    studentSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),(err, data)=>{
        if (err) {
            return err;
        }
        else {
            res.json(data);
        }
    })
})
module.exports = studentRoute;