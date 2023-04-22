// Routing using express 
// www.google.com-welcome
// /about - welcome to my about page
// /contact - welcome to my contact page
// /temp - welcome to my temp page 


const express = require("express");
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.write("<h1>Welcome</h1>");
    res.write("<h3>www.google.com</h3>");
    res.send();
});
app.get("/about",(req,res)=>{
    res.send("This is about page");
});

// Here basically we passed a object and after routing it will convert automatically JSON file 

app.get("/contact",(req,res)=>{
    res.send([
        {
            name:"piku",
            roll:30,
        },
        {
            name:"pinky",
            roll:10,
        },
    ]);
});



// we can do it in this way also 
app.get("/temp",(req,res)=>{
    res.json([
        {
            name:"piku",
            roll:30,
        },
        {
            name:"pinky",
            roll:10,
        },
        {
            name:"papa",
            roll:90,
        },
    ]);
});


// The methods are identical when an object or array is passed, but res.json() will also convert non-objects, auch as null and undefined, which are not valid JSON.


app.listen(port,()=>{
    console.log(`Listening to the port ${port}`);
});