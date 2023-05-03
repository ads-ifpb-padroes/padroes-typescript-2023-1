import {IState} from './IState';
import {AwakeSim} from './AwakeSim';
import {SleepySim} from './SleepySim';
import {HappySim} from './HappySim';
import {SadSim} from './SadSim';

class Sim {
  private emotion: IState;
  private happiness: number = 5;
  public sadness: number = 0;

  constructor() {
    this.setEmotion(new AwakeSim());
  };

  setEmotion(emotion: IState): void {
    this.emotion = emotion;
    console.log(`Seu sim está ${this.emotion.mostraEstado()}`);
  };

  irTrabalhar(): void {
    this.emotion.trabalhar();
    this.sadness += 1;
    this.happiness -= 1;

    if(this.happiness == 0){
      this.emotion.mostraEstado();
    }
  };

  comer(): void{
    this.happiness+= 1;
    this.sadness -= 1;

    console.log("Nham, comida #comendoPraFicarFeliz");

    if(this.sadness == 0){
      this.setEmotion(new HappySim());
    }
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
