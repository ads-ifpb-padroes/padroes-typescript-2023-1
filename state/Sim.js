"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HappySim_1 = require("./HappySim");
var SadSim_1 = require("./SadSim");
var InspiredSim_1 = require("./InspiredSim");
var Sim = /** @class */ (function () {
    function Sim() {
        this.emotion = new HappySim_1.HappySim;
    }
    Sim.prototype.setEmotion = function (emotion) {
        this.emotion = emotion;
    };
    Sim.prototype.pensar = function () {
        console.log("Pensamento do momento:");
        this.emotion.pensamento();
    };
    return Sim;
}());
var sim = new Sim();
sim.pensar();
sim.setEmotion(new InspiredSim_1.InspiredSim());
sim.pensar();
sim.setEmotion(new SadSim_1.SadSim());
sim.pensar();
