/*
Leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao Multiplos", indicando se os valores lidos são múltiplos entre si.
*/

var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split(' ');

let A = parseInt(lines.shift())
let B = parseInt(lines.shift())

if (A == 0 || B == 0) {
    console.log('Sao Multiplos')
} else if (A == B) {
    console.log('Sao Multiplos')
} else if (A > B) {
    if (A % B == 0) {
        console.log('Sao Multiplos')
    } else console.log('Nao sao Multiplos')
} else if (B > A) {
    if (B % A == 0) {
        console.log('Sao Multiplos')
    } else console.log('Nao sao Multiplos')
}