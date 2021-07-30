/*
Escreva um programa que leia o número de um funcionário, seu número de horas trabalhadas, o valor que recebe por hora e calcula o salário desse funcionário. A seguir, mostre o número e o salário do funcionário, com duas casas decimais.

Imprima o número e o salário do funcionário, conforme exemplo fornecido, com um espaço em branco antes e depois da igualdade. No caso do salário, também deve haver um espaço em branco após o $.    
*/

var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n');

var numeroFunc = parseInt(lines[0])
var horasTrabalhadas = parseInt(lines[1])
var recebePorHora = parseFloat(lines[2])

var salario = (horasTrabalhadas * recebePorHora).toFixed(2)

console.log(`NUMBER = ${numeroFunc}\nSALARY = U$ ${salario}`)