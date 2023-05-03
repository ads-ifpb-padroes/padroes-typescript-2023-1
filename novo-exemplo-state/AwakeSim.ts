import {IState} from './IState'

export class AwakeSim implements IState {
    trabalhar(): void{
      console.log("O que posso fazer hoje? #Trabalhando");
    };
    mostraEstado(): string{
      return "acordado";
    };
  }