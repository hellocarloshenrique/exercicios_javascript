//objeto - exemplo simples

const user = {
    nome: "Carlos",
    idade: 34,
    endereco: {
        rua: "Joaquim Domingos Nerto",
        numeroCasa: 489
    },
};


console.log(user.nome);
console.log(user.idade);
console.log(user.endereco);
console.log(user.endereco.rua);
console.log(user.endereco.numeroCasa);

console.log(typeof user);

console.log(user);


// Objeto - exemplo de um objeto mais profissional

const livro = {
    titulo: 'O poder do Habito',
    autor: {
        nome: 'Charles Duhigg',
        nascionalidade: 'Americano',
    },
    paginas: 400,
    idioma: 'Portugues',
    disponivel: true,
    // aqui e um array para listar os gemeros num unico campo
    generos: ['Autoconhecimento', 'Psicologia'],

    obterResumo() {
        return `"${this.titulo}" por ${this.autor.nome}`;
    },

    estaDisponivel() {
        return this.disponivel
    },

    emprestimo() {
        this.disponivel = false;
        console.log(`"${this.titulo}" foi emprestado.`);
    }
};

console.log(livro.titulo);
console.log(livro.autor.nascionalidade);
console.log(livro.obterResumo());
console.log('O livro esta disponivel? ' + livro.estaDisponivel());

livro.emprestimo();

console.log('O livro esta disponivel agora? ' + livro.estaDisponivel());

