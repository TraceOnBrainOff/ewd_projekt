setTimeout(function(){
	timeWeather=[];
	tempWeather=[];
	feelsLiketempWeather=[];
	whatTime=[];
	days=["Pn","Wt","Śr","Czw","Pt","Sb","Nd","Pn","Wt","Śr","Czw","Pt","Sb","Nd"];
	day=0;
	var d = new Date();
	var n = d.getDay()
	for (i=0; i<chartData[0].list.length;i++){
		tmp=i+1;
		timeWeather.push(chartData[0].list[i].dt_txt);
		whatTime.push(days[n+day]+"  "+timeWeather[i].substring(11, 16));
		tempWeather.push(Math.round((chartData[0].list[i].main.temp-273.15) * 100) / 100);
		feelsLiketempWeather.push(Math.round((chartData[0].list[i].main.feels_like-273.15) * 100) / 100);
		if (tmp%8==0){day+=1};
	}
	var chartWeather= document.getElementById('chart-1').getContext('2d');
	var chWeather = new Chart (chartWeather, {
		type:'line',
		data: {
			labels:whatTime,
			datasets:[{
				// label:'Temperatura',
				// data:tempWeather,
				// borderWidth:5,
				// borderColor:'#F12C2C',
				// hoverBorderWidth:0,
				// hoverBorderColor:'green'


				label:'Temperatura',
				fill: false,
				data:tempWeather,
				borderWidth:5,
				borderColor:'#F12C2C',
				hoverBorderWidth:0,
				hoverBorderColor:'green'}, {

					label:'Odczuwalna Temperatura',
					fill: false,
					data:feelsLiketempWeather,
					borderWidth:2,
					borderColor:'darkblue',
					hoverBorderWidth:0,
					hoverBorderColor:'green'
			}]
		},
		options: {
			scales: {
				yAxes:  [{
					scaleLabel: {
					  display: true,
					  labelString: 'Temperatura'
					},
				  
					ticks: {
						beginAtZero: true
					}
				}],
				xAxes:  [{
					scaleLabel: {
					  display: true,
					  labelString: 'Godzina'
					},
				  
					ticks: {
						
					}
				}]
			}
		}
	});
}, 1000);