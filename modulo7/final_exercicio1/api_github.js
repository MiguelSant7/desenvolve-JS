const btnBuscar = document.getElementById('btnBuscar');
const inputBusca = document.getElementById('busca');
const resultado = document.getElementById('resultado');
const mensagem = document.getElementById('mensagem');

btnBuscar.addEventListener('click', async () => {
  const termo = inputBusca.value.trim();
  resultado.innerHTML = '';
  mensagem.textContent = '';

  if (termo === '') {
    alert('Digite um nome de usuário!');
    return;
  }

  try {
    const response = await fetch(`https://api.github.com/search/users?q=${encodeURIComponent(termo)}`);
    const data = await response.json();

    if (data.total_count === 0) {
      mensagem.textContent = 'Não foram encontrados usuários para esta pesquisa.';
      return;
    }

    data.items.forEach(usuario => {
      const li = document.createElement('li');
      li.innerHTML = `
        <img src="${usuario.avatar_url}" class="avatar" />
        <a href="${usuario.html_url}" target="_blank">${usuario.login}</a>
      `;
      resultado.appendChild(li);
    });
  } catch (error) {
    mensagem.textContent = 'Erro ao buscar usuários. Tente novamente.';
    console.error(error);
  }
});
