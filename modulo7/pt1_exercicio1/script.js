const botaoCurtir = document.getElementById('curtir');
const botaoLimpar = document.getElementById('limpar');
const input = document.getElementById('nome');
const resultado = document.getElementById('resultado');

// Carregar nomes do localStorage ou iniciar array vazio
let nomes = JSON.parse(localStorage.getItem('nomesCurtida')) || [];

atualizarTexto();

botaoCurtir.addEventListener('click', () => {
    const nome = input.value.trim();

    if (nome === '') {
        alert('Digite um nome!');
        return;
    }

    if (!nomes.includes(nome)) {
        nomes.push(nome);
        salvarNoLocalStorage();
    }

    atualizarTexto();
    input.value = '';
});

botaoLimpar.addEventListener('click', () => {
    nomes = [];
    localStorage.removeItem('nomesCurtida');
    atualizarTexto();
});

function atualizarTexto() {
    const quantidade = nomes.length;

    if (quantidade === 0) {
        resultado.textContent = 'Ninguém curtiu';
    } else if (quantidade === 1) {
        resultado.textContent = `${nomes[0]} curtiu`;
    } else if (quantidade === 2) {
        resultado.textContent = `${nomes[0]} e ${nomes[1]} curtiram`;
    } else {
        resultado.textContent = `${nomes[0]}, ${nomes[1]} e mais ${quantidade - 2} pessoas curtiram`;
    }
}

function salvarNoLocalStorage() {
    localStorage.setItem('nomesCurtida', JSON.stringify(nomes));
}
