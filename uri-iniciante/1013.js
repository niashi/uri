/*
Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”. Utilize a fórmula:

Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). Um segundo passo, portanto é necessário para chegar no resultado esperado.

Imprima o maior dos três valores seguido por um espaço e a mensagem "eh o maior".
*/

var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split(' ');

var A = parseInt(lines[0])
var B = parseInt(lines[1])
var C = parseInt(lines[2])

var maiorAB = (A + B + Math.abs(A - B)) / 2

var maiorDeTodos = (maiorAB + C + Math.abs(maiorAB - C)) / 2

console.log(`${maiorDeTodos} eh o maior`)