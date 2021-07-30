/*
Leia 4 valores inteiros A, B, C e D. A seguir, se B for maior do que C e se D for maior do que A, e a soma de C com D for maior que a soma de A e B e se C e D, ambos, forem positivos e se a variável A for par escrever a mensagem "Valores aceitos", senão escrever "Valores nao aceitos".
*/

var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split(' ');

let A = parseInt(lines.shift())
let B = parseInt(lines.shift())
let C = parseInt(lines.shift())
let D = parseInt(lines.shift())

if (B > C && D > A) {
    if ((C + D) > (A + B)) {
        if (C > 0 && D > 0) {
            if (A % 2 === 0) {
                console.log('Valores aceitos')
                
            } else console.log('Valores nao aceitos')

        } else console.log('Valores nao aceitos')

    } else console.log('Valores nao aceitos')

} else console.log('Valores nao aceitos')