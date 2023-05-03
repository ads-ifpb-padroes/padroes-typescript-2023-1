import {IState} from './IState'

export class SleepySim implements IState {
    trabalhar(): void{
      console.log("Não consigo trabalhar, estou dormindo.");
    };
    mostraEstado(): string{
      return "dormindo";
    };
}