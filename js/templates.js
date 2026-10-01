(function (ONG) {

    const projetos = [
        { titulo: 'Campanha Material Escolar', descricao: 'Arrecadação de kits escolares para crianças em situação de vulnerabilidade.', categoria: 'Doação' },
        { titulo: 'Biblioteca Comunitária', descricao: 'Arrecadação de livros para montar bibliotecas nas comunidades atendidas.', categoria: 'Doação' },
        { titulo: 'Reforço Escolar', descricao: 'Aulas de apoio pedagógico conduzidas por voluntários.', categoria: 'Voluntariado' },
        { titulo: 'Alfabetização de Adultos', descricao: 'Turmas noturnas para jovens e adultos que ainda não foram alfabetizados.', categoria: 'Voluntariado' }
    ];

    const filtros = {
        projetos: { categoria: null, titulo: 'Como ajudar' },
        doacoes: { categoria: 'Doação', titulo: 'Doações' },
        voluntariado: { categoria: 'Voluntariado', titulo: 'Voluntariado' }
    };

    function criarCartao(projeto) {
        return `
            <article class="cartao">
                <h3>${projeto.titulo}</h3>
                <p>${projeto.descricao}</p>
                <span class="etiqueta">${projeto.categoria}</span>
            </article>
        `;
    }

    function renderizarProjetos(filtro) {
        const titulo = document.getElementById('titulo-projetos');
        const lista = document.getElementById('lista-projetos');
        const itens = filtro.categoria
            ? projetos.filter(function (p) { return p.categoria === filtro.categoria; })
            : projetos;

        titulo.textContent = filtro.titulo;
        lista.innerHTML = itens.map(criarCartao).join('');
    }

    function renderizarHistorico() {
        const lista = document.getElementById('historico-cadastros');
        if (!lista) return;

        const cadastros = ONG.armazenamento.ler();
        lista.replaceChildren();

        if (cadastros.length === 0) {
            const vazio = document.createElement('li');
            vazio.textContent = 'Nenhum cadastro enviado ainda.';
            lista.appendChild(vazio);
            return;
        }

        cadastros.forEach(function (c) {
            const item = document.createElement('li');
            item.textContent = `${c.nome} - ${c.perfil} (${c.data})`;
            lista.appendChild(item);
        });
    }

    ONG.templates = {
        filtros: filtros,
        renderizarProjetos: renderizarProjetos,
        renderizarHistorico: renderizarHistorico
    };

})(window.ONG = window.ONG || {});
