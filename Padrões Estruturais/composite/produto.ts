interface ProdutoInterface {
    getPreco(): number
    addProduto(produto: ProdutoInterface): void
}

export class ProdutoIndividual implements ProdutoInterface {
    constructor(
        public nome: string,
        private preco: number
    ) {}

    getPreco() {
        return this.preco
    }
    addProduto(produto: ProdutoInterface): void {
        return
    }
}

export class ProdutoComposite implements ProdutoInterface {
    private produtos: ProdutoInterface[] = []

    getPreco() {
        let total = 0
        this.produtos.forEach(element => {
            total += element.getPreco()
        });
        return total
    }
    addProduto(produto: ProdutoInterface): void {
        this.produtos.push(produto)
    }
}
