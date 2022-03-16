const express = require('express')
const bodyParser = require('body-parser')
const mongoose=require('mongoose')
const User= require('./api/users')


const app =express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use("/api/users", User)

mongoose.connect(
    "mongodb://localhost:27017/usuarios",{
        useNewUrlParser:true,
        useUnifiedTopology:true
    },
    (err,res)=>{
        err && console.log("error bd");
        app.listen(3500, ()=>{
            console.log("connect to server 3500");
        })
    }
);


