
const fs =require("fs");

//creating a new file
fs.writeFileSync('read.txt',"welcome to code world!");  //it will create a file and write in it or write in an existing file


fs.writeFileSync('read.txt',"piku,welcome to code world!");   //It will completely overwrite in it.


fs.appendFileSync('read.txt',"i love you :)");  //it will write without over-right

const buf_data=fs.readFileSync("read.txt");

console.log(buf_data);

//Node.js include an additional data type called buffer
//(not available in browser's js)
//Buffer is mainly used to stior binary data,
//while reading from a file or receiving packets over the network.


/* <Buffer 70 69 6b 75 2c 77 65 6c 63 6f 6d 65 20 74 6f 20 63 6f 64 65 20 77 6f 72 6c 64 21 0d 0a 0d 0a 74 68 61 6e 6b 20 79 6f 75 21 69 20 6c 6f 76 65 20 79 6f ... 16 more bytes> */

org_data=buf_data.toString();

console.log(org_data);  //it will show you the original data over read.txt

fs.renameSync('read.txt','readfile.txt');   //it will rename the "read.txt" into "readfile.txt"


