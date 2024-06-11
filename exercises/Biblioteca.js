//Crie classes Livro e Biblioteca. A classe Livro deve ter propriedades como titulo, autor e disponibilidade. A classe Biblioteca deve ter um array de livros e métodos para adicionarLivro(), emprestarLivro() e devolverLivro().

class Livro {
  constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.disponivel = true; 
  }

  emprestar() {
    if (this.disponivel) {
      this.disponivel = false; 
    return true;
  } else {

    return false;
  }
}

  devolver() {
    if (!this.disponivel) {
      this.disponivel = true;  
      return `O livro "${this.titulo}" foi devolvido`;

    }
    else `O livro "${this.titulo}" não foi emprestado`;
    
  }
}

class Biblioteca {
  constructor() {
    this.livros = []; 
    
  }

  adicionarLivro(livro) {
    this.livros.push(livro);
    return `O livro "${livro.titulo}" foi adicionado à biblioteca`;
   
  }

  listarLivros() {
    if (this.livros.length === 0) {
      return "A biblioteca está vazia.";
    } else {
      return this.livros.map(livro => {
        return {
          titulo: livro.titulo,
          autor: livro.autor,
          disponivel: livro.disponivel
        };
      });
    }
  }
}


module.exports = { Livro, Biblioteca };
