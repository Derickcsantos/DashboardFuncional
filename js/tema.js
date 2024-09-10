let escuro = false;

function alterar() {
    let formularioRegistro = document.getElementById('register-form');
    let formularioLogin = document.getElementById('login-form');
    let containerLogin = document.getElementById('containerLogin');
    let campo = document.getElementsByTagName('input');
    let letra = document.getElementsByTagName('label');
    let tituloRegistro = document.getElementById('tituloRegistro');
    let tituloLogin = document.getElementById('tituloLogin');
    let tituloUsuario = document.getElementById('titleUser');
    let containerLogado = document.getElementById('containerLogado');
    let topbar = document.getElementById('topbar');
    let main = document.getElementById('main');
    let sidebar = document.getElementById('side');
    let centro = document.getElementById('centro');
    let texto = document.getElementById('introducao');
    let tituloAjuda = document.getElementById('tituloAjuda');
    let subtitulo = document.getElementById('subtitulo');
    let formUsuario = document.getElementById('update-form');
    let boxContato = document.getElementById('boxContato');
    let chartUm = document.getElementById('lineChart');
    let chartDois = document.getElementById('doughnut');
    let boxChartUm = document.getElementById('boxChartUm');
    let boxChartDois = document.getElementById('boxChartDois');

    if (!escuro) {
        document.body.style.backgroundColor = "#404040";
        if (formularioRegistro) formularioRegistro.style.backgroundColor = "#202020";
        if (formularioLogin) formularioLogin.style.backgroundColor = "#202020";
        if (containerLogin) containerLogin.style.backgroundColor = "#202020";
        if (tituloRegistro) tituloRegistro.style.color = "white";
        if (tituloLogin) tituloLogin.style.color = "white";
        if (tituloUsuario) tituloUsuario.style.color = "white";
        if (containerLogado) containerLogado.style.backgroundColor = "#404040"; // Ajustado para escuro
        if (topbar) topbar.style.backgroundColor = "#202020";
        if (sidebar) sidebar.style.backgroundColor = "#293eb3";
        if (centro) centro.style.backgroundColor = "#202020";
        if (formUsuario) formUsuario.style.backgroundColor = "#202020";
        if (boxContato) boxContato.style.backgroundColor = "#202020";
        if (texto) texto.style.color = "#fff";
        if (tituloAjuda) tituloAjuda.style.color = "#fff";
        if (subtitulo) subtitulo.style.color = "#fff";
        if (chartUm) chartUm.style.backgroundColor = "#404040";
        if (chartDois) chartDois.style.backgroundColor = "#404040";
        if (boxChartUm) boxChartUm.style.backgroundColor = "#404040";
        if (boxChartDois) boxChartDois.style.backgroundColor = "#404040";
        if (boxCliente) boxCliente.style.backgroundColor = "#404040";

        for (let i = 0; i < campo.length; i++) {
            campo[i].style.backgroundColor = "#404040";
        }
        for (let i = 0; i < letra.length; i++) {
            letra[i].style.color = "white"; // Ajustado para escuro
        }

        escuro = true;
        localStorage.setItem('tema', 'escuro');
    } else {
        document.body.style.backgroundColor = "#fff";
        if (formularioRegistro) formularioRegistro.style.backgroundColor = "#fff";
        if (formularioLogin) formularioLogin.style.backgroundColor = "#fff";
        if (containerLogin) containerLogin.style.backgroundColor = "#fff";
        if (tituloRegistro) tituloRegistro.style.color = "#000";
        if (tituloLogin) tituloLogin.style.color = "#000";
        if (tituloUsuario) tituloUsuario.style.color = "#000";
        if (containerLogado) containerLogado.style.backgroundColor = "lightgray"; // Ajustado para claro
        if (topbar) topbar.style.backgroundColor = "#fff";
        if (sidebar) sidebar.style.backgroundColor = "#293eb3";
        if (centro) centro.style.backgroundColor = "#fff";
        if (texto) texto.style.color = "#000";
        if (tituloAjuda) tituloAjuda.style.color = "#000";
        if (subtitulo) subtitulo.style.color = "#000";
        if (chartUm) chartUm.style.backgroundColor = "#fff";
        if (chartDois) chartDois.style.backgroundColor = "#fff";
        if (boxChartUm) boxChartUm.style.backgroundColor = "#fff";
        if (boxChartDois) boxChartDois.style.backgroundColor = "#fff";

        for (let i = 0; i < campo.length; i++) {
            campo[i].style.backgroundColor = "white";
        }
        for (let i = 0; i < letra.length; i++) {
            letra[i].style.color = "black";
        }

        if (main) main.style.backgroundColor = "#fff"; // Corrigido para claro

        escuro = false;
        localStorage.setItem('tema', 'claro');
    }
}

function aplicarTema() {
    let temaSalvo = localStorage.getItem('tema');
    if (temaSalvo === 'escuro') {
        escuro = true;
        alterar(); // Aplicar tema escuro automaticamente
    } else {
        escuro = false;
        alterar(); // Aplicar tema claro automaticamente
    }
}

window.onload = aplicarTema;
