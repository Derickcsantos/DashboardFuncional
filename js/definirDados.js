document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('chartForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const lineValues = document.getElementById('lineInput').value.split(',').map(Number);
        const doughnutValues = document.getElementById('doughnutInput').value.split(',').map(Number);
        const barValues = document.getElementById('barInput').value.split(',').map(Number);

        alert('Dados atualizados com sucesso!')

        console.log('Line Values:', lineValues);
        console.log('Doughnut Values:', doughnutValues);
        console.log('Bar Values:', barValues);

        localStorage.setItem('lineChartData', JSON.stringify(lineValues));
        localStorage.setItem('doughnutChartData', JSON.stringify(doughnutValues));
        localStorage.setItem('barChartData', JSON.stringify(barValues));
    });
});
