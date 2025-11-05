interface Produto{
    id: number,
    nome:string,
    emEstoque:boolean
}

const listaDeProdutos: Produto[] = [
    {id: 1, nome: "PlayStation 5",emEstoque:true},
    {id:2, nome:"Acer Nitro V15",emEstoque:false},
    {id:3, nome:"TCL QLED 50 P",emEstoque:true},
    {id:4,nome:"Microondas da Midea",emEstoque:true}
]

function listarDisponiveis(produtos: Produto[]): Produto[]{
    return produtos.filter(produto => produto.emEstoque == true)
}

const produtosDisponiveis = listarDisponiveis(listaDeProdutos);

console.log("Produtos Disponíveis:");
console.table(produtosDisponiveis);