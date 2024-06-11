//Crie uma classe Produto com propriedades nome, preco e quantidade. Adicione métodos para adicionarEstoque() e vender().

class Produto {
  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  adicionarEstoque(quantidade) {
    this.quantidade += quantidade;
    return this.quantidade; 
  }

  vender(quantidade) {
    if (quantidade <= this.quantidade) {
      this.quantidade -= quantidade;
      return true; 
    } else {
      console.log("Estoque insuficiente.");
      return false; 
    }
  }
}

module.exports = Produto;
