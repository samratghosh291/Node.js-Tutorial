const fs = require("fs");


// fs.writeFileSync('read.txt',"Difference between syncronous and asyncronous function.");

// const data = fs.readFileSync("read.txt","utf-8");
// console.log(data);
// console.log("The task is completed!");
// -------------------------------------------
// Hello,
// My name is piku.
// The task is completed!
// -------------------------------------------


const data=fs.readFile('read.txt',"utf-8",(err,data)=>{
    console.log(data);
    console.log("Task is completed!");
});

console.log("This is after the compltation of the task");

// ---------------------------------------------
// This is after the compltation of the task
// Hello,
// My name is piku.
// Task is completed!
// ---------------------------------------------






