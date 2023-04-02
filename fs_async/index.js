const fs = require("fs");


// create a file named "read.txt"
// fs.writeFile("read.txt","Today is awesome day.",(err)=>{
//     console.log("file is created");
//     console.log(err);
// });
// here we passed the callback function

//we pass them a function as an argument - a callback - that gets callde when that task completes.
//the callback has an argument that tells whether the operation completed successfully.
//Now we need to say what to do when fs.writeFile has completed (even if it's nothing), and start checking errors

// add more data into read.txt without overplaced it.
// fs.appendFile("read.txt","\nToday is Wednesday.",(err)=>{
//     console.log("Data successfully added in read.txt");
//     console.log(err);
// })


// Read the data without buffer data at first
const data=fs.readFile("read.txt","utf-8",(err,data)=>{
    console.log(data);
});
