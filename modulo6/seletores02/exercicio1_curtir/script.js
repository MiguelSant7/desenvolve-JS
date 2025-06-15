const nomes = [];

const botao = document.getElementById('curtir');
const input = document.getElementById('nome');
const resultado = document.getElementById('resultado');

botao.addEventListener('click', () => {
    const nome = input.value.trim();

    if (nome === '') {
        alert('Digite um nome!');
        return;
    }

    if (!nomes.includes(nome)) {
        nomes.push(nome);
    }

    atualizarTexto();
    input.value = '';
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
