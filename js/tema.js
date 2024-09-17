let escuro = false;

// Função para aplicar o tema claro ou escuro
function aplicarTema() {
    let temaSalvo = localStorage.getItem('tema');
    escuro = temaSalvo === 'escuro'; // Definir a variável de estado do tema com base no valor salvo
    alterar(); // Aplicar o tema atual
}

// Função para alternar entre temas claro e escuro
function alterar() {
    let logado = document.getElementById('logado');
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
    let boxChartTres = document.getElementById('boxChartTres');
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
    let tituloChart1 = document.getElementById('destaque1');
    let tituloChart2 = document.getElementById('destaque2');
    let tituloChart3 = document.getElementById('destaque3');
    let iconSide1 = document.getElementById('iconSide1');
    let textoSide1 = document.getElementById('textoSide1');
    let iconSide2 = document.getElementById('iconSide2');
    let textoSide2 = document.getElementById('textoSide2');
    let iconSide3 = document.getElementById('iconSide3');
    let textoSide3 = document.getElementById('textoSide3');
    let iconSide4 = document.getElementById('iconSide4');
    let textoSide4 = document.getElementById('textoSide4');
    let iconSide5 = document.getElementById('iconSide5');
    let textoSide5 = document.getElementById('textoSide5');
    let iconSide6 = document.getElementById('iconSide6');
    let textoSide6 = document.getElementById('textoSide6');
    let iconSide7 = document.getElementById('iconSide7');
    let textoSide7 = document.getElementById('textoSide7');
    let iconSide8 = document.getElementById('iconSide8');
    let textoSide8 = document.getElementById('textoSide8');
    let iconSide9 = document.getElementById('iconSide9');
    let textoSide9 = document.getElementById('textoSide9');
    let textArea = document.getElementById('textArea');

    if (escuro) {
        // Tema Escuro
        document.body.style.backgroundColor = "#404040"; // Fundo escuro
        if (formularioRegistro) formularioRegistro.style.backgroundColor = "#202020"; // Fundo do formulário
        if (formularioLogin) formularioLogin.style.backgroundColor = "#202020"; // Fundo do formulário
        if (containerLogin) containerLogin.style.backgroundColor = "#202020"; // Fundo do container
        if (tituloRegistro) tituloRegistro.style.color = "#fff"; // Cor do texto
        if (tituloLogin) tituloLogin.style.color = "#fff"; // Cor do texto
        if (tituloUsuario) tituloUsuario.style.color = "#fff"; // Cor do texto
        if (containerLogado) containerLogado.style.backgroundColor = "#404040"; // Fundo escuro
        if (topbar) topbar.style.backgroundColor = "#202020"; // Fundo da topbar
        if (sidebar) sidebar.style.backgroundColor = "#404040"; // Fundo da sidebar
        if (centro) centro.style.backgroundColor = "#202020"; // Fundo do centro
        if (formUsuario) formUsuario.style.backgroundColor = "#202020"; // Fundo do formulário de usuário
        if (boxContato) boxContato.style.backgroundColor = "#202020"; // Fundo do box de contato
        if (texto) texto.style.color = "#fff"; // Cor do texto
        if (tituloAjuda) tituloAjuda.style.color = "#fff"; // Cor do texto
        if (subtitulo) subtitulo.style.color = "#fff"; // Cor do texto
        if (chartUm) chartUm.style.backgroundColor = "#404040"; // Fundo do gráfico
        if (chartDois) chartDois.style.backgroundColor = "#404040"; // Fundo do gráfico
        if (boxChartUm) boxChartUm.style.backgroundColor = "#404040"; // Fundo do box de gráfico
        if (boxChartDois) boxChartDois.style.backgroundColor = "#404040"; // Fundo do box de gráfico
        if (boxChartTres) boxChartTres.style.backgroundColor = "#404040"; // Fundo do box de gráfico
        if (boxCliente) boxCliente.style.backgroundColor = "#404040"; // Fundo do box de cliente
        if (boxProfessor) boxProfessor.style.backgroundColor = "#404040"; // Fundo do box de professor
        if (boxFuncionario) boxFuncionario.style.backgroundColor = "#404040"; // Fundo do box de funcionário
        if (boxGanhos) boxGanhos.style.backgroundColor = "#404040"; // Fundo do box de ganhos
        if (cor1) cor1.style.color = "#fff"; // Cor do cartão
        if (dado1) dado1.style.color = "#fff"; // Cor do dado
        if (icon1) icon1.style.color = "#fff"; // Cor do ícone
        if (cor2) cor2.style.color = "#fff"; // Cor do cartão
        if (dado2) dado2.style.color = "#fff"; // Cor do dado
        if (icon2) icon2.style.color = "#fff"; // Cor do ícone
        if (cor3) cor3.style.color = "#fff"; // Cor do cartão
        if (dado3) dado3.style.color = "#fff"; // Cor do dado
        if (icon3) icon3.style.color = "#fff"; // Cor do ícone
        if (cor4) cor4.style.color = "#fff"; // Cor do cartão
        if (dado4) dado4.style.color = "#fff"; // Cor do dado
        if (icon4) icon4.style.color = "#fff"; // Cor do ícone
        if (tituloChart1) tituloChart1.style.color = "#fff"; // Cor do título do gráfico
        if (tituloChart2) tituloChart2.style.color = "#fff"; // Cor do título do gráfico
        if (tituloChart3) tituloChart3.style.color = "#fff"; // Cor do título do gráfico
        if (logado) logado.style.color = "#fff"; // Cor do texto do logado
        
        // Descomentar se necessário
        // if (iconSide1) iconSide1.style.color = "#000";
        // if (textoSide1) textoSide1.style.color = "#000";
        // if (iconSide2) iconSide2.style.color = "#000";
        // if (textoSide2) textoSide2.style.color = "#000";
        // if (iconSide3) iconSide3.style.color = "#000";
        // if (textoSide3) textoSide3.style.color = "#000";
        // if (iconSide4) iconSide4.style.color = "#000";
        // if (textoSide4) textoSide4.style.color = "#000";
        // if (iconSide5) iconSide5.style.color = "#000";
        // if (textoSide5) textoSide5.style.color = "#000";
        // if (iconSide6) iconSide6.style.color = "#000";
        // if (textoSide6) textoSide6.style.color = "#000";
        // if (iconSide7) iconSide7.style.color = "#000";
        // if (textoSide7) textoSide7.style.color = "#000";
        // if (iconSide8) iconSide8.style.color = "#000";
        // if (textoSide8) textoSide8.style.color = "#000";
        // if (iconSide9) iconSide9.style.color = "#000";
        // if (textoSide9) textoSide9.style.color = "#000";
        // if (textArea) textArea.style.color = "#000";
    } else {
        // Tema Claro
        document.body.style.backgroundColor = "#f5f5f5"; // Fundo claro
        if (formularioRegistro) formularioRegistro.style.backgroundColor = "#ffffff"; // Fundo do formulário
        if (formularioLogin) formularioLogin.style.backgroundColor = "#ffffff"; // Fundo do formulário
        if (containerLogin) containerLogin.style.backgroundColor = "#ffffff"; // Fundo do container
        if (tituloRegistro) tituloRegistro.style.color = "#000"; // Cor do texto
        if (tituloLogin) tituloLogin.style.color = "#000"; // Cor do texto
        if (tituloUsuario) tituloUsuario.style.color = "#000"; // Cor do texto
        if (containerLogado) containerLogado.style.backgroundColor = "#f5f5f5"; // Fundo claro
        if (topbar) topbar.style.backgroundColor = "#ffffff"; // Fundo da topbar
        if (sidebar) sidebar.style.backgroundColor = "#f5f5f5"; // Fundo da sidebar
        if (centro) centro.style.backgroundColor = "#ffffff"; // Fundo do centro
        if (formUsuario) formUsuario.style.backgroundColor = "#ffffff"; // Fundo do formulário de usuário
        if (boxContato) boxContato.style.backgroundColor = "#ffffff"; // Fundo do box de contato
        if (texto) texto.style.color = "#000"; // Cor do texto
        if (tituloAjuda) tituloAjuda.style.color = "#000"; // Cor do texto
        if (subtitulo) subtitulo.style.color = "#000"; // Cor do texto
        if (chartUm) chartUm.style.backgroundColor = "#f5f5f5"; // Fundo do gráfico
        if (chartDois) chartDois.style.backgroundColor = "#f5f5f5"; // Fundo do gráfico
        if (boxChartUm) boxChartUm.style.backgroundColor = "#f5f5f5"; // Fundo do box de gráfico
        if (boxChartDois) boxChartDois.style.backgroundColor = "#f5f5f5"; // Fundo do box de gráfico
        if (boxChartTres) boxChartTres.style.backgroundColor = "#f5f5f5"; // Fundo do box de gráfico
        if (boxCliente) boxCliente.style.backgroundColor = "#f5f5f5"; // Fundo do box de cliente
        if (boxProfessor) boxProfessor.style.backgroundColor = "#f5f5f5"; // Fundo do box de professor
        if (boxFuncionario) boxFuncionario.style.backgroundColor = "#f5f5f5"; // Fundo do box de funcionário
        if (boxGanhos) boxGanhos.style.backgroundColor = "#f5f5f5"; // Fundo do box de ganhos
        if (cor1) cor1.style.color = "#000"; // Cor do cartão
        if (dado1) dado1.style.color = "#000"; // Cor do dado
        if (icon1) icon1.style.color = "#000"; // Cor do ícone
        if (cor2) cor2.style.color = "#000"; // Cor do cartão
        if (dado2) dado2.style.color = "#000"; // Cor do dado
        if (icon2) icon2.style.color = "#000"; // Cor do ícone
        if (cor3) cor3.style.color = "#000"; // Cor do cartão
        if (dado3) dado3.style.color = "#000"; // Cor do dado
        if (icon3) icon3.style.color = "#000"; // Cor do ícone
        if (cor4) cor4.style.color = "#000"; // Cor do cartão
        if (dado4) dado4.style.color = "#000"; // Cor do dado
        if (icon4) icon4.style.color = "#000"; // Cor do ícone
        if (tituloChart1) tituloChart1.style.color = "#000"; // Cor do título do gráfico
        if (tituloChart2) tituloChart2.style.color = "#000"; // Cor do título do gráfico
        if (tituloChart3) tituloChart3.style.color = "#000"; // Cor do título do gráfico
        if (logado) logado.style.color = "#000"; // Cor do texto do logado
        
        // Descomentar se necessário
        // if (iconSide1) iconSide1.style.color = "#000";
        // if (textoSide1) textoSide1.style.color = "#000";
        // if (iconSide2) iconSide2.style.color = "#000";
        // if (textoSide2) textoSide2.style.color = "#000";
        // if (iconSide3) iconSide3.style.color = "#000";
        // if (textoSide3) textoSide3.style.color = "#000";
        // if (iconSide4) iconSide4.style.color = "#000";
        // if (textoSide4) textoSide4.style.color = "#000";
        // if (iconSide5) iconSide5.style.color = "#000";
        // if (textoSide5) textoSide5.style.color = "#000";
        // if (iconSide6) iconSide6.style.color = "#000";
        // if (textoSide6) textoSide6.style.color = "#000";
        // if (iconSide7) iconSide7.style.color = "#000";
        // if (textoSide7) textoSide7.style.color = "#000";
        // if (iconSide8) iconSide8.style.color = "#000";
        // if (textoSide8) textoSide8.style.color = "#000";
        // if (iconSide9) iconSide9.style.color = "#000";
        // if (textoSide9) textoSide9.style.color = "#000";
        // if (textArea) textArea.style.color = "#000";
    }
}
