/*
Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles, mostrando 4 casas decimais após a vírgula.

Calcule e imprima o valor da distância segundo a fórmula fornecida, com 4 casas após o ponto decimal.
*/

var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n');

var x1 = lines[0].split(' ')[0]
var y1 = lines[0].split(' ')[1]
var x2 = lines[1].split(' ')[0]
var y2 = lines[1].split(' ')[1]

var distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)).toFixed(4)

console.log(distancia)