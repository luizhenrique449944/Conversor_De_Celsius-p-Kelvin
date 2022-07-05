import entradaDados from "readline-sync";

console.log("Conversor de Celsius para kelvin: \n");

let c = entradaDados.question("Informe o valor em Celsius: ");

let k = Number(c) + 273.15;

console.log(c+"C graus equivale a "+k+"k");


