import { IVeiculo } from "./IVeiculo";

export class Bicicleta implements IVeiculo {
    public TempoChegada(distancia :number): string {
      return `Bicicleta -> Tempo de chegada: ${distancia * 12} minutos` 
    }
  }