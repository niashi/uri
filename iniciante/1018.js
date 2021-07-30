/*
Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas necessárias.

Imprima o valor lido e, em seguida, a quantidade mínima de notas de cada tipo necessárias, conforme o exemplo fornecido. Não esqueça de imprimir o fim de linha após cada linha, caso contrário seu programa apresentará a mensagem: “Presentation Error”.
*/

var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split(' ');

var valor = parseInt(lines[0])

var cedulas = [100, 50, 20, 10, 5, 2, 1]

console.log(valor)

for (let cedula of cedulas) {
    let quantiaNotas = parseInt(valor / cedula)
    console.log(`${quantiaNotas} nota(s) de R$ ${cedula},00`)
    valor %= cedula
}