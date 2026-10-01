(function (ONG) {

    const CHAVE = 'ong_cadastros';

    function ler() {
        try {
            const dados = JSON.parse(localStorage.getItem(CHAVE));
            return Array.isArray(dados) ? dados : [];
        } catch (erro) {
            return [];
        }
    }

    function salvar(cadastro) {
        const lista = ler();
        lista.push(cadastro);
        try {
            localStorage.setItem(CHAVE, JSON.stringify(lista));
        } catch (erro) {
            console.warn('Não foi possível gravar no localStorage.', erro);
        }
    }

    function limpar() {
        localStorage.removeItem(CHAVE);
    }

    ONG.armazenamento = { ler: ler, salvar: salvar, limpar: limpar };

})(window.ONG = window.ONG || {});
