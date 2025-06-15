// 1. Mudar o texto do título
const titulo = document.getElementById('titulo');
titulo.textContent = 'Título alterado via JavaScript';

// 2. Alterar o estilo dos itens da lista
const itens = document.querySelectorAll('#lista li');
itens.forEach(item => {
    item.classList.add('estilo-lista');
});

// 3. Adicionar uma classe a todos os parágrafos
const paragrafos = document.querySelectorAll('p');
paragrafos.forEach(p => {
    p.classList.add('destaque');
});

// 4. Alterar o texto do botão
const botao = document.getElementById('botao');
botao.textContent = 'Texto alterado';
