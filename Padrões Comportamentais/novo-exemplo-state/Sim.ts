import {IState} from './IState';
import {AwakeSim} from './AwakeSim';
import {SleepySim} from './SleepySim';

class Sim {
  private emotion: IState;

  constructor() {
    this.setEmotion(new AwakeSim());
  };

  setEmotion(emotion: IState): void {
    this.emotion = emotion;
    console.log(`Seu sim está ${this.emotion.mostraEstado()}`);
  };

  irTrabalhar(): void {
    this.emotion.trabalhar();
  };

  comer(): void{
    console.log("Nham, comida #comendoPraFicarFeliz");
  }
  acordar(): void{
    console.log("Hmm, muito bom descansar!");
    this.setEmotion(new AwakeSim());
  }

  dormir(): void{
    console.log("Hora de sonhar");
    this.setEmotion(new SleepySim());
  }

  mostraEstado(): void{
    this.emotion.mostraEstado();
  }
}

const sim = new Sim();
sim.mostraEstado();
sim.setEmotion(new SleepySim);
sim.irTrabalhar();
sim.acordar();
sim.irTrabalhar();
sim.irTrabalhar();
sim.irTrabalhar();
sim.irTrabalhar();
sim.irTrabalhar();
sim.irTrabalhar();
sim.comer();
sim.comer();
sim.comer();
sim.comer();
sim.comer();
sim.comer();
sim.comer();
sim.irTrabalhar();
