
// const oper= require('./oper');

// console.log(oper);  //we are a taking it as an object
// {
//     add: [Function: add],
//     sub: [Function: sub],
//     multi: [Function: multi]
// }
// console.log(oper.add(2,5));   //7
// console.log(oper.sub(2,5));   //-3
// console.log(oper.multi(2,5)); //10


// ------------------------------------
// also we can do it in this way 
const {addNum, subNum, multiNum}=require("./oper");  
//Here we taking this things as property

console.log(addNum(2,5)); //7
console.log(subNum(2,5));  //-3
console.log(multiNum(2,5));  //10