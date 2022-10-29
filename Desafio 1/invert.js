/*Criei uma função com parâmetro str */
function invertString(str) {
    /*Depois criei uma variável resultado que recebe uma string vazia */
    var resultado = "";
    /*Aqui, utilizei o loop FOR, em que i recebe o tamanho do parâmetro str (str.length) */
    for (var i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
        /*a cada iteração o i vai decrementar, de modo que o resultado a cada iteração vai recebendo 1 espaço de modo inverso, ou seja, de trás para frente */
    }
    /* aqui retorna a string invertida */
    return resultado;
}
/* aqui um exemplo do que ocorre com a lógica desenvolvida */
invertString('allyHub');