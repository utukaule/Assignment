// problem -1;

const express = require("express");
const app = express();

app.use(allBooks);

app.get("/books", (req,res)=>{
    return res.send("fetched all books")
});

function allBooks(req,res,next){
    console.log("books")
    next();
}


// ----------------------second ques-------------------


// app.get("/books", singleBook("GameOfThrones"), (req,res)=>{
//     return res.send({"book":res.name});
// });

// function singleBook(book_name){
//    return function book(req,res,next){
//        if(book_name === "GameOfThrones"){
//            res.name = book_name;
//            return next();
//        }
//        return res.send("not allowed");
//    }
// }

app.listen(8080,()=>{
    console.log("listnig port 8080");
});

// -----------------------------------------problem 2
