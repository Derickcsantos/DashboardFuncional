document.addEventListener('DOMContentLoaded', function () {
    // Buscar os dados do localStorage ou usar valores padrão
    const valoresLine = JSON.parse(localStorage.getItem('lineChartData')) || [2050, 1900, 2100, 1800, 2800, 2000, 2500, 2600, 2450, 1950, 2300, 2900];
    const valoresDoughnut = JSON.parse(localStorage.getItem('doughnutChartData')) || [42, 12, 8, 6];
    const valoresBar = JSON.parse(localStorage.getItem('barChartData')) || [65, 88, 10, 40];

    // Mostrar dados existentes nos campos do formulário
    mostrarDados(valoresLine, valoresDoughnut, valoresBar);

    document.getElementById('chartForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const lineValues = document.getElementById('lineInput').value.split(',').map(Number);
        const doughnutValues = document.getElementById('doughnutInput').value.split(',').map(Number);
        const barValues = document.getElementById('barInput').value.split(',').map(Number);

        // Calcular e salvar valores de "funcionarios"

        professorCard

        function totalDeFuncionarios() {
            return openDB().then(db => {
                return new Promise((resolve, reject) => {
                    const transaction = db.transaction('funcionarios', 'readonly');
                    const totalFuncionarios = doughnutValues.reduce((acc, value) => acc + value, 0);
                    localStorage.setItem('funcionarios', totalFuncionarios);
                    const request = store.count(); // Contando o número total de IDs
    
                    request.onsuccess = () => {
                        resolve(request.result); // Resolve com o número total de IDs
                    };
    
                    request.onerror = () => {
                        reject('Erro ao contar os IDs');
                    };
                });
            });
        }
    

        alert('Dados atualizados com sucesso!');

        console.log('Line Values:', lineValues);
        console.log('Doughnut Values:', doughnutValues);
        console.log('Bar Values:', barValues);
        console.log('Total de Funcionários:', totalFuncionarios);

        localStorage.setItem('lineChartData', JSON.stringify(lineValues));
        localStorage.setItem('doughnutChartData', JSON.stringify(doughnutValues));
        localStorage.setItem('barChartData', JSON.stringify(barValues));

        // Atualizar gráficos após a atualização dos dados
        atualizarGraficos();
    });

    function mostrarDados(valoresLine, valoresDoughnut, valoresBar) {
        // Exibir dados nos campos apropriados
        document.getElementById('lineInput').value = valoresLine.join(', ');
        document.getElementById('doughnutInput').value = valoresDoughnut.join(', ');
        document.getElementById('barInput').value = valoresBar.join(', ');
    }
});
