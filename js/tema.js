let escuro = false;

// Função para aplicar o tema claro ou escuro
function aplicarTema() {
    let temaSalvo = localStorage.getItem('tema');
    escuro = temaSalvo === 'escuro'; // Definir a variável de estado do tema com base no valor salvo
    alterar(); // Aplicar o tema atual
}

// Função para alternar entre temas claro e escuro
function toggleTema() {
    escuro = !escuro; // Alterna o estado do tema
    localStorage.setItem('tema', escuro ? 'escuro' : 'claro'); // Salva a preferência do tema
    alterar(); // Aplica o novo tema
}

// Função para alterar o tema do documento
function alterar() {
    let elements = {
        body: document.body,
        formularioRegistro: document.getElementById('register-form'),
        formularioLogin: document.getElementById('login-form'),
        containerLogin: document.getElementById('containerLogin'),
        tituloRegistro: document.getElementById('tituloRegistro'),
        tituloLogin: document.getElementById('tituloLogin'),
        containerLogado: document.getElementById('containerLogado'),
        topbar: document.getElementById('topbar'),
        sidebar: document.getElementById('side'),
        centro: document.getElementById('centro'),
        texto: document.getElementById('introducao'),
        tituloAjuda: document.getElementById('tituloAjuda'),
        subtitulo: document.getElementById('subtitulo'),
        formUsuario: document.getElementById('update-form'),
        boxContato: document.getElementById('boxContato'),
        chartUm: document.getElementById('lineChart'),
        chartDois: document.getElementById('doughnut'),
        boxChartUm: document.getElementById('boxChartUm'),
        boxChartDois: document.getElementById('boxChartDois'),
        boxChartTres: document.getElementById('boxChartTres'),
        boxCliente: document.getElementById('boxCliente'),
        boxProfessor: document.getElementById('boxProfessor'),
        boxFuncionario: document.getElementById('boxFuncionario'),
        boxGanhos: document.getElementById('boxGanhos'),
        cor1: document.getElementById('cardCor1'),
        dado1: document.getElementById('dadoCor1'),
        icon1: document.getElementById('iconCliente'),
        cor2: document.getElementById('cardCor2'),
        dado2: document.getElementById('dadoCor2'),
        icon2: document.getElementById('iconProfessor'),
        cor3: document.getElementById('cardCor3'),
        dado3: document.getElementById('dadoCor3'),
        icon3: document.getElementById('iconFuncionario'),
        cor4: document.getElementById('cardCor4'),
        dado4: document.getElementById('dadoCor4'),
        icon4: document.getElementById('iconGanhos'),
        tituloChart1: document.getElementById('destaque1'),
        tituloChart2: document.getElementById('destaque2'),
        tituloChart3: document.getElementById('destaque3'),
        logado: document.getElementById('logado'),
        textArea: document.getElementById('textArea')
    };

    if (escuro) {
        // Aplicar tema escuro
        elements.body.style.backgroundColor = "#202020";
        if (elements.sidebar) {
            elements.sidebar.style.backgroundColor = "#404040";
        }
        
        for (let key in elements) {
            if (elements[key]) {
                if (key === 'body' || key === 'sidebar') continue; // body e sidebar já estão configurados
                elements[key].style.backgroundColor = "#202020";
                elements[key].style.color = "#fff";
            }
        }
    } else {
        // Aplicar tema claro
        elements.body.style.backgroundColor = "#fff";
        if (elements.sidebar) {
            elements.sidebar.style.backgroundColor = "#154dc5"; // Cor do sidebar no tema claro
        }
    
        for (let key in elements) {
            if (elements[key]) {
                if (key === 'body' || key === 'sidebar') continue; // body e sidebar já estão configurados
                elements[key].style.backgroundColor = "#fff";
                elements[key].style.color = "#293eb3";
            }
        }
    }
}

// Aplica o tema ao carregar a página
document.addEventListener('DOMContentLoaded', aplicarTema);
