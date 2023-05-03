"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SleepySim = void 0;
var SleepySim = /** @class */ (function () {
    function SleepySim() {
    }
    SleepySim.prototype.trabalhar = function () {
        console.log("Não consigo trabalhar, estou dormindo.");
    };
    ;
    SleepySim.prototype.mostraEstado = function () {
        return "dormindo";
    };
    ;
    return new SleepySim();
}());
exports.SleepySim = SleepySim;
