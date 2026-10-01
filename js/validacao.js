// feature: validação de formulário com RegEx e mensagens no DOM
(function (ONG) {

    function cpfValido(cpf) {
        const d = cpf.replace(/\D/g, '');
        if (d.length !== 11 || /^(\d)\1{10}$/.test(d)) return false;
        for (let t = 9; t < 11; t++) {
            let soma = 0;
            for (let i = 0; i < t; i++) soma += Number(d[i]) * (t + 1 - i);
            const digito = ((soma * 10) % 11) % 10;
            if (digito !== Number(d[t])) return false;
        }
        return true;
    }

    const validadores = {
        nome: function (v) {
            return /^[A-Za-zÀ-ÿ' .-]{3,}$/.test(v) ? '' : 'Digite um nome com pelo menos 3 letras.';
        },
        cpf: function (v) {
            if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(v)) return 'Use o formato 000.000.000-00.';
            return cpfValido(v) ? '' : 'CPF inválido. Confira os números.';
        },
        email: function (v) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Digite um e-mail válido, como nome@exemplo.com.';
        },
        telefone: function (v) {
            return /^\(\d{2}\) \d{4,5}-\d{4}$/.test(v) ? '' : 'Use o formato (00) 00000-0000.';
        },
        nascimento: function (v) {
            return new Date(v) <= new Date() ? '' : 'A data de nascimento não pode ser no futuro.';
        },
        endereco: function (v) {
            return v.length >= 5 ? '' : 'Informe a rua e o número.';
        },
        cidade: function (v) {
            return v.length >= 2 ? '' : 'Informe a cidade.';
        },
        cep: function (v) {
            return /^\d{5}-\d{3}$/.test(v) ? '' : 'Use o formato 00000-000.';
        },
        mensagem: function (v) {
            return v.length >= 10 ? '' : 'Escreva pelo menos 10 caracteres.';
        }
    };

    function mostrarResultado(campo, erro) {
        const idAviso = 'erro-' + campo.id;
        let aviso = document.getElementById(idAviso);

        if (!aviso) {
            aviso = document.createElement('small');
            aviso.id = idAviso;
            aviso.className = 'mensagem-erro';
            aviso.setAttribute('role', 'status');
            campo.insertAdjacentElement('afterend', aviso);
        }

        aviso.textContent = erro;
        campo.classList.toggle('campo-erro', erro !== '');
        campo.classList.toggle('campo-ok', erro === '');
        campo.setAttribute('aria-invalid', erro !== '' ? 'true' : 'false');
        campo.setAttribute('aria-describedby', idAviso);
    }

    function validarCampo(campo) {
        const valor = campo.value.trim();
        let erro = '';

        if (campo.required && valor === '') {
            erro = 'Preencha este campo.';
        } else if (valor !== '' && validadores[campo.id]) {
            erro = validadores[campo.id](valor);
        }

        mostrarResultado(campo, erro);
        return erro === '';
    }

    function limparCampo(campo) {
        const aviso = document.getElementById('erro-' + campo.id);
        if (aviso) aviso.textContent = '';
        campo.classList.remove('campo-erro', 'campo-ok');
        campo.removeAttribute('aria-invalid');
    }

    function validarFormulario(formulario) {
        const campos = Array.from(formulario.querySelectorAll('input, select, textarea'));
        const resultados = campos.map(validarCampo);
        const indice = resultados.indexOf(false);
        return indice === -1 ? null : campos[indice];
    }

    function limparFormulario(formulario) {
        formulario.reset();
        formulario.querySelectorAll('input, select, textarea').forEach(limparCampo);
    }

    ONG.validacao = {
        validarCampo: validarCampo,
        validarFormulario: validarFormulario,
        limparFormulario: limparFormulario
    };

})(window.ONG = window.ONG || {});
