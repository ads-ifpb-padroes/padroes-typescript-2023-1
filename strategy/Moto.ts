import { IVeiculo } from "./IVeiculo";

export class Moto implements IVeiculo {
    public TempoChegada(distancia :number): string {
        return `Moto -> Tempo de chegada: ${distancia * 4} minutos`
    }
}