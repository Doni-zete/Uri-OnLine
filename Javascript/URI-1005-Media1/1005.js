let input = require('fs').readFileSync('stdin', 'utf8');

let numeros = input.split('n');

let nota1 = parseInt(numeros.shift());
let nota2 = parseInt(numeros.shift());

peso1 = nota1 * 3, 5 ;
peso2 = nota2 * 7, 5;
conta =peso1+peso2;

media = conta / 11;


console.log("MEDIA = " + conta);

