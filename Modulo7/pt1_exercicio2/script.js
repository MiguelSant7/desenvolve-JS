const botaoAdicionar = document.getElementById('adicionar');
const inputDescricao = document.getElementById('descricao');
const listaTarefas = document.getElementById('lista-tarefas');

// Carregar tarefas do localStorage
let tarefas = JSON.parse(localStorage.getItem('listaTarefas')) || [];

renderizarTarefas();

botaoAdicionar.addEventListener('click', () => {
    const descricao = inputDescricao.value.trim();

    if (descricao === '') {
        alert('Digite uma descrição!');
        return;
    }

    const tarefa = {
        descricao,
        status: false
    };

    tarefas.push(tarefa);
    salvarNoLocalStorage();
    inputDescricao.value = '';
    renderizarTarefas();
});

function renderizarTarefas() {
    listaTarefas.innerHTML = '';

    tarefas.forEach((tarefa, index) => {
        const li = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = tarefa.status;
        checkbox.addEventListener('change', () => {
            tarefa.status = checkbox.checked;
            salvarNoLocalStorage();
            renderizarTarefas();
        });

        const span = document.createElement('span');
        span.textContent = tarefa.descricao;
        if (tarefa.status) {
            span.classList.add('concluida');
        }

        const botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = 'Excluir';
        botaoExcluir.addEventListener('click', () => {
            tarefas.splice(index, 1);
            salvarNoLocalStorage();
            renderizarTarefas();
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(botaoExcluir);
        listaTarefas.appendChild(li);
    });
}

function salvarNoLocalStorage() {
    localStorage.setItem('listaTarefas', JSON.stringify(tarefas));
}
