import {IState} from './IState'

export class SadSim implements IState {
    trabalhar(): void{
      console.log("Não consigo trabalhar...estou triste");
    };
    mostraEstado(): string{
        return "triste";
      };
}