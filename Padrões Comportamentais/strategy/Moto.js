"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
var Moto = /** @class */ (function () {
    function Moto() {
    }
    Moto.prototype.TempoChegada = function (distancia) {
        return "Moto -> Tempo de chegada: ".concat(distancia * 4, " minutos");
    };
    return Moto;
}());
exports.Moto = Moto;
