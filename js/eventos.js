// Criação da lista de meses na barra lateral
const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

// Funções auxiliares
function obterDiasNoMes(ano, mes) {
    return new Date(ano, mes + 1, 0).getDate();
}

function primeiroDiaMes(ano, mes) {
    return new Date(ano, mes, 1).getDay();
}

// Cria o calendário
function criarCalendario(ano, mes) {
    const diasNoMes = obterDiasNoMes(ano, mes);
    const primeiroDia = primeiroDiaMes(ano, mes);

    const calendario = document.getElementById('calendario');
    calendario.innerHTML = '';

    // Exibir mês selecionado
    document.getElementById('mesSelecionado').textContent = meses[mes];

    // Cria o cabeçalho com os dias da semana
    const cabecalho = document.createElement('tr');
    const diasDaSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    diasDaSemana.forEach(dia => {
        const th = document.createElement('th');
        th.textContent = dia;
        cabecalho.appendChild(th);
    });
    calendario.appendChild(cabecalho);

    // Cria as linhas e colunas do calendário
    let data = 1;
    for (let i = 0; i < 6; i++) {
        const linha = document.createElement('tr');
        for (let j = 0; j < 7; j++) {
            const celula = document.createElement('td');
            if (i === 0 && j < primeiroDia) {
                celula.textContent = ''; // Células vazias no início
            } else if (data <= diasNoMes) {
                celula.textContent = data;
                celula.addEventListener('click', function() {
                    selecionarDia(celula, data, mes, ano);
                });
                data++;
            } else {
                break;
            }
            linha.appendChild(celula);
        }
        calendario.appendChild(linha);
    }
}

// Função para selecionar um dia
function selecionarDia(celula, dia, mes, ano) {
    // Limpa seleção anterior
    const selecionados = document.querySelectorAll('#calendario td.selecionado');
    selecionados.forEach(td => td.classList.remove('selecionado'));

    // Marca o dia como selecionado
    celula.classList.add('selecionado');

    // Exibe o dia, mês e ano na barra lateral direita
    document.getElementById('listaEventos').innerHTML = `<li>Dia: ${dia}, Mês: ${meses[mes]}, Ano: ${ano}</li>`;
}

// Atualiza o calendário para o mês e ano atual
let anoAtual = new Date().getFullYear();
let mesAtual = new Date().getMonth();
document.getElementById('ano-atual').textContent = anoAtual;
criarCalendario(anoAtual, mesAtual);

// Função para atualizar a exibição do calendário
function atualizarCalendario() {
    document.getElementById('ano-atual').textContent = anoAtual;
    criarCalendario(anoAtual, mesAtual);
}

// Funções de navegação de ano
document.querySelector('.anoAnterior').addEventListener('click', function() {
    anoAtual--;
    atualizarCalendario();
});

document.querySelector('.proximoAno').addEventListener('click', function() {
    anoAtual++;
    atualizarCalendario();
});

// Criação da lista de meses na barra lateral
function criarListaMeses() {
    const listaMeses = document.getElementById('meses');
    meses.forEach((nomeMes, indice) => {
        const li = document.createElement('li');
        li.textContent = nomeMes;
        li.addEventListener('click', function() {
            mesAtual = indice;
            atualizarCalendario();

            // Remover a classe "selecionado" de todos os meses
            document.querySelectorAll('#meses li').forEach(li => li.classList.remove('selecionado'));

            // Adicionar a classe "selecionado" ao mês clicado
            li.classList.add('selecionado');
        });
        listaMeses.appendChild(li);
    });
}

criarListaMeses();

// Função para adicionar eventos
document.getElementById('addEvento').addEventListener('click', function() {
    const evento = document.getElementById('AddTarefa').value;
    if (evento) {
        const listaEventos = document.getElementById('listaEventos');
        const itemEvento = document.createElement('li');
        itemEvento.textContent = evento;

        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.style.marginLeft = '30%';
        span.style.color = 'red';
        span.style.fontSize = '20px';
        span.style.cursor = 'pointer';
        listaEventos.appendChild(itemEvento);
        
        span.addEventListener('click', function() {
            listaEventos.removeChild(itemEvento);
        });

        itemEvento.appendChild(span);
        console.log('Tarefa adicionada com sucesso!')
    }
    else{
        console.log('Falha para adicionar tarefa')
    }
});
