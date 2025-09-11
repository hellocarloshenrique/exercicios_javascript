const filmeMatrix = {
    titulo: 'Matrix reloaded',
    diretores: ['Lana Wachowski','Lilly Wachowski'],
    anoLancamento: 2003,
    isSimulacao: true,
    personagensPrincipais: ['Neo', 'Morpheus', 'Trinity'],

    obterResumo() {
        return `O filme ${this.titulo}, lancado em ${this.anoLancamento}, e foi dirigido pelos irmaos ${this.diretores}...`;
    },

    encontrarPersonagem(nome) {
        return this.personagensPrincipais.includes(nome);
    },

    desconectar() {
        this.isSimulacao = false;
        console.log(`${this.personagensPrincipais[0]} foi desconectado da Matrix.`);
    }
};

// --- usando os metodos ---
console.log("-------------------------");
console.log("Obtendo o resumo do filme\n");
console.log(filmeMatrix.obterResumo());

console.log("\n-------------------------");
console.log("testando se os personagens estao no filme");
console.log(`Neo esta no elenco? ${filmeMatrix.encontrarPersonagem("Neo")}`);
console.log(`Jhon Wick esta no elenco? ${filmeMatrix.encontrarPersonagem("Jhon Wick")}`);

console.log("\n-------------------------");
console.log("Status de simulacao antes de desconectar da Matrix: ");
console.log(`Neo esta na Matrix? ${filmeMatrix.isSimulacao}`);

filmeMatrix.desconectar();

console.log("\nStatus de simulacao depois de desconectar da Matrix: ");
console.log(`Neo esta na Matrix? ${filmeMatrix.isSimulacao}`);




    