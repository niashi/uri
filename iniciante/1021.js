/*
Leia um valor de ponto flutuante com duas casas decimais. Este valor representa um valor monetário. A seguir, calcule o menor número de notas e moedas possíveis no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2. As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01. A seguir mostre a relação de notas necessárias.

Imprima a quantidade mínima de notas e moedas necessárias para trocar o valor inicial, conforme exemplo fornecido.

Obs: Utilize ponto (.) para separar a parte decimal.
*/

var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split(' ');
 
var valor = parseFloat(lines.pop())

var cedulas = [100, 50, 20, 10, 5, 2]
var moedas = [1.00, 0.50, 0.25, 0.10, 0.05, 0.01]

console.log('NOTAS:')

for (let cedula of cedulas) {
    let quantiaCedulas = parseInt(valor / cedula)
    console.log(`${quantiaCedulas} nota(s) de R$ ${cedula}.00`)
    valor %= cedula
}

console.log('MOEDAS:')

let quantiaMoedas = parseInt(valor / moedas[0])

console.log(`${quantiaMoedas} moeda(s) de R$ ${moedas[0]}.00`)

valor %= moedas[0]

quantiaMoedas = parseInt(valor / moedas[1])

console.log(`${quantiaMoedas} moeda(s) de R$ ${moedas[1]}0`)

valor %= moedas[1]

quantiaMoedas = parseInt(valor / moedas[2])

console.log(`${quantiaMoedas} moeda(s) de R$ ${moedas[2]}`)

valor %= moedas[2]

quantiaMoedas = parseInt(valor / moedas[3])

console.log(`${quantiaMoedas} moeda(s) de R$ ${moedas[3]}0`)

valor %= moedas[3]

for (let i = 4; i < 6; i++) {
    quantiaMoedas = parseInt(valor / moedas[i])
    console.log(`${quantiaMoedas} moeda(s) de R$ ${moedas[i]}`)
    valor %= moedas[i]
}