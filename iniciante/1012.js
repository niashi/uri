/*
Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:
a) a área do triângulo retângulo que tem A por base e C por altura.
b) a área do círculo de raio C. (pi = 3.14159)
c) a área do trapézio que tem A e B por bases e C por altura.
d) a área do quadrado que tem lado B.
e) a área do retângulo que tem lados A e B.

O arquivo de saída deverá conter 5 linhas de dados. Cada linha corresponde a uma das áreas descritas acima, sempre com mensagem correspondente e um espaço entre os dois pontos e o valor. O valor calculado deve ser apresentado com 3 dígitos após o ponto decimal.
*/

var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split(' ');

var A = parseFloat(lines[0])
var B = parseFloat(lines[1])
var C = parseFloat(lines[2])

var areaTriangulo = (A * C) / 2
var areaCirculo = 3.14159 * (C * C)
var areaTrapezio = ((A + B) * C) / 2
var areaQuadrado = B * B
var areaRetangulo = A * B

console.log(`TRIANGULO: ${areaTriangulo.toFixed(3)}\nCIRCULO: ${areaCirculo.toFixed(3)}\nTRAPEZIO: ${areaTrapezio.toFixed(3)}\nQUADRADO: ${areaQuadrado.toFixed(3)}\nRETANGULO: ${areaRetangulo.toFixed(3)}`)