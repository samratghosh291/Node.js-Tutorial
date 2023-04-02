//Challenge Time

//1.Create a folder named it piku.
//2.Create a file in it named bio.txt and data into it.
//3.Add more data into the file at the end of the existing data.
//4.Read the data without getting the buffer data at first(file encoding).
//5.Rename the file nmae to mybio.txt
//6.Now delete the file and the folder

const fs=require('fs');

fs.mkdirSync("piku"); // create a folder named "piku"


fs.writeFileSync('piku/bio.txt',"My name is Samrart Ghosh");  //create bio.txt and write "My name is Samrart Ghosh" inside the file.

fs.appendFileSync('piku/bio.txt',"\n I live in kolkata");  //it will write this "I live in kolkata" after the end of the existing data in bio.txt

const data=fs.readFileSync("piku/bio.txt","utf8");  //here we use "utf8" for encoding the data
console.log(data);

fs.renameSync("piku/bio.txt","piku/mybio.txt"); //It rename the "bio.txt" file to "mybio.txt"

fs.unlinkSync("piku/mybio.txt"); //it will delete the "mybio.txt" file

fs.rmdirSync("piku");  // it will delete the "piku" folder