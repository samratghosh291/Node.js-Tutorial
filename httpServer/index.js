// The http.createServer() method includes http.request and response parameters which is supplied by Node.js. 


// The request object can be used to get informantion about the current HTTP request.
// e.g:- url, request headers,and Data.

//The response object can be used to send a response for a current


//If the response from the HTTP server is supposed to be display 
//you should include an HTTP header with the correct content 


const http = require("http");
const url = require("url");
const fs = require("fs");

const server =http.createServer((req,res)=>{
    // console.log(req.url);
    if(req.url=="/"){
        res.end("Hello this is home section.");
    }
    else if(req.url=="/about"){
        res.end("Hello this is about section.");
    }
    else if(req.url=="/contact"){
        res.end("Hello this is contact section.");
    }
    else if(req.url=="/userapi"){
        fs.readFile(`${__dirname}/userApi/userapi.json`,"utf-8",(err,data)=>{
                console.log(data);
                res.end(data);
        });
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h1>404 page does not exits.</h1>");
    }
});

// server.listen(8000,"127.0.0.1",()=>{
//     console.log("listening to the port 8000");
// });

server.listen(8000,"127.0.0.1",()=>{
    console.log("listining to the port 8000");
});