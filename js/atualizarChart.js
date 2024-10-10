let myLineChart, myDoughnutChart, myBarChart;

document.addEventListener('DOMContentLoaded', function () {
    inicializarGraficos();
});

function inicializarGraficos() {
    const valoresLine = JSON.parse(localStorage.getItem('lineChartData')) || [2050, 1900, 2100, 1800, 2800, 2000, 2500, 2600, 2450, 1950, 2300, 2900];
    const valoresDoughnut = JSON.parse(localStorage.getItem('doughnutChartData')) || [42, 12, 8, 6];
    const valoresBar = JSON.parse(localStorage.getItem('barChartData')) || [65, 88, 10, 40];

    const ctx1 = document.getElementById('lineChart').getContext('2d');
    myLineChart = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            datasets: [{
                label: 'Ganhos em R$',
                data: valoresLine,
                backgroundColor: '#293eb3',
                borderColor: '#293eb3',
                borderWidth: 1
            }]
        },
        options: { responsive: true }
    });

    const ctx2 = document.getElementById('doughnut').getContext('2d');
    myDoughnutChart = new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: ['Operários', 'T.I', 'Administração', 'Outros'],
            datasets: [{
                label: 'Employees',
                data: valoresDoughnut,
                backgroundColor: [
                    'rgba(41,155,91,1)',
                    'rgba(54,162,255,1)',
                    'rgba(255,206,86,1)',
                    'rgba(120,46,139,1)'
                ],
                borderColor: [
                    'rgba(41,155,91,1)',
                    'rgba(54,162,255,1)',
                    'rgba(255,206,86,1)',
                    'rgba(120,46,139,1)'
                ],
                borderWidth: 1
            }]
        },
        options: { responsive: true }
    });

    const ctx3 = document.getElementById('barChart').getContext('2d');
    myBarChart = new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: ['1 Trimestre', '2 Trimestre', '3 Trimestre', '4 Trimestre'],
            datasets: [{
                label: 'últimos 12 meses',
                data: valoresBar,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    atualizarTotalDoughnut();
}

function atualizarGraficos() {
    const valoresLine = JSON.parse(localStorage.getItem('lineChartData')) || [2050, 1900, 2100, 1800, 2800, 2000, 2500, 2600, 2450, 1950, 2300, 2900];
    const valoresDoughnut = JSON.parse(localStorage.getItem('doughnutChartData')) || [42, 12, 8, 6];
    const valoresBar = JSON.parse(localStorage.getItem('barChartData')) || [65, 88, 10, 40];

    myLineChart.data.datasets[0].data = valoresLine;
    myLineChart.update();

    myDoughnutChart.data.datasets[0].data = valoresDoughnut;
    myDoughnutChart.update();

    myBarChart.data.datasets[0].data = valoresBar;
    myBarChart.update();

    atualizarTotalDoughnut();


    const totalGanhos = valoresLine.reduce((acc, val) => acc + val, 0);
    document.getElementById('dadoCor4').textContent = `R$${totalGanhos}`;
}

function atualizarTotalDoughnut() {
    const valoresDoughnut = JSON.parse(localStorage.getItem('doughnutChartData')) || [42, 12, 8, 6];
    const totalDoughnut = valoresDoughnut.reduce((acc, val) => acc + val, 0);
    document.getElementById('dadoCor2').textContent = totalDoughnut;
}
