(function (ONG) {

    const app = document.getElementById('app');
    const menuToggle = document.getElementById('menu-toggle');

    app.addEventListener('input', function (evento) {
        const campo = evento.target;

        ONG.mascaras.aplicar(campo);

        if (campo.classList.contains('campo-erro') || campo.classList.contains('campo-ok')) {
            ONG.validacao.validarCampo(campo);
        }
    });

    app.addEventListener('focusout', function (evento) {
        if (evento.target.matches('input, select, textarea')) {
            ONG.validacao.validarCampo(evento.target);
        }
    });

    app.addEventListener('change', function (evento) {
        if (evento.target.matches('select')) {
            ONG.validacao.validarCampo(evento.target);
        }
    });

    app.addEventListener('submit', function (evento) {
        evento.preventDefault();

        const formulario = evento.target;
        const anterior = formulario.querySelector('.aviso-sucesso');
        if (anterior) anterior.remove();

        const invalido = ONG.validacao.validarFormulario(formulario);
        if (invalido) {
            invalido.focus();
            return;
        }

        const campoPerfil = formulario.querySelector('#perfil');
        if (campoPerfil) {
            ONG.armazenamento.salvar({
                nome: formulario.querySelector('#nome').value.trim(),
                perfil: campoPerfil.selectedOptions[0].text,
                data: new Date().toLocaleDateString('pt-BR')
            });
            ONG.templates.renderizarHistorico();
        }

        ONG.validacao.limparFormulario(formulario);

        const aviso = document.createElement('p');
        aviso.className = 'aviso-sucesso';
        aviso.setAttribute('role', 'status');
        aviso.textContent = 'Dados enviados com sucesso! Obrigado por participar.';
        formulario.appendChild(aviso);
    });

    app.addEventListener('click', function (evento) {
        if (evento.target.id === 'limpar-historico') {
            ONG.armazenamento.limpar();
            ONG.templates.renderizarHistorico();
        }
    });

    document.querySelector('.menu-lista').addEventListener('click', function (evento) {
        if (evento.target.closest('a')) {
            menuToggle.checked = false;
        }
    });

    document.addEventListener('keydown', function (evento) {
        if (evento.key === 'Escape') {
            menuToggle.checked = false;
        }
    });

})(window.ONG = window.ONG || {});

const btnTema = document.getElementById('btn-tema');

if (btnTema) {
    // Aplica o tema salvo
    if (localStorage.getItem('tema') === 'escuro') {
        document.documentElement.classList.add('dark-mode');
        btnTema.textContent = '☀️ Modo Claro';
    }

    btnTema.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark-mode');

        if (document.documentElement.classList.contains('dark-mode')) {
            btnTema.textContent = '☀️ Modo Claro';
            localStorage.setItem('tema', 'escuro');
        } else {
            btnTema.textContent = '🌙 Modo Escuro';
            localStorage.setItem('tema', 'claro');
        }
    });
}