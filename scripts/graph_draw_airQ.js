setTimeout(function() {
	var chartAirQuality= document.getElementById('chart-0').getContext('2d');
	var chAirQuality = new Chart (chartAirQuality, {
		type:'bar',
		data:{
			labels:['Dobra jakość powietrza','Aktualna jakość powietrza'],
			datasets:[{
				label:'Jakość powietrza',
				data:['50',chartData[1][0]],
				backgroundColor:['green','red'],
				borderWidth:1,
				borderColor:'gray',
				hoverBorderWidth:3,
				hoverBorderColor:'black'
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			}
		}
	});
}, 1000);