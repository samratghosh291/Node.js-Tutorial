

const add =(a,b)=>{
  return a+b;
}
const sub =(a,b)=>{
  return a-b;
}
const multi =(a,b)=>{
  return a*b;
}


// module.exports.addNum =add;
// module.exports.subNum =sub;
// module.exports.multiNum =multi;

//Here we passed those things as an property

// ----------------------------------------

// We can do these things in this way also. 
module.exports={ addNum, subNum, multiNum};
