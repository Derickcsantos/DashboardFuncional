// IndexedDB para armazenar os dados
let db;
const request = indexedDB.open('DashboardDB', 1);

request.onupgradeneeded = function (event) {
    db = event.target.result;
    db.createObjectStore('chartsData', { keyPath: 'id' });
};

request.onsuccess = function (event) {
    db = event.target.result;
    carregarDados();
};

// Função para carregar dados do IndexedDB e atualizar os gráficos
function carregarDados() {
    const transaction = db.transaction(['chartsData'], 'readonly');
    const objectStore = transaction.objectStore('chartsData');
    const request = objectStore.get(1);

    request.onsuccess = function (event) {
        const data = event.target.result;
        if (data) {
            atualizarGraficos(data.valores);
        }
    };
}

// Função para criar os gráficos
function criarGraficos(valoresLine, valoresDoughnut, valoresBar) {
    const ctxLine = document.getElementById('lineChart').getContext('2d');
    const ctxDoughnut = document.getElementById('doughnut').getContext('2d');
    const ctxBar = document.getElementById('barChart').getContext('2d');

    // Gráfico de linha
    new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Ganhos em R$',
                data: valoresLine,
                backgroundColor: '#293eb3',
                borderColor: '#293eb3',
                borderWidth: 2,
                fill: false
            }]
        },
        options: { responsive: true }
    });

    // Gráfico doughnut
    new Chart(ctxDoughnut, {
        type: 'doughnut',
        data: {
            labels: ['Setor A', 'Setor B', 'Setor C'],
            datasets: [{
                data: valoresDoughnut,
                backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe'],
                hoverBackgroundColor: ['#ff6384', '#36a2eb', '#cc65fe']
            }]
        },
        options: { responsive: true }
    });

    // Gráfico de barras
    new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Vendas',
                data: valoresBar,
                backgroundColor: '#36a2eb',
                borderColor: '#36a2eb',
                borderWidth: 1
            }]
        },
        options: { responsive: true }
    });
}

// Função para atualizar os gráficos
function atualizarGraficos(valores) {
    const [valoresLine, valoresDoughnut, valoresBar] = valores;
    criarGraficos(valoresLine, valoresDoughnut, valoresBar);
}

// Manipulação do formulário
document.getElementById('chartForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Capturando os dados do formulário para os gráficos
    const valoresLine = [
        parseInt(document.getElementById('jan').value),
        parseInt(document.getElementById('feb').value),
        parseInt(document.getElementById('mar').value),
        parseInt(document.getElementById('apr').value),
        parseInt(document.getElementById('may').value),
        parseInt(document.getElementById('jun').value),
        parseInt(document.getElementById('jul').value),
        parseInt(document.getElementById('aug').value),
        parseInt(document.getElementById('sep').value),
        parseInt(document.getElementById('oct').value),
        parseInt(document.getElementById('nov').value),
        parseInt(document.getElementById('dec').value)
    ];

    const valoresDoughnut = [
        parseInt(document.getElementById('funcA').value),
        parseInt(document.getElementById('funcB').value),
        parseInt(document.getElementById('funcC').value)
    ];

    const valoresBar = [
        parseInt(document.getElementById('vendasJan').value),
        parseInt(document.getElementById('vendasFeb').value),
        parseInt(document.getElementById('vendasMar').value),
        parseInt(document.getElementById('vendasApr').value),
        parseInt(document.getElementById('vendasMay').value),
        parseInt(document.getElementById('vendasJun').value),
        parseInt(document.getElementById('vendasJul').value),
        parseInt(document.getElementById('vendasAug').value),
        parseInt(document.getElementById('vendasSep').value),
        parseInt(document.getElementById('vendasOct').value),
        parseInt(document.getElementById('vendasNov').value),
        parseInt(document.getElementById('vendasDec').value)
    ];

    // Atualizar gráficos
    atualizarGraficos([valoresLine, valoresDoughnut, valoresBar]);

    // Armazenar os dados no IndexedDB
    const transaction = db.transaction(['chartsData'], 'readwrite');
    const objectStore = transaction.objectStore('chartsData');
    objectStore.put({ id: 1, valores: [valoresLine, valoresDoughnut, valoresBar] });
});

// Inicializar gráficos com dados padrão na primeira carga
window.onload = function () {
    const valoresLineDefault = [2050, 1900, 2100, 1800, 2800, 2000, 2500, 2600, 2450, 1950, 2300, 2900];
    const valoresDoughnutDefault = [25, 35, 15];
    const valoresBarDefault = [1500, 1700, 1800, 1600, 2200, 2500, 2400, 2350, 2100, 1950, 2700, 3000];

    criarGraficos(valoresLineDefault, valoresDoughnutDefault, valoresBarDefault);
};
