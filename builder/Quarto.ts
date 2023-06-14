interface Builder{
    adicionarCama(): void;
    adicionarComoda(): void;
    adicionarMesa(): void;
    adicionarVentilador(): void;
    adicionarComputador(): void;
}

class MontarQuarto implements Builder{
    private quarto: Quarto;

    constructor (){
        this.quarto = new Quarto();
    }

    public reset(): void {
        this.quarto = new Quarto();
    }

    public adicionarCama(): void {
        this.quarto.itens.push("Cama");
    }
    public adicionarComoda(): void {
        this.quarto.itens.push("Comoda");
    }

    public adicionarMesa(): void {
        this.quarto.itens.push("Mesa");
    }
    public adicionarVentilador(): void{
        this.quarto.itens.push("Ventilador");
    }

    public adicionarComputador(): void {
        this.quarto.itens.push("Computador");
    }

    public getQuarto(): Quarto{
        const result = this.quarto;
        this.reset();
        return result;
    }
}

class Quarto {
    public itens : string[] = [];
    public listItens() : void{
        console.log(`Itens do quarto: ${this.itens.join(", ")}\n`);
    }
}

class Diretor {
    private builder: Builder;

    constructor(){
        this.builder = {} as Builder;
    }
    public setBuilder(builder: Builder): void {
        this.builder = builder;
    }
    public montarQuartoSimples(): void{
        this.builder.adicionarCama();
        this.builder.adicionarMesa();
    }
    public montarQuartoCompleto(): void{
        this.builder.adicionarCama();
        this.builder.adicionarMesa();
        this.builder.adicionarComputador();
        this.builder.adicionarVentilador();
        this.builder.adicionarComoda();
    }
}

function main(){
    const diretor = new Diretor();
    const builder = new MontarQuarto();
    diretor.setBuilder(builder);

    console.log("Quarto Simples");
    diretor.montarQuartoSimples();
    builder.getQuarto().listItens();

    console.log("Quarto Completo");
    diretor.montarQuartoCompleto();
    builder.getQuarto().listItens();

    console.log("Quarto Personalizado");
    builder.adicionarMesa();
    builder.adicionarComputador();
    builder.adicionarVentilador();
    builder.getQuarto().listItens;
}
main();
