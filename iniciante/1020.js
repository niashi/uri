/*
Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias

Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias. Nos casos de teste nunca haverá uma situação que permite 12 meses e alguns dias, como 360, 363 ou 364. Este é apenas um exercício com objetivo de testar raciocínio matemático simples.

Imprima a saída conforme exemplo fornecido.
*/

var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split(' ');

var idadeEmDias = parseInt(lines[0])

let periodoEmDias = [365, 30, 1]
let nomeDoPeriodo = ['ano(s)', 'mes(es)', 'dia(s)']

for (let i = 0; i < 3; i++) {
    console.log(`${parseInt(idadeEmDias / periodoEmDias[i])} ${nomeDoPeriodo[i]}`)
    idadeEmDias %= periodoEmDias[i]
}