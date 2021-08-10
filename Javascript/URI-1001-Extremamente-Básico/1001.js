let  input = require("fs").readFileSync("stdin", "utf8");

let valores = input.split("\n");

var A = parseInt(valores.shift());
var B = parseInt(valores.shift());

var x=A+B;
console.log("X = "+ x);