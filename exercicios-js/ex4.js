/*
 Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
*/

    function divisao(dividendo, divisor) {
        let resultado = dividendo / divisor;
        let resto = dividendo % divisor;
        console.log(`${dividendo} / ${divisor} = ${resultado} e o resto é ${resto}`);
    }

    divisao(10, 2);