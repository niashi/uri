/*
Leia 3 valores reais (A, B e C) e verifique se eles formam ou não um triângulo. Em caso positivo, calcule o perímetro do triângulo e apresente a mensagem:


Perimetro = XX.X


Em caso negativo, calcule a área do trapézio que tem A e B como base e C como altura, mostrando a mensagem


Area = XX.X

O resultado deve ser apresentado com uma casa decimal.
*/

var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split(' ');

let A = parseFloat(lines.shift())
let B = parseFloat(lines.shift())
let C = parseFloat(lines.shift())

if ((A + B > C) && (A + C > B) && (B + C > A)) {
    console.log(`Perimetro = ${(A + B + C).toFixed(1)}`)
} else {
    console.log(`Area = ${(((A + B) * C) / 2).toFixed(1)}`)
}