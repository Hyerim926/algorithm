const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let result;

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    result = `a = ${Number(input[0])}\nb = ${Number(input[1])}`;
    console.log(result);
});