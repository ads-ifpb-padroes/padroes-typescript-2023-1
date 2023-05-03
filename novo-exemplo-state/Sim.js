"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AwakeSim_1 = require("./AwakeSim");
var SleepySim_1 = require("./SleepySim");

var Sim = /** @class */ (function () {
    function Sim() {
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
    };
    ;
    Sim.prototype.comer = function () {
        console.log("Nham, comida #comendoPraFicarFeliz");
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
    return new Sim();
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
