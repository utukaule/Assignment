const express = require("express");
const app = express();

app.get("/", function (req,res){
    res.send("hello");
});

app.get("/books", function (req,res){
    res.send({"Utkarsh":"Secret", "ShriPrasad":"mene pyar kyu kiya","ashokBHat":"dil diwana"})
});

app.listen(7000,()=>{
    console.log("listning on port 7000");
});