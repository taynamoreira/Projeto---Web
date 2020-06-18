function validar() {

    var nome = document.getElementById("nome")
    var sobrenome = document.getElementById("sobrenome")
    var email = document.getElementById("email")
    var telefone = document.getElementById("telefone")
    var mensagem = document.getElementById("mensagem")

    if (nome.value.length == 0) {
        alert('Nome não informado!');
    }
    if (sobrenome.value.length == 0) {
        alert('Sobrenome não informado!');
    }
    if (email.value.length == 0) {
        alert('Email não informado!');
    }
    if (telefone.value.length == 0) {
        alert('Telefone não informado!');
    }
    if (mensagem.valu.length == 0) {
        alert('Digite sua mensagem!');

    } else {
        alert('Mensagem enviada!');
    }
}
