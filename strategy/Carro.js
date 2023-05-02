"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
var Carro = /** @class */ (function () {
    function Carro() {
    }
    Carro.prototype.TempoChegada = function (distancia) {
        return "Carro -> Tempo de chegada: ".concat(distancia * 6, " minutos");
    };
    return Carro;
}());
exports.Carro = Carro;
