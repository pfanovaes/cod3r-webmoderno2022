/*
12) Faça um algoritmo que calcule o fatorial de um número.
*/

function fatorial(num) {
    let fatorial = 1;
    for (let i = num; i > 1; i--) {
        fatorial *= i;
    }
    return fatorial;
}

console.log(fatorial(4));