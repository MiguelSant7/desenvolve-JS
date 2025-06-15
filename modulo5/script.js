// Função para calcular o tempo restante
function calcularTempoRestante(dataFutura) {
    const agora = new Date().getTime();
    const futuro = new Date(dataFutura).getTime();
    const diferenca = futuro - agora;

    const segundos = Math.floor((diferenca / 1000) % 60);
    const minutos = Math.floor((diferenca / 1000 / 60) % 60);
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    return {
        total: diferenca,
        dias,
        horas,
        minutos,
        segundos
    };
}

// Função para atualizar o temporizador na tela
function atualizarTemporizador() {
    const tempo = calcularTempoRestante("2025-12-31 23:59:59");
    const elemento = document.getElementById("temporizador");

    if (tempo.total <= 0) {
        elemento.innerHTML = "Tempo esgotado!";
        clearInterval(intervalo); // Para o temporizador
        return;
    }

    elemento.innerHTML = `
        ${tempo.dias} dias 
        ${tempo.horas} horas 
        ${tempo.minutos} minutos 
        ${tempo.segundos} segundos
    `;
}

// Atualiza o temporizador a cada segundo
const intervalo = setInterval(atualizarTemporizador, 1000);

// Atualiza sem esperar 1 segundo inicial
atualizarTemporizador();
