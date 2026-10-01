(function (ONG) {

    const app = document.getElementById('app');

    function renderizar() {
        const rota = (location.hash || '#/inicio').replace('#/', '');
        const filtros = ONG.templates.filtros;
        const ehProjetos = Object.prototype.hasOwnProperty.call(filtros, rota);
        const modelo = document.getElementById('rota-' + (ehProjetos ? 'projetos' : rota));

        app.replaceChildren();

        if (modelo) {
            app.appendChild(modelo.content.cloneNode(true));
            app.querySelectorAll('form').forEach(function (form) {
                form.setAttribute('novalidate', '');
            });
            if (ehProjetos) {
                ONG.templates.renderizarProjetos(filtros[rota]);
            }
            ONG.templates.renderizarHistorico();
        } else {
            app.innerHTML = '<section class="bloco-cadastro"><h2>Página não encontrada</h2></section>';
        }

        document.getElementById('menu-toggle').checked = false;
        window.scrollTo(0, 0);
    }

    window.addEventListener('hashchange', renderizar);
    window.addEventListener('DOMContentLoaded', renderizar);

    ONG.rotas = { renderizar: renderizar };

})(window.ONG = window.ONG || {});
