/*
Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples (J = C · i · t) e a segunda
retornará o valor da aplicação sob o regime de juros compostos (M = C * (1 + i)**n).
*/

    function jurosSimples(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
        let montante = capitalInicial * (1 + taxaDeJuros) * tempoDeAplicacao;
        return montante;
    }

    function jurosCompostos(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
        let montante = capitalInicial * Math.pow((1 + taxaDeJuros), tempoDeAplicacao);
        return montante;
    }

    console.log(jurosSimples(1000, 0.05, 1));
    console.log(jurosCompostos(1000, 0.05, 1));