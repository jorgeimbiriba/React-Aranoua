function calcularHipotenusa(cateA: number, cateB: number): number{
    const somaDosQuadrados = Math.pow(cateA, 2 ) + Math.pow(cateB, 2);
    const hipotenusa = Math.sqrt(somaDosQuadrados);

    return hipotenusa;
}

const cate01 = 3;
const cate02 = 4;
const hipotenusa =  calcularHipotenusa(cate01, cate02)

console.log(`A hipotenusa de um triângulo com os lados ${cate01} e ${cate02} é ${hipotenusa}`);