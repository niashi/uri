/*
Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o total a receber no final do mês, com duas casas decimais.

Imprima o total que o funcionário deverá receber, conforme exemplo fornecido.
*/

var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n');

var nome = lines[0]
var salario = parseFloat(lines[1])
var totalVendas = parseFloat(lines[2])
var comissao = (0.15 * totalVendas)

console.log(`TOTAL = R$ ${(salario + comissao).toFixed(2)}`)