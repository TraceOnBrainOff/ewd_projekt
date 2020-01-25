// var wykres_pogoda = new Chart('chart-1', {
//     type: 'line'
// });

// var ctx = document.getElementById('chart-0').getContext('2d'); //nie wiem czy się to nie przyda do pogody też. zobaczy się
// var wykres_powietrze = new Chart(ctx, { 
//     type: 'bar',
//     data: { //testowe wartości
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets:[{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });
  setTimeout(function(){
    timeWeather=[];
    tempWeather=[];
    whatTime=[];
    for (i=0; i<chartData[0].list.length;i++){
        timeWeather.push(chartData[0].list[i].dt_txt);
        whatTime.push(timeWeather[i].substring(11, 16));
   tempWeather.push(Math.round((chartData[0].list[i].main.temp-273.15) * 100) / 100);}
  
  
  
  
    var chartWeather= document.getElementById('chart-1').getContext('2d');
    var chWeather = new Chart (chartWeather, {
    type:'line',
    data:{
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