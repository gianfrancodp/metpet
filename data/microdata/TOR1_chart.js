
// chartJS script
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['W', 'L', 'P',],
        datasets: [{
            label: 'micro parameters',
            data: [12,19,3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
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
var W ='';
var L ='';
var Ver_0 ='';
var A ='';
var P ='';
// 	// Click event scripts
$('area').on('click', function() {
    console.log('Hai cliccato su ' + $(this).attr('id'));
    var areaID = $(this).attr('id');
    var areaID = areaID.replace('imgzone', ''); // Remove imgzone from areaID
    var areaID = parseInt(areaID); // Convert areaID to integer
    console.log('areaID clicked: ' + areaID);

    // Get data from table
    $.getJSON('TOR1.json', function(JsonData) {
        W = JsonData[areaID].W;
        console.log('W: ' + W);
        L = JsonData[areaID].L;
        console.log('L: ' + L);
        Vert_0 = JsonData[areaID].Vert_0;
        console.log('Vert_0: ' + Vert_0);
        A = JsonData[areaID].A;
        console.log('A: ' + A);
        P = JsonData[areaID].P;
        // Write data to log
        console.log('successfully parsed from Json W: ' + W + ' L: ' + L + ' Vert_0: ' + Vert_0 + ' A: ' + A);
        });
    
    var data = [W, L, P];
    console.log(data);
    // Aggiorna il grafico con i nuovi dati
    myChart.data.datasets[0].label = areaID;
    myChart.data.datasets[0].data = data;
    myChart.update();
    });
    