let escuro = false;

function alterar(){
    let formularioRegistro = document.getElementById('register-form')
    let formularioLogin = document.getElementById('login-form')
    let container = document.getElementById('container')
    let campo = document.getElementsByTagName('input')
    let letra = document.getElementsByTagName('label')
    let tituloRegistro = document.getElementById('tituloRegistro')
    let tituloLogin = document.getElementById('tituloLogin')

    if(!escuro) {
        document.body.style.backgroundColor = "#404040";
        formularioRegistro.style.backgroundColor = "#202020";
        formularioLogin.style.backgroundColor = "#202020";
        container.style.backgroundColor = "#202020";
        tituloRegistro.style.color = "white";
        tituloLogin.style.color = "white";

        for (let i = 0; i < campo.length; i++) {
        campo[i].style.backgroundColor = "#404040";
        }
        for (let i = 0; i < letra.length; i++) {
        letra[i].style.color = "white"; // Mudar a cor da fonte do label
        }

        escuro = true;
    }
    else{
        escuro = true; 
    
        document.body.style.backgroundColor = "#fff";
        formularioRegistro.style.backgroundColor = "#fff";
        formularioLogin.style.backgroundColor = "#fff";
        container.style.backgroundColor = "#fff";
        tituloRegistro.style.color = "#000";
        tituloLogin.style.color = "#000";

        for (let i = 0; i < campo.length; i++) {
            campo[i].style.backgroundColor = "white";
        }
        for (let i = 0; i < letra.length; i++) {
            letra[i].style.color = "black";
        }

        escuro = false; // Atualizar o estado do tema para claro
    }

}