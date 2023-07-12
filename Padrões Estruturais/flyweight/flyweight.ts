// Classe Flyweight de Comida
class Comida {
    private nome: string;
  
    constructor(nome: string) {
      this.nome = nome;
    }
  
    public servir(): void {
      console.log(`Servindo ${this.nome}`);
    }
  }
  
  // Classe FlyweightFactory de Comida
  class ComidaFactory {
    private comidas: { [key: string]: Comida } = {};
  
    public getComida(nome: string): Comida {
      if (!this.comidas[nome]) {
        this.comidas[nome] = new Comida(nome);
      }
  
      return this.comidas[nome];
    }
  }
  
  // Exemplo de uso
  const factory = new ComidaFactory();
  
  // Cliente 1
  const hamburguer1 = factory.getComida("Hambúrguer");
  hamburguer1.servir(); // Output: Servindo Hambúrguer
  
  // Cliente 2
  const pizza = factory.getComida("Pizza");
  pizza.servir(); // Output: Servindo Pizza
  
  // Cliente 3
  const hamburguer2 = factory.getComida("Hambúrguer");
  hamburguer2.servir(); // Output: Servindo Hambúrguer
  
  console.log(hamburguer1 === hamburguer2); // Output: true (mesma instância de Comida)
  