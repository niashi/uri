/*
Leia 3 valores inteiros e ordene-os em ordem crescente. No final, mostre os valores em ordem crescente, uma linha em branco e em seguida, os valores na sequência como foram lidos.
*/

var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split(' ');

var arrOriginal = []
arrOriginal.push(parseInt(lines[0]), parseInt(lines[1]), parseInt(lines[2]))

var arrSort = []
arrSort.push(parseInt(lines[0]), parseInt(lines[1]), parseInt(lines[2]))

for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
        if (arrSort[j] > arrSort[j+1]) {
            let aux = arrSort[j]
            arrSort[j] = arrSort [j+1]
            arrSort[j+1] = aux
        }
    }
}

console.log(arrSort.join('\n'))
console.log()
console.log(arrOriginal.join('\n'))