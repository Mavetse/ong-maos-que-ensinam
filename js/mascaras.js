(function (ONG) {

    function cpf(valor) {
        const d = valor.replace(/\D/g, '').slice(0, 11);
        return d
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }

    function telefone(valor) {
        const d = valor.replace(/\D/g, '').slice(0, 11);
        if (d.length > 10) return d.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        if (d.length > 6) return d.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
        if (d.length > 2) return d.replace(/(\d{2})(\d{0,5})/, '($1) $2');
        return d;
    }

    function cep(valor) {
        const d = valor.replace(/\D/g, '').slice(0, 8);
        return d.length > 5 ? d.replace(/(\d{5})(\d{1,3})/, '$1-$2') : d;
    }

    function aplicar(campo) {
        if (campo.id === 'cpf') campo.value = cpf(campo.value);
        if (campo.id === 'telefone') campo.value = telefone(campo.value);
        if (campo.id === 'cep') campo.value = cep(campo.value);
    }

    ONG.mascaras = { cpf: cpf, telefone: telefone, cep: cep, aplicar: aplicar };

})(window.ONG = window.ONG || {});
