// chartJS script
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Grain Area', 'Grain Shape Factor', 'Grain Shape Index'],
        datasets: [{
            label: null,
            data: [0,0,0],
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
        }, {
            type: 'line',
            label: 'Average',
            data: [0.5, null, null],
            fill: true,
            showLine: false,
            pointRadius: 10,
            pointBackgroundColor: 'rgba(75, 192, 192, 1)',
            pointHoverRadius: 10
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
    
var A ='';
var GSF = '';
var GSI = '';

// 	// Click event scripts
$('area').on('click', function() {
    var areaID = $(this).attr('id'); // get id from html map region
    var areaID = areaID.replace('imgzone', ''); // Remove imgzone from areaID
    var areaID = parseInt(areaID); // Convert areaID to integer

    // Get data from Json file
    $.getJSON('PAL22.json', function(JsonData) {
        A = JsonData[areaID].A;
        GSF = JsonData[areaID].GSF;
        GSI = JsonData[areaID].GSI;
        });
    
    var data = [A, GSI, GSF];
    // Chart update
    myChart.data.datasets[0].label = areaID;
    myChart.data.datasets[0].data = data;
    myChart.update();
    });
    