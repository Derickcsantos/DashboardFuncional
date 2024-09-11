
var ctx = document.getElementById('lineChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line' ,
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Ganhos em R$',
            data: [2050,1900,2100,1800,2800,2000,2500,2600,2450,1950,2300,2900],
            backgroundColor: [
                '#293eb3'

            ],
            borderColor: [
                '#293eb3'

            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
})
 