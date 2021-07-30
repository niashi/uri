/*
Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.

A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando de deixar um espaço após os dois pontos e um espaço após o "R$". O valor deverá ser apresentado com 2 casas após o ponto.
*/

var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n');

var cod1 = lines[0].split(' ')[0]
var quantia1 = lines[0].split(' ')[1]
var valorUnitario1 = lines[0].split(' ')[2]

var cod2 = lines[1].split(' ')[0]
var quantia2 = lines[1].split(' ')[1]
var valorUnitario2 = lines[1].split(' ')[2]

var total1 = quantia1 * valorUnitario1
var total2 = quantia2 * valorUnitario2

var total = (total1 + total2).toFixed(2)

console.log(`VALOR A PAGAR: R$ ${total}`)