import {IEmotion} from './IEmotion';
import {HappySim} from './HappySim'
import {SadSim} from './SadSim'
import {InspiredSim} from './InspiredSim'

class Sim {
  private emotion: IEmotion;

  constructor() {
    this.emotion = new HappySim;
  }

  setEmotion(emotion: IEmotion): void {
    this.emotion = emotion;
  }

  pensar(): void {
    console.log("Pensamento do momento:");
    this.emotion.pensamento();
  }
}

const sim = new Sim();
sim.pensar(); //Pensamento do momento: é com essa alegria que eu vou programar hoje :D #Feliz

sim.setEmotion(new InspiredSim());
sim.pensar();//Pensamento do momento: Acho que hoje vou criar uma nova linguagem de programação B) #Inspirado

sim.setEmotion(new SadSim());
sim.pensar();//Pensamento do momento: O código quebrou :( #Triste
