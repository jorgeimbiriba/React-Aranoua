class contaPoupanca extends contaBancaria{
    private taxaJuros: number;

    constructor(numeroConta: string, saldoInicial: number, taxaJuros: number){
        super(numeroConta, saldoInicial);
        this.taxaJuros = taxaJuros
    }
}