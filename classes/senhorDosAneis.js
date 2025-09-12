// A classe e o molde para criar objetos livro
class Livro {
    //O constructor e o metodo que cria um novo objeto
    constructor(titulo, autor, anolanamento, paginas){
        // aqui os parammetros se tornam propriedades do nojvo objeto
        this.titulo = titulo;
        this.autor = autor;
        this.anolanamento = anolanamento;
        this.paginas = paginas;
    }
    //Este e um metodo da classe, que todos os objetos criados a partir dela terao
    obterDetalhes() {
        return `${this.titulo} foi escrito por ${this.autor} e lancado em ${this.anolanamento}.`;
    }

}

//Usando a classe como um molde para criar os objeetos
const aSociedadeDoAnel = new Livro(
    'A Sociedade do Anel.',
    'J.R.R. Tolkien',
    1954,
    432
);

const asDuasTorres = new Livro(
    'As Duas Torres.',
    'J.R.R. Tolkien',
    1954,
    352
);

const oRetornoDoRei = new Livro(
    'O Retorno do Rei',
    'J.R.R. Tolkien',
    1955,
    416
);

// Usando os objetos
// Acessando as propriedades de um objeto

console.log(aSociedadeDoAnel.titulo);
console.log(aSociedadeDoAnel.autor);
console.log(aSociedadeDoAnel.anolanamento);
console.log(aSociedadeDoAnel.paginas);

console.log("\n");

console.log(asDuasTorres.titulo);
console.log(asDuasTorres.autor);
console.log(asDuasTorres.anolanamento);
console.log(asDuasTorres.paginas);

console.log("\n");

console.log(oRetornoDoRei.titulo);
console.log(oRetornoDoRei.autor);
console.log(oRetornoDoRei.anolanamento);
console.log(oRetornoDoRei.paginas);

console.log("\n");

//Chamando o metodo para obter os detalhes
console.log(aSociedadeDoAnel.obterDetalhes());
console.log(asDuasTorres.obterDetalhes());
console.log(oRetornoDoRei.obterDetalhes());
