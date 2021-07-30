/*
Calcule o consumo médio de um automóvel sendo fornecidos a distância total percorrida (em Km) e o total de combustível gasto (em litros).

Apresente o valor que representa o consumo médio do automóvel com 3 casas após a vírgula, seguido da mensagem "km/l".
*/

var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n');

var distancia = parseInt(lines[0])
var combustivel = parseFloat(lines[1])

var consumoMedio = (distancia / combustivel).toFixed(3)

console.log(`${consumoMedio} km/l`)