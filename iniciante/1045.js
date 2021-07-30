/*
Leia 3 valores de ponto flutuante A, B e C e ordene-os em ordem decrescente, de modo que o lado A representa o maior dos 3 lados. A seguir, determine o tipo de triângulo que estes três lados formam, com base nos seguintes casos, sempre escrevendo uma mensagem adequada:
se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO
se A2 = B2 + C2, apresente a mensagem: TRIANGULO RETANGULO
se A2 > B2 + C2, apresente a mensagem: TRIANGULO OBTUSANGULO
se A2 < B2 + C2, apresente a mensagem: TRIANGULO ACUTANGULO
se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO
se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES
*/

var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split(' ');

let A = parseFloat(lines.shift())
let B = parseFloat(lines.shift())
let C = parseFloat(lines.shift())

let lados = []

lados.push(A, B, C)

for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
        if (lados[j] < lados[j+1]) {
            let aux = lados[j]
            lados[j] = lados[j+1]
            lados[j+1] = aux
        }
    }
}

A = lados[0]
B = lados[1]
C = lados[2]

if (A >= (B + C)) {
    console.log('NAO FORMA TRIANGULO')
} else if ((A * A) == (B * B) + (C * C)) { 
    console.log('TRIANGULO RETANGULO')
} else if ((A * A) > (B * B) + (C * C)) {
    console.log('TRIANGULO OBTUSANGULO')
} else if ((A * A) < (B * B) + (C * C)) {
    console.log('TRIANGULO ACUTANGULO')
} else if (A == B == C) {
    console.log('TRIANGULO EQUILATERO')
} else if ((A == B != C) || (A == C != B) || (A != B == C)) {
    console.log('TRIANGULO ISOSCELES')
}
