setTimeout(function(){
	timeWeather=[];
	tempWeather=[];
	whatTime=[];
	for (i=0; i<chartData[0].list.length;i++){
		timeWeather.push(chartData[0].list[i].dt_txt);
		whatTime.push(timeWeather[i].substring(11, 16));
		tempWeather.push(Math.round((chartData[0].list[i].main.temp-273.15) * 100) / 100);
	}
	var chartWeather= document.getElementById('chart-1').getContext('2d');
	var chWeather = new Chart (chartWeather, {
		type:'line',
		data: {
			labels:whatTime,
			datasets:[{
				label:'Temperatura',
				data:tempWeather,
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