
// bioData is an object in JS 
const bioData ={
    name: "piku",
    age: 20,
    collage: "Meghnad Saha Institution of Technology"
};

console.log(bioData.name); //piku
console.log(bioData.age);  //20
console.log(bioData.collage); //Meghnad Saha Institution of Technology


// now we convert object to JSON format 
const jsonData =JSON.stringify(bioData);
console.log(jsonData);
// {"name":"piku","age":20,"collage":"Meghnad Saha Institution of Technology"} 

console.log(jsonData.name);  //undefined

//now we convert JSON to objet format
const objData = JSON.parse(jsonData);
console.log(objData);

// {
//     name: 'piku',
//     age: 20,
//     collage: 'Meghnad Saha Institution of Technology'        
// }
