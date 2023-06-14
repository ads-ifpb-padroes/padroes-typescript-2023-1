"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bicicleta = void 0;
var Bicicleta = /** @class */ (function () {
    function Bicicleta() {
    }
    Bicicleta.prototype.TempoChegada = function (distancia) {
        return "Bicicleta -> Tempo de chegada: ".concat(distancia * 12, " minutos");
    };
    return Bicicleta;
}());
exports.Bicicleta = Bicicleta;
