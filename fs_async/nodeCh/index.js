//Challenge Time

//1.Create a folder named it piku.
//2.Create a file in it named bio.txt and data into it.
//3.Add more data into the file at the end of the existing data.
//4.Read the data without getting the buffer data at first(file encoding).
//5.Rename the file nmae to mybio.txt
//6.Now delete the file and the folder

const fs = require("fs");

fs.mkdir("piku",(err)=>{
    console.log("Task have completed!");
});

fs.writeFile("piku/bio.txt","This is asyn file.",(err)=>{
    console.log("Task have completed!");
});

fs.appendFile("piku/bio.txt","\nThis is an importent topic of js",(err)=>{
    console.log("Task have completed!");
});

const data=fs.readFile("piku/bio.txt","utf-8",(err,data)=>{
    console.log(data);
});

fs.rename("piku/bio.txt","piku/mybio.txt",(err)=>{
    console.log("Task Completed!");
});

fs.unlink("piku/mybio.txt",(err)=>{
    console.log("Delete the file");
})

fs.rmdir("piku",(err)=>{
    console.log("Task Completed");
})