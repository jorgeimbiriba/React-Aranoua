class Contador{
    private valor: number = 0;
    
    public incrementar(): void{
        this.valor++;
        console.log(`Valor incrementado para: ${this.valor}`);
    }

    public getValor(): number {
        return this.valor;
    }

    public resetar(): void {
        this.valor = 0;
    }
}

const meuContador = new Contador();

meuContador.incrementar();
meuContador.incrementar();
meuContador.incrementar();

console.log(meuContador.getValor()); // Saída: 3

meuContador.resetar();

console.log(meuContador.getValor()); // Saída: 0