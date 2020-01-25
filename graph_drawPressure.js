setTimeout(function(){
	timeWeather=[];
	pressureWeather=[];
	whatTime=[];
	for (i=0; i<chartData[0].list.length;i++){
		timeWeather.push(chartData[0].list[i].dt_txt);
		whatTime.push(timeWeather[i].substring(11, 16));
		pressureWeather.push(Math.round(chartData[0].list[i].main.pressure));
	}
	var chartPressure= document.getElementById('chart-2').getContext('2d');
	var chPressure = new Chart (chartPressure, {
		type:'line',
		data: {
			labels:whatTime,
			datasets:[{
				label:'Ciśnienie',
				data:pressureWeather,
				borderWidth:5,
				borderColor:'#F12C2C',
				hoverBorderWidth:0,
				hoverBorderColor:'green'
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