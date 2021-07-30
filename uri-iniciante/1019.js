/*
Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.

Imprima o tempo lido no arquivo de entrada (segundos), convertido para horas:minutos:segundos, conforme exemplo fornecido.
*/

var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split(' ');

var eventoEmSegundos = parseInt(lines[0])

console.log(`${parseInt(eventoEmSegundos / 3600)}:${parseInt((eventoEmSegundos % 3600) / 60)}:${parseInt(eventoEmSegundos % 3600) % 60}`)