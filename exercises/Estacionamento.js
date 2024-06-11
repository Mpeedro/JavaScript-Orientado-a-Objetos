//Crie classes Carro e Estacionamento. A classe Carro deve ter propriedades placa e modelo. A classe Estacionamento deve ter um array de carros e métodos para estacionarCarro(), removerCarro() e listarCarros().

class Carro {
  constructor(placa, modelo) {
    this.placa = placa;
    this.modelo = modelo;
  }
}

class Estacionamento {
  constructor() {
    this.carros = []; 
  }

  estacionarCarro(carro) {
    if (this.carros.length < 10) { 
      this.carros.push(carro); 
      console.log("Estacionando carro:", carro.placa);
      return true;
    } else {
      console.log("Estacionamento cheio");
      return false;
    }
  }

  removerCarro(placa) {
    const index = this.carros.findIndex(carro => carro.placa === placa); 
    if (index !== -1) { 
      const carroRemovido = this.carros.splice(index, 1); 
      console.log("Carro removido:", carroRemovido[0].placa);
      return true;
    } else {
      console.log("Carro não encontrado no estacionamento");
      return false;
    }
  }

  listarCarros() {
    console.log("Carros no estacionamento:");
    this.carros.forEach(carro => console.log(carro.placa));
    return this.carros;
  }
}

module.exports = { Carro, Estacionamento };
