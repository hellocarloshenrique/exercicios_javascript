const controleRemoto = {
  ligarTV() {
    // Esta linha nao sera impressa ate que o metodo seja chamado
    console.log("A TV ligou!");
  }
};

// Nada acontece aqui, pois o metodo nao foi chamado
console.log("O controle remoto foi criado.");

// A instrucao a seguir vai CHAMA-LO
controleRemoto.ligarTV();
