import { ProdutoIndividual, ProdutoComposite } from './produto'

const Notebooks = new ProdutoComposite()
Notebooks.addProduto(new ProdutoIndividual('Macbook Pro', 14999))
Notebooks.addProduto(new ProdutoIndividual('Dell Vostro', 3299))

console.log('Preço total dos notenooks: ' + Notebooks.getPreco())
// Output: Preço total dos notenooks: 18298

const Livros = new ProdutoComposite()
Livros.addProduto(new ProdutoIndividual('Viagem ao Centro da Terra', 50))

const Mangas = new ProdutoComposite()
Mangas.addProduto(new ProdutoIndividual('CDZ: Next Dimension', 30))
Mangas.addProduto(new ProdutoIndividual('CDZ: The Lost Canvas', 35))

Livros.addProduto(Mangas)

console.log('Preço total dos livros: ' + Livros.getPreco())
// Output: Preço total dos livros: 115"
