import {IState} from './IState'

export class HappySim implements IState {
    trabalhar(): any{
      console.log("Que ótimo dia para trabalhar :). #Trabalhando");
    };
    mostraEstado(): string{
        return "feliz";
      };
}