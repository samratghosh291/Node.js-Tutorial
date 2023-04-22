const path = require("path");
const express = require("express");
const app = express();
const port =8000;
const hbs = require("hbs");

// relative and absolute 
// console.log(__dirname);

const staticPath = path.join(__dirname,"../public");
const templatePath=path.join(__dirname,"../templates/views");
const partialsPath=path.join(__dirname,"../templates/partials");



// to set the view engine 
app.set('view engine',"hbs");
app.set('views',templatePath);
hbs.registerPartials(partialsPath);


// builtin middleware 
// app.use(express.static(templatePath));

// template engine root 
app.get("/",(req,res)=>{
    res.render(index);
});


app.listen(port,()=>{
    console.log(`Listening to the port ${port}`);
});

