function converterParaNumero (entrada:string): number | string{
    const numeroConvertido:number = parseFloat(entrada)

    // @ts-ignore
    return !Number.isNaN(numeroConvertido)

    ? numeroConvertido : "Entrada Inválida"
}

const resultado1 = converterParaNumero("123");
console.log(`Entrada: "123" -> Resultado: ${resultado1} (Tipo: ${typeof resultado1})`);