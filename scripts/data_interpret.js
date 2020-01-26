// var interpretFuncs = [ //Dane są w formacie tekstowym! Uzyj JSON.parse()!
//     function(response) //Funkcja dla odpowiedzi ze strony z czystością powietrza
//     {
//         console.log(JSON.parse(response))
//     },
//     function(response) //Funkcja dla odpowiedzi ze strony z pogodą
//     {
//         console.log(JSON.parse(response))
//     }
// ]

var chartData=[];
var interpretFuncs = [ //Dane są w formacie tekstowym! Uzyj JSON.parse()!
    function(response) //Funkcja dla odpowiedzi ze strony z czystością powietrza
    {  var airQuality=[(JSON.parse(response)).data.aqi,(JSON.parse(response)).data.time.s];
        chartData.push(airQuality);
        var chartAirQualityTemp= document.getElementById('chart-0')
        if (!chartAirQualityTemp){
            return
        }
        var chartAirQuality= chartAirQualityTemp.getContext('2d');
        var barColor='';
        if(chartData[1][0]<=50){barColor="green"}
        else if (chartData[1][0]>50&&chartData[1][0]<=100){barColor="orange"}
        else {barColor="red"};
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
        return airQuality;
    },
    function(response) //Funkcja dla odpowiedzi ze strony z pogodą
    {
        var weather=(JSON.parse(response)); 
        chartData.push(weather);
        var chartWeatherTemp= document.getElementById('chart-1')
        if (!chartWeatherTemp){
            return
        }
        var chartWeather= chartWeatherTemp.getContext('2d');
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
        return weather;
    }
]
