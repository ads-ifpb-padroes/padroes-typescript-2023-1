interface Pessoa {
    nome: string;
    idade: number;
  }
  
  class PessoaProxy implements Pessoa {
    private pessoa: Pessoa;
  
    constructor(pessoa: Pessoa) {
      this.pessoa = pessoa;
    }
  
    get nome() {
      console.log('Acesso ao nome registrado.');
      return this.pessoa.nome;
    }
  
    get idade() {
      console.log('Acesso à idade registrada.');
      return this.pessoa.idade;
    }
  }
  
  // Criando uma instância da pessoa original
  const pessoaOriginal: Pessoa = {
    nome: 'João',
    idade: 30,
  };
  
  // Criando uma instância do proxy
  const pessoaProxy = new PessoaProxy(pessoaOriginal);
  
  // Acessando os atributos através do proxy
  console.log(pessoaProxy.nome); // Acesso ao nome registrado. João
  console.log(pessoaProxy.idade); // Acesso à idade registrada. 30