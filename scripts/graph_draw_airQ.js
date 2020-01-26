setTimeout(function() {
	var barColor='';
	if(chartData[1][0]<=50){barColor="green"}
	else if (chartData[1][0]>50&&chartData[1][0]<=100){barColor="orange"}
	else {barColor="red"};
	var chartAirQuality= document.getElementById('chart-0').getContext('2d');
	var chAirQuality = new Chart (chartAirQuality, {
		type:'bar',
		data:{
			labels:['Optymalna jakość powietrza','Aktualna jakość powietrza'],
			datasets:[{
				label:'Jakość powietrza',
				data:['50',chartData[1][0]],
				backgroundColor:['green',barColor],
				borderWidth:1,
				borderColor:'gray',
				hoverBorderWidth:3,
				hoverBorderColor:'black'
			}]
		},
		options: {legend:{display:false},
			scales: {
				yAxes:  [{
					scaleLabel: {
					  display: true,
					  labelString: 'Stan powietrza'
					},
				  
					ticks: {
						beginAtZero: true
					}
				}],
				xAxes:  [{
					scaleLabel: {
					  display: true,
					  labelString: 'Optymalna oraz aktualna jakość powietrza'
					},
				  
					ticks: {
						
					}
				}]
			}
		}
	});
}, 1000);