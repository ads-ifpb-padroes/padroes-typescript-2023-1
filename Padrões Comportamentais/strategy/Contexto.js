"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var Bicicleta_1 = require("./Bicicleta");
var Moto_1 = require("./Moto");
var Contexto = /** @class */ (function () {
    function Contexto(strategy) {
        this.strategy = strategy;
    }
    Contexto.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    Contexto.prototype.executarEstrategia = function () {
        console.log("Executando o contexto...");
        console.log(this.strategy.TempoChegada(10));
    };
    return Contexto;
}());
var contexto = new Contexto(new Bicicleta_1.Bicicleta());
contexto.executarEstrategia();
contexto.setStrategy(new Moto_1.Moto());
contexto.executarEstrategia();
contexto.setStrategy(new Carro_1.Carro());
contexto.executarEstrategia();
