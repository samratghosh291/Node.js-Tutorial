const chalk = require("chalk");
const validator = require("validator");

// console.log(chalk.blue.underline.inverse("Hello World!"));
// console.log(chalk.green.underline.inverse("Success"));
// console.log(chalk.red.underline.inverse("Filed!"));

// const res = validator.isEmail("abc@gmail.com")  //true
const res = validator.isEmail("abc@gmail.com")  //false

console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res)); 