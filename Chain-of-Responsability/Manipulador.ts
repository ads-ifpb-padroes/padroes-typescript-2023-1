interface Manipulador {
    setProximo(manipulador: Manipulador): Manipulador;
    manipularPedido(pedido: string): string;
}

abstract class ManipuladorAbstrato implements Manipulador {
    private proximoManipulador!: Manipulador;

    public setProximo(manipulador: Manipulador): Manipulador {
        this.proximoManipulador = manipulador;
        return manipulador;
    }

    public manipularPedido(pedido: string): string {
        if (this.proximoManipulador) {
            return this.proximoManipulador.manipularPedido(pedido);
        }
        return "Requisição não aceita!";
    }
}

class PrimeiroManipulador extends ManipuladorAbstrato {
    public manipularPedido(pedido: string): string {
        if (pedido === "primeiro") {
            return `Primeiro manipulador manipulou o pedido: ${pedido}`;
        }
        return super.manipularPedido(pedido);
    }
}

class SegundoManipulador extends ManipuladorAbstrato {
    public manipularPedido(pedido: string): string {
        if (pedido === "segundo") {
            return `Segundo manipulador manipulou o pedido: ${pedido}`;
        }
        return super.manipularPedido(pedido);
    }
}

class TerceiroManipulador extends ManipuladorAbstrato {
    public manipularPedido(pedido: string): string {
        if (pedido === "terceiro") {
            return `Terceiro manipulador manipulou o pedido: ${pedido}`;
        }
        return super.manipularPedido(pedido);
    }
}

const primeiroManipulador = new PrimeiroManipulador();
const segundoManipulador = new SegundoManipulador();
const terceiroManipulador = new TerceiroManipulador();

primeiroManipulador.setProximo(segundoManipulador).setProximo(terceiroManipulador);

console.log(primeiroManipulador.manipularPedido("terceiro")); // Output: Terceiro manipulador manipulou o pedido: terceiro
console.log(primeiroManipulador.manipularPedido("segundo")); // Output: Segundo manipulador manipulou o pedido: segundo
console.log(primeiroManipulador.manipularPedido("primeiro")); // Output: Primeiro manipulador manipulou o pedido: primeiro
console.log(primeiroManipulador.manipularPedido("quarto")); // Output: Requisição não aceita! 