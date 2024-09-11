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
    let boxCliente = document.getElementById('boxCliente');
    let boxProfessor = document.getElementById('boxProfessor');
    let boxFuncionario = document.getElementById('boxFuncionario');
    let boxGanhos = document.getElementById('boxGanhos');
    let cor1 = document.getElementById('cardCor1');
    let dado1 = document.getElementById('dadoCor1');
    let icon1 = document.getElementById('iconCliente');
    let cor2 = document.getElementById('cardCor2');
    let dado2 = document.getElementById('dadoCor2');
    let icon2 = document.getElementById('iconProfessor');
    let cor3 = document.getElementById('cardCor3');
    let dado3 = document.getElementById('dadoCor3');
    let icon3 = document.getElementById('iconFuncionario');
    let cor4 = document.getElementById('cardCor4');
    let dado4 = document.getElementById('dadoCor4');
    let icon4 = document.getElementById('iconGanhos');

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
        if (boxProfessor) boxProfessor.style.backgroundColor = "#404040";
        if (boxFuncionario) boxFuncionario.style.backgroundColor = "#404040";
        if (boxGanhos) boxGanhos.style.backgroundColor = "#404040";
        if (cor1) cor1.style.color = "#fff";
        if (dado1) dado1.style.color = "#fff";
        if (icon1) icon1.style.color = "#fff";
        if (cor2) cor2.style.color = "#fff";
        if (dado2) dado2.style.color = "#fff";
        if (icon2) icon2.style.color = "#fff";
        if (cor3) cor3.style.color = "#fff";
        if (dado3) dado3.style.color = "#fff";
        if (icon3) icon3.style.color = "#fff";
        if (cor4) cor4.style.color = "#fff";
        if (dado4) dado4.style.color = "#fff";
        if (icon4) icon4.style.color = "#fff";
        



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
        if (boxCliente) boxCliente.style.backgroundColor = "#fff";
        if (boxProfessor) boxProfessor.style.backgroundColor = "#fff";
        if (boxFuncionario) boxFuncionario.style.backgroundColor = "#fff";
        if (boxGanhos) boxGanhos.style.backgroundColor = "#fff";
        if (cor1) cor1.style.color = "#888";
        if (dado1) dado1.style.color = "#888";
        if (icon1) icon1.style.color = "#888";
        if (cor2) cor2.style.color = "#888";
        if (dado2) dado2.style.color = "#888";
        if (icon2) icon2.style.color = "#888";
        if (cor3) cor3.style.color = "#888";
        if (dado3) dado3.style.color = "#888";
        if (icon3) icon3.style.color = "#888";
        if (cor4) cor4.style.color = "#888";
        if (dado4) dado4.style.color = "#888";
        if (icon4) icon4.style.color = "#888";

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
