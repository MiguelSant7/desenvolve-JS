const tarefas = [];

const botaoAdicionar = document.getElementById('adicionar');
const inputDescricao = document.getElementById('descricao');
const listaTarefas = document.getElementById('lista-tarefas');

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
            renderizarTarefas();
        });

        const span = document.createElement('span');
        span.textContent = tarefa.descricao;
        if (tarefa.status) {
            span.classList.add('concluida');
        }

        li.appendChild(checkbox);
        li.appendChild(span);
        listaTarefas.appendChild(li);
    });
}
