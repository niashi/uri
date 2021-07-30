/*
Leia dois valores inteiros. A seguir, calcule o produto entre estes dois valores e atribua esta operação à variável PROD. A seguir mostre a variável PROD com mensagem correspondente.

Imprima a mensagem "PROD" e a variável PROD conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade. Não esqueça de imprimir o fim de linha após o produto, caso contrário seu programa apresentará a mensagem: “Presentation Error”.
*/

var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n');

var PROD = parseInt(lines.shift()) * parseInt(lines.shift())

console.log(`PROD = ${PROD}`)