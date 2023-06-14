import { injectable, inject, container } from "tsyringe";

@injectable() //torna as classes injetáveis
class ServicoA {
  public metodo(): void {
    console.log("Método do Serviço A");
  }
}

@injectable()
class ServicoB {
  constructor(private servicoA: ServicoA) {}

  public metodo(): void {
    console.log("Método do Serviço B");
    this.servicoA.metodo();
  }
}

// Registra as classes no contêiner de injeção de dependência
container.register(ServicoA);
container.register(ServicoB);

// Resolve as dependências e obtém uma instância de ServicoB
const servicoB = container.resolve(ServicoB);

// Chama o método de ServicoB, que também chama o método de ServicoA
servicoB.metodo();
