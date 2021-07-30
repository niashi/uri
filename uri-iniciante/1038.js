/*
Com base na tabela abaixo, escreva um programa que leia o código de um item e a quantidade deste item. A seguir, calcule e mostre o valor da conta a pagar.

O arquivo de saída deve conter a mensagem "Total: R$ " seguido pelo valor a ser pago, com 2 casas após o ponto decimal.
*/

var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split(' ');

let codigo = parseInt(lines.shift())
let quantidade = parseInt(lines.shift())
let tabela = [
    ['1', 'Cachorro Quente', 4.00],
    ['2', 'X-salada', 4.50],
    ['3', 'X-Bacon', 5.00],
    ['4', 'Torrada simples', 2.00],
    ['5', 'Refrigerante', 1.50]
]

for (let i = 0; i < tabela.length; i++) {
    if (tabela[i][0] == codigo) {
        console.log(`Total: R$ ${(quantidade * tabela[i][2]).toFixed(2)}`)
    }
}