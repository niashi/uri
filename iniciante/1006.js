/*
Leia 3 valores, no caso, variáveis A, B e C, que são as três notas de um aluno. A seguir, calcule a média do aluno, sabendo que a nota A tem peso 2, a nota B tem peso 3 e a nota C tem peso 5. Considere que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.

Imprima a mensagem "MEDIA" e a média do aluno conforme exemplo abaixo, com 1 dígito após o ponto decimal e com um espaço em branco antes e depois da igualdade. Assim como todos os problemas, não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error".
*/

var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n');

var A = parseFloat(lines[0])
var B = parseFloat(lines[1])
var C = parseFloat(lines[2])

var media = ((A * 2) + (B * 3) + (C * 5)) / 10

console.log(`MEDIA = ${media.toFixed(1)}`)