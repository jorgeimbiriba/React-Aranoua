function formatarListaNomes(listaDeNomes:string){
    const listaInicial: string = listaDeNomes
    const arrayDeNomes: string[] = listaDeNomes.split(",")

    const arrayDeNomesMaiusculos: string[] = arrayDeNomes.map((nome:string)=>{
        return  nome.toUpperCase();
    });

    return arrayDeNomesMaiusculos
}

const palavras = "Ana,Paula,João"

console.log(formatarListaNomes(palavras))