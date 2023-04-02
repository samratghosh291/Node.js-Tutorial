
const os = require("os");

console .log(os.arch());   //x64

const freeMem=os.freemem();
console.log(`${freeMem /1024/1024/1024}`);

const totalMem =os.totalmem();
console.log(`${totalMem /1024/1024/1024}`);

console.log(os.hostname());   //SGhosh
console.log(os.platform());   //win32
console.log(os.tmpdir());   //win32
console.log(os.type());   //win32