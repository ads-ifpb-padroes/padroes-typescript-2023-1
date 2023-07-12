function comida(propriedade:any){
    let valor: any;

    const getter = function (){
        console.log('Comendo ${valor}');
        return valor;
    };

    const setter = function (novoValor : any){
        console.log('Preparando ${novoValor}');
        valor = novoValor;
    };

    return {
        get: getter,
        set: setter,
    };
}

class Restaurante {
    @comida
    pratoPrincipal: string;

    constructor(prato:string){
        this.pratoPrincipal = prato;
    }
}

const meuRestaurante = new Restaurante('Pizza');
meuRestaurante.pratoPrincipal = 'Sushi';
console.log(meuRestaurante.pratoPrincipal);