import { Carro } from "./Carro";
import { Bicicleta } from "./Bicicleta";
import { Moto } from "./Moto";
import { IVeiculo } from "./IVeiculo";

class Contexto {
  private strategy: IVeiculo;

  constructor(strategy: IVeiculo) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: IVeiculo): void {
    this.strategy = strategy;
  }

  public Percorrer(): void {
    console.log("Executando o contexto...");
    console.log(this.strategy.TempoChegada(10));
  }
}

const contexto = new Contexto(new Bicicleta());
contexto.Percorrer();

contexto.setStrategy(new Moto());
contexto.Percorrer();

contexto.setStrategy(new Carro());
contexto.Percorrer();
