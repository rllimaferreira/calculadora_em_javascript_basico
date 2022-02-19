//Projeto de Calculadora em Javascript (Programação Imperativa)

//Parte 1 - Operações básicas

function adicionar(num1, num2) {
    const calculoAdicionar = num1 + num2;
    return(calculoAdicionar);
}

function subtracao(num1, num2) {
    const calculoSubtracao = num1 - num2;
    return(calculoSubtracao);
}

function multiplicacao(num1, num2) {
    const calculoMultiplicacao = num1 * num2;
    return(calculoMultiplicacao);
}

function divisao(num1, num2) {
    const calculoDivisao = num1 / num2;
    return(calculoDivisao);
}

//Parte 2 - Execução dessas operações

console.log('-------------- Teste de Operações / Calculador --------------');

console.log('\n\tA adição de 1 + 2 é igual a: ', adicionar(1, 2));
console.log('\n\tA subtração de 3 - 2 é igual a: ', subtracao(3, 2));
console.log('\n\tA multiplicação de 3 por 2 é igual a: ', multiplicacao(3, 2));
console.log('\n\tA divisão de 10 por 2 é igual a: ', divisao(10, 2));
console.log('\n\tA divisão de 3 por 0 é igual a: ', divisao(3, 0));

//Parte 3 - Funções extras

function quadradoDoNumero(num) {
    const calculoQuadradoDoNumero = num**(multiplicacao);
    return multiplicacao(num, num);
}
console.log('\n\tO quadrado de 8 é igual a: ', quadradoDoNumero(8));


function mediaDeTresNumeros(num1, num2, num3) {
    const calculoMediaDeTresNumeros = adicionar(num1, num2);
    const calculoMediaDeTresNumerosMaisNum3 = adicionar(calculoMediaDeTresNumeros, num3);
    return divisao(calculoMediaDeTresNumerosMaisNum3, 3);
}

console.log('\n\tA média destes três números é igual a: ', mediaDeTresNumeros(6, 6, 6));

//Cálculos da quantidade e porcentagem.

function calculoPorcentagem(num1, num2) {
    const resultadoDivisao = (divisao(num1, 100));
    const quantidadeFinal = multiplicacao(resultadoDivisao, num2);
    console.log('\n\tA quantidade final de', num2+'% de', num1, 'é igual a: ', quantidadeFinal);
    return quantidadeFinal;
}

calculoPorcentagem(300, 15);

function geradorDePorcentagem(num1, num2) {
  const resultadoDivisao = (divisao(num2, 100));
  const porcentagemFinal = multiplicacao(resultadoDivisao, num1);
  console.log('\n\tA porcentagem de 2 em uma quantidade de 200 é igual a: ', porcentagemFinal);
  return porcentagemFinal;
}

geradorDePorcentagem(2, 200);