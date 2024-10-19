document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const cpf = document.getElementById('cpf').value;
    const dataNascimento = document.getElementById('dataNascimento').value;

    document.getElementById('mensagem').innerText = `Dados recebidos: CPF - ${cpf}, Data de Nascimento - ${dataNascimento}`;
});
