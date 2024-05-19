document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const categoriaField = document.getElementById('categoria');
    const outrosCampo = document.getElementById('outros-campo');
    const mensagemSucesso = document.getElementById('mensagem-sucesso');

    categoriaField.addEventListener('change', function() {
        if (categoriaField.value === 'outros') {
            outrosCampo.style.display = 'block';
        } else {
            outrosCampo.style.display = 'none';
        }
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nomeLoja = document.getElementById('nome-loja').value;
        const descricao = document.getElementById('descricao').value;
        const endereco = document.getElementById('endereco').value;
        const cep = document.getElementById('cep').value;
        const cidade = document.getElementById('cidade').value;
        const telefone = document.getElementById('telefone').value;
        const categoria = document.getElementById('categoria').value;
        const outros = document.getElementById('outros').value;
        const horarioFuncionamento = document.getElementById('horario-funcionamento').value;
        const email = document.getElementById('email').value;
        const loja = {
            nome: nomeLoja,
            descricao: descricao,
            endereco: endereco,
            cep: cep,
            cidade: cidade,
            telefone: telefone,
            categoria: categoria,
            outros: categoria === 'outros' ? outros : '',
            horarioFuncionamento: horarioFuncionamento,
            email: email
        };
        let lojas = JSON.parse(localStorage.getItem('lojas')) || [];
        lojas.push(loja);
        localStorage.setItem('lojas', JSON.stringify(lojas));
        mensagemSucesso.style.display = 'block';
        form.reset();
        outrosCampo.style.display = 'none';
        setTimeout(() => {
            mensagemSucesso.style.display = 'none';
        }, 3000);
    });
});
