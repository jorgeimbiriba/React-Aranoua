function calcularPrecoFinal(precoProduto:number, precoDesconto:number){
    const calculoPorcentagem = precoDesconto * 0.01;
    const resultado = precoProduto - (precoProduto*calculoPorcentagem);

    return resultado;
}

const valor = 40;
const desconto = 75;

const precoFinal = calcularPrecoFinal(valor, desconto);

console.log(precoFinal);