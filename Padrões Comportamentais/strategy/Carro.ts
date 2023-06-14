import { IVeiculo } from "./IVeiculo";

export class Carro implements IVeiculo {
    public TempoChegada(distancia :number): string {
      return `Carro -> Tempo de chegada: ${distancia * 6} minutos`
    }
}