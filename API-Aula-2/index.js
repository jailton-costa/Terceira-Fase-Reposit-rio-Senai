require("dotenv").config();

const port= process.env.PORT;

const express = require("express");
const app = express();

app.get("/", (req,resp)=>{
    resp.json({
        message:"Funcionando!"
    })
})

app.listen(port); 
console.log("BackEnd rodando");



//comandos usados: npm i express / npm i body-parser / novo -> / npm i pg express dotenv / npm init -y  / npm i dotenv / npm i pg;