// A CLASSE é o molde (a planta da casa)
class Carro {
  // O construtor define como o carro é criado
  constructor(cor, modelo) {
    this.cor = cor;
    this.modelo = modelo;
  }
}

// Criando OBJETOS a partir do molde
const meuCarro = new Carro('Azul', 'Fusca'); // Um carro azul
const outroCarro = new Carro('Vermelho', 'Ferrari'); // Um carro vermelho
