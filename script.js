document.getElementById('categoria').addEventListener('change', function(event) {
    const categoriaSelecionada = event.target.value;
    const outrosCampo = document.getElementById('outros-campo');

    if (categoriaSelecionada === 'outros') {
        outrosCampo.style.display = 'block';
    } else {
        outrosCampo.style.display = 'none';
    }
});

document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nomeLoja = document.getElementById('nome-loja').value;
    const descricao = document.getElementById('descricao').value;
    const endereco = document.getElementById('endereco').value;
    const cep = document.getElementById('cep').value;
    const cidade = document.getElementById('cidade').value;
    const telefone = document.getElementById('telefone').value;
    const categoria = document.getElementById('categoria').value;
    const horarioFuncionamento = document.getElementById('horario-funcionamento').value;
    const email = document.getElementById('email').value;
    let outros = '';

    if (categoria === 'outros') {
        outros = document.getElementById('outros').value;
    }

    const dadosLoja = {
        nomeLoja,
        descricao,
        endereco,
        cep,
        cidade,
        telefone,
        categoria,
        outros,
        horarioFuncionamento,
        email
    };

    const dadosJson = JSON.stringify(dadosLoja);

    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: dadosJson
    })
    .then(response => response.json())
    .then(data => {
        console.log('Cadastro realizado com sucesso:', data);
        document.getElementById('mensagem-sucesso').style.display = 'block';
        document.getElementById('registration-form').reset();
        setTimeout(function() {
            document.getElementById('mensagem-sucesso').style.display = 'none';
        }, 3000); 
    })
    .catch((error) => {
        console.error('Erro:', error);
    });
});
