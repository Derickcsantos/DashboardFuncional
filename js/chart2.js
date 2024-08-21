
var ctx = document.getElementById('doughnut').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut' ,
    data: {
        labels: ['Operarios', 'T.I', 'Administração', 'Outros'],
        datasets: [{
            label: 'Employees',
            data: [42,12,8,6],
            backgroundColor: [
                'rgba(41,155,91,1)',
                'rgba(54,162,255,1)',
                'rgba(255,206,86,1)',
                'rgba(120,46,139,1)',
            ],
            borderColor: [
                'rgba(41,155,91,1)',
                'rgba(54,162,255,1)',
                'rgba(255,206,86,1)',
                'rgba(120,46,139,1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
})