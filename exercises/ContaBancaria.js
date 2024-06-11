//Crie uma classe ContaBancaria com propriedades numeroDaConta, saldo e métodos depositar() e sacar(). Adicione validações para garantir que não seja possível sacar mais do que o saldo disponível.
class ContaBancaria {
  constructor(numeroDaConta, saldo = 0) {
    this.numeroDaConta = numeroDaConta;
    this.saldo = saldo;
  }

  depositar(valor) {
    if (valor > 0) {
      this.saldo = this.saldo + valor;
      console.log("Depositando " + valor);
      console.log("Novo saldo: " + this.saldo);
      return this.saldo;
    } else {
      console.log("Valor de depósito inválido.");
      return this.saldo;
    }
  }

  sacar(valor) {
    if (valor > 0) {
      if (valor <= this.saldo) {
        console.log("Sacando " + valor);
        this.saldo -= valor;
        console.log("Novo saldo: " + this.saldo);
        return true;
      } else {
        console.log("Saldo insuficiente para saque.");
        return false;
      }
    } else {
      console.log("Valor de saque inválido.");
      return false;
    }
  }

  verificarSaldo() {
    console.log("Seu saldo é: " + this.saldo);
    return this.saldo;
  }
}

module.exports = ContaBancaria;
