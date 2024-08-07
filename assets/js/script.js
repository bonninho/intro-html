let nome = document.querySelector("#nome")
let aviso = document.querySelector("#aviso")
let assunto = document.querySelector("#assunto")
let tomada = document.querySelector("#tomada")

function validaNome() {

    let txtNome = document.querySelector('#txtNome')

    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    } else{
        txtNome.innerHTML = 'Nome válido!'
        txtNome.style.color = 'green'
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = "E-mail Válido"
        txtEmail.style.color = 'green'
    }

}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length > 300) {
        txtAssunto.innerHTML = 'Texto muito longo!'
        txtAssunto.style.color = 'red'
    } else {
        txtAssunto.innerHTML = ''
    }
}

function apagao() {
    tomada.style.visibility = "hidden";
    document.body.style.backgroundColor = "black";
    setTimeout(function () {
        alert("O que foi que eu disse?")
    }, 3000);
}