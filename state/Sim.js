"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AwakeSim_1 = require("./AwakeSim");
var SleepySim_1 = require("./SleepySim");
var HappySim_1 = require("./HappySim");
var SadSim_1 = require("./SadSim");
var Sim = /** @class */ (function () {
    function Sim() {
        this.happiness = 5;
        this.sadness = 0;
        this.setEmotion(new AwakeSim_1.AwakeSim());
    }
    ;
    Sim.prototype.setEmotion = function (emotion) {
        this.emotion = emotion;
        console.log("Seu sim est\u00E1 ".concat(this.emotion.mostraEstado()));
    };
    ;
    Sim.prototype.irTrabalhar = function () {
        this.emotion.trabalhar();
        this.sadness += 1;
        this.happiness -= 1;
        if (this.happiness == 0) {
            this.setEmotion(new SadSim_1.SadSim());
            this.emotion.mostraEstado();
        }
    };
    ;
    Sim.prototype.comer = function () {
        this.happiness += 1;
        this.sadness -= 1;
        console.log("Nham, comida #comendoPraFicarFeliz");
        if (this.sadness == 0) {
            this.setEmotion(new HappySim_1.HappySim());
        }
    };
    Sim.prototype.acordar = function () {
        console.log("Hmm, muito bom descansar!");
        this.setEmotion(new AwakeSim_1.AwakeSim());
    };
    Sim.prototype.dormir = function () {
        console.log("Hora de sonhar");
        this.setEmotion(new SleepySim_1.SleepySim());
    };
    Sim.prototype.mostraEstado = function () {
        this.emotion.mostraEstado();
    };
    return Sim;
}());
var sim = new Sim();
sim.mostraEstado();
sim.setEmotion(new SleepySim_1.SleepySim);
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
