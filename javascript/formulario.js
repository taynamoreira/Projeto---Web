function validar() {

    var nome = document.getElementById("nome")
    var sobrenome = document.getElementById("sobrenome")
    var email = document.getElementById("email")
    var telefone = document.getElementById("telefone")
    var mensagem = document.getElementById("mensagem")

    if (nome.value.length == 0) {
        alert('Nome não informado!')
        nome.focus();
        return;
    }
    if (sobrenome.value.length == 0) {
        alert('Sobrenome não informado!');
        sobrenome.focus();
        return;
    }
    if (email.value.length == 0) {
        alert('Email não informado!');
        email.focus();
        return;
    }
    if (telefone.value.length == 0) {
        alert('Telefone não informado!');
        telefone.focus();
        return;
    }
    if (mensagem.valu.length == 0) {
        alert('Digite sua mensagem!');
        mensagem.focus();
        return;
    } else {
        alert('Mensagem enviada!');
    }
}
