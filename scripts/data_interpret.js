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
        return airQuality;
    },
    function(response) //Funkcja dla odpowiedzi ze strony z pogodą
    {
        var weather=(JSON.parse(response)); 
        chartData.push(weather);
        return weather;
    }
]
