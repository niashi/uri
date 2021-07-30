/*
Leia 3 valores de ponto flutuante e efetue o cálculo das raízes da equação de Bhaskara. Se não for possível calcular as raízes, mostre a mensagem correspondente “Impossivel calcular”, caso haja uma divisão por 0 ou raiz de numero negativo.

Se não houver possibilidade de calcular as raízes, apresente a mensagem "Impossivel calcular". Caso contrário, imprima o resultado das raízes com 5 dígitos após o ponto, com uma mensagem correspondente conforme exemplo abaixo. Imprima sempre o final de linha após cada mensagem.
*/

var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split(' ');

let A = parseFloat(lines.shift())
let B = parseFloat(lines.shift())
let C = parseFloat(lines.shift())

let delta = (B * B) - (4.0 * A * C)

if (delta < 0 || A == 0) {
    console.log('Impossivel calcular')
} else {
    let R1 = (((-B) + Math.sqrt(delta)) / (2.0 * A)).toFixed(5) 
    // Atenção: o método .toFixed precisa ir nesta posição, na declaração da variável. Se ele for colocado no console log da linha 23, o a resolução será considerada incorreta, provavelmente devido ao fato de que nesta posição ele transforma as variáveis R1 e R2 em String.
    let R2 = (((-B) - Math.sqrt(delta)) / (2.0 * A)).toFixed(5)

    console.log(`R1 = ${R1}\nR2 = ${R2}`)
} 