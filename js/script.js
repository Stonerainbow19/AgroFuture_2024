const ctx = document.getElementById('grafico1');

        new Chart(ctx, {
            type: 'bar',
            data: {
            labels: [2000,2001,2003,2005,2007,2009,2011,2013,2015,2017,2019,2021,2023],
            datasets: [{
                label: 'Acumulado',
                data: [25,37,49,60,79,107,141,183,298,459,631,746,769],
                borderWidth: 1,
                backgroundColor:'#074d0770'
            }
        ,
            {
            label: 'Novas',
            data: [25,8,12,11,19,28,34,42,115,161,172,115,23],
            borderColor: '#FF6384',
            backgroundColor: '#34c75a'
            }   
        
        ]
            },
            
            options: {
            scales: {
                y: {
                beginAtZero: true
                }
            }
            }
        });

