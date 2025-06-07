// Criando Array de livros
const estoqueLivros = [];

// FUNÇÕES
// Adicionar livro
function adicionarLivro(titulo, autor, quantidade) {
    // Condição para verificar se livro existe no estoque
    const livroExistente = estoqueLivros.find(livro => livro.titulo === titulo);
    if (livroExistente) {
        console.log(`O livro "${titulo}" já existe no estoque.`);
    } else {
        estoqueLivros.push({ titulo, autor, quantidade });
        console.log(`Livro "${titulo}" adicionado ao estoque.`);
    }
}

// Função para remover livro
function removerLivro(titulo) {
    const index = estoqueLivros.findIndex(livro => livro.titulo === titulo);
    if (index !== -1) {
        estoqueLivros.splice(index, 1);
        console.log(`Livro "${titulo}" removido do estoque.`);
    } else {
        console.log(`Livro "${titulo}" não encontrado no estoque.`);
    }
}

// Função para atualizar quantidade de livro
function atualizarQuantidade(titulo, novaQuantidade) {
    const livro = estoqueLivros.find(livro => livro.titulo === titulo);
    if (livro) {
        livro.quantidade = novaQuantidade;
        console.log(`Quantidade do livro "${titulo}" atualizada para ${novaQuantidade}.`);
    } else {
        console.log(`Livro "${titulo}" não encontrado no estoque.`);
    }
}

// função para buscar livro
function listarLivros() {
    if (estoqueLivros.length === 0) {
        console.log("O estoque está vazio.");
    } else {
        console.log("Livros disponíveis no estoque:");
        estoqueLivros.forEach(livro => {
            console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}, Quantidade: ${livro.quantidade}`);
        });
    }
}



// TESTE
adicionarLivro("O Senhor dos Anéis", "J.R.R. Tolkien", 5);
adicionarLivro("1984", "George Orwell", 3);
listarLivros();

atualizarQuantidade("1984", 10);
removerLivro("O Senhor dos Anéis");
listarLivros();
