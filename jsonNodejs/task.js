const fs = require("fs");

const bioData ={
    name: "piku",
    age: 20,
    collage: "Meghnad Saha Institution of Technology"
};

// 1. convert to JSON
// 2. add it into another file 
// 3. readFile
// 4. again convert back to js obj original obj files
// 5. display original output


// convert to JSON
const jsonData = JSON.stringify(bioData);


//  add it into another JSON file 
fs.writeFile("json1.json",jsonData,(err)=>{
    console.log("Done");
});

// readFile
fs.readFile("json1.json","utf-8",(err,data)=>{
     console.log(data);
})

// again convert back to js obj original obj files and display it.
fs.readFile("json1.json","utf-8",(err,data)=>{
    const orgObj =JSON.parse(data)
    console.log(orgObj); 
});

