class contaBancaria{
    private saldo: number;
    public readonly numeroConta: string;

    constructor(numeroConta: string, saldoInicial: number){
        this.numeroConta = numeroConta;
        this.saldo = saldoInicial
    }

    public depositar(valor:  number): void{
        if (valor > 0){
            this.saldo += valor;
            console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}`)
        }
    } 

    public consultarSaldo(){
        return this.saldo;
    }
}

const minhaConta = new contaBancaria("1248",1500)
minhaConta.depositar(200)