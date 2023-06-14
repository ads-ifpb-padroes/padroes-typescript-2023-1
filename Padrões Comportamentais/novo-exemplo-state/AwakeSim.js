"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwakeSim = void 0;
var AwakeSim = /** @class */ (function () {
    function AwakeSim() {
    }
    AwakeSim.prototype.trabalhar = function () {
        console.log("O que posso fazer hoje? #Trabalhando");
    };
    ;
    AwakeSim.prototype.mostraEstado = function () {
        return "acordado";
    };
    ;
    return new AwakeSim();
}());
exports.AwakeSim = AwakeSim;
