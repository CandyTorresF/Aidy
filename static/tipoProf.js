
$(document).ready(function()
{
  var slideIndex = 0;
  var popCanvas;
  console.log(data);

  Chart.defaults.global.defaultFontSize = 15;
  Chart.defaults.options ={
    scales:{
      yAxes: [{
        display: true,
          ticks:{
          suggestedMin:0,
              suggestedMax: 100
          }
      }]
    }
  };

  graphCumpTipoProf(data["cumpTipoProf"], data["cumpTipoProfDeber"]);
  //graphCumpHorasTipoProf0(data["cumpHorasTipoProf0"]);
  //graphCumpHorasTipoProf1(data["cumpHorasTipoProf1"]);
  //graphCumpHorasTipoProf2(data["cumpHorasTipoProf2"]);
  //graphCumpHorasTipoProf3(data["cumpHorasTipoProf3"]);
  graphCumpHoras(data["cumpHoras"], data["cumpHorasDeber"]);
  //graphCumpDurCuartos(data["cumpDurCuartos"], data["cumpMinDeber"] );
  showSlides();


//=============================================x=======================================================================
    //TESTING 
function fillMatrix( matrix, numRows, numCol)
{
  var matrixTemp = [];
  for (var i = 0;  i< numRows; i++){
    matrixTemp[i] = new Array(numCol);
  }

  for (var i = 0;  i < numRows; i++){
    for (var j = 0;  j < numCol; j++){

      if( matrix.length <= i || matrix[i].length <= j || matrix[i][j] == null)
      {
        matrixTemp[i][j] = 0;
      }
      else{
        matrixTemp[i][j] = matrix[i][j]; 
      }
      
    }
    
  }
  console.log(matrixTemp);
  return matrixTemp;
}  

//====================================================================================================================
  //CUMPLIMIENTO POR TIPO DE PROFESIONAL 

    function graphCumpTipoProf(matDatos, matDatos2)
    {
      matDatos = fillMatrix( matDatos, 4, 4);
      matDatos2 = fillMatrix( matDatos2, 4, 4);
      popCanvas = document.getElementById("myChart").getContext('2d');

      new Chart(popCanvas, 
      {
        type: 'bar', 
        data: 
        {
          labels: ["Enfermeria", "Medicos", "Estudiantes", "Otros"],
          datasets: [{
            label: 'Porcentaje de cumplimiento por tipo de profesional',
            fontFamily: " 'Helvetica Neue', 'Arial'",
            borderWidth: 2,
            data: [matDatos[0][1] / matDatos2[0][1] * 100, matDatos[1][1] / matDatos2[1][1] * 100, matDatos[2][1] / matDatos2[1][1] * 100, matDatos[3][1] / matDatos2[3][1] * 100],
            backgroundColor: [
              'rgba(75, 192, 192, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)'
            ]
          }]
        },
          options:{
          legend:{
            display:false
          },
          scales:{
            yAxes:[{
              type: 'linear',
              ticks:{
                  max: 100,
                  min: 0,
                  stepsize: 1.0
              }
            }]
          }
          }

      });
  
    }
//====================================================================================================================
    //CUMPLIMIENTO POR HORAS DE ENFERMERIA 

/*
    function graphCumpHorasTipoProf0(matDatos)
    {
      matDatos = fillMatrix( matDatos, 8, 4);
      popCanvas = document.getElementById("myChart2").getContext('2d'); 
      var speedData = {
        labels: ["0:00-3:00", "3:01-6:00", "6:01-9:00", "9:01-12:00", "12:01-15:00", "15:01-18:00", "18:01-21:00", "21:01-00:00"],
        datasets: [{
          label: "Cumplimiento departamento de Enfermeria",
          data: [matDatos[0][3] , matDatos[1][3], matDatos[2][3], matDatos[3][3], matDatos[4][3], matDatos[5][3], matDatos[6][3], matDatos[7][3]],
          lineTension: 0,
          fill: false,
          borderColor: 'green',
          backgroundColor: 'transparent',
          borderDash:[5,5],
          pointBorderColor: 'green',
          pointRadius: 5,
          pointHoverRadius:10,
          pointHitRadius: 30,
          pointBorderWidth: 2,
          pointStyle: 'rectRounded'
        }]
      };

      var chartOptions = {
        legend: {
          display: true,
          position: 'top',
          labels: {
            boxWidth: 80,
            fontColor: 'black'
          }
        }
      };

      new Chart(popCanvas, {
        type: 'line',
        data: speedData,
        options: chartOptions
      });

    }

//====================================================================================================================
    //CUMPLIMIENTO POR HORAS DE MEDICOS

    function graphCumpHorasTipoProf1(matDatos)
    {
      matDatos = fillMatrix( matDatos, 8, 4);
      popCanvas = document.getElementById("myChart3").getContext('2d'); 
      var speedData = {
        labels: ["0:00-3:00", "3:01-6:00", "6:01-9:00", "9:01-12:00", "12:01-15:00", "15:01-18:00", "18:01-21:00", "21:01-00:00"],
        datasets: [{
          label: "Cumplimiento Medicos",
          data: [matDatos[0][3] , matDatos[1][3], matDatos[2][3], matDatos[3][3], matDatos[4][3], matDatos[5][3], matDatos[6][3], matDatos[7][3]],
          lineTension: 0,
          fill: false,
          borderColor: 'red',
          backgroundColor: 'transparent',
          borderDash:[5,5],
          pointBorderColor: 'green',
          pointRadius: 5,
          pointHoverRadius:10,
          pointHitRadius: 30,
          pointBorderWidth: 2,
          pointStyle: 'rectRounded'
        }]
      };

      var chartOptions = {
        legend: {
          display: true,
          position: 'top',
          labels: {
            boxWidth: 80,
            fontColor: 'black'
          }
        }
      };

      new Chart(popCanvas, {
        type: 'line',
        data: speedData,
        options: chartOptions
      });

    }
//====================================================================================================================
    //CUMPLIMIENTO POR HORAS ESTUDIANTES 


    function graphCumpHorasTipoProf2(matDatos)
    {
      matDatos = fillMatrix( matDatos, 8, 4);
      popCanvas = document.getElementById("myChart4").getContext('2d'); 
      var speedData = {
        labels: ["0:00-3:00", "3:01-6:00", "6:01-9:00", "9:01-12:00", "12:01-15:00", "15:01-18:00", "18:01-21:00", "21:01-00:00"],
        datasets: [{
          label: "Cumplimiento Estudiantes",
          data: [matDatos[0][3] , matDatos[1][3], matDatos[2][3], matDatos[3][3], matDatos[4][3], matDatos[5][3], matDatos[6][3], matDatos[7][3]],
          lineTension: 0,
          fill: false,
          borderColor: 'green',
          backgroundColor: 'transparent',
          borderDash:[5,5],
          pointBorderColor: 'green',
          pointRadius: 5,
          pointHoverRadius:10,
          pointHitRadius: 30,
          pointBorderWidth: 2,
          pointStyle: 'rectRounded'
        }]
      };

      var chartOptions = {
        legend: {
          display: true,
          position: 'top',
          labels: {
            boxWidth: 80,
            fontColor: 'black'
          }
        }
      };

      new Chart(popCanvas, {
        type: 'line',
        data: speedData,
        options: chartOptions
      });
    }

//====================================================================================================================  
    //CUMPLIMIENTO POR HORAS DE OTROS (VISITANTES)


    function graphCumpHorasTipoProf3(matDatos)
    {
      matDatos = fillMatrix( matDatos, 8, 4);
      popCanvas = document.getElementById("myChart5").getContext('2d'); 
      var speedData = {
        labels: ["0:00-3:00", "3:01-6:00", "6:01-9:00", "9:01-12:00", "12:01-15:00", "15:01-18:00", "18:01-21:00", "21:01-00:00"],
        datasets: [{
          label: "Cumplimiento Otros",
          data: [matDatos[0][3] , matDatos[1][3], matDatos[2][3], matDatos[3][3], matDatos[4][3], matDatos[5][3], matDatos[6][3], matDatos[7][3]],
          lineTension: 0,
          fill: false,
          borderColor: 'orange',
          backgroundColor: 'transparent',
          borderDash:[5,5],
          pointBorderColor: 'green',
          pointRadius: 5,
          pointHoverRadius:10,
          pointHitRadius: 30,
          pointBorderWidth: 2,
          pointStyle: 'rectRounded'
        }]
      };

      var chartOptions = {
        legend: {
          display: true,
          position: 'top',
          labels: {
            boxWidth: 80,
            fontColor: 'black'
          }
        }
      };

      new Chart(popCanvas, {
        type: 'line',
        data: speedData,
        options: chartOptions
      });
    }
*/
//====================================================================================================================  
  //CUMPLIMIENTO POR TIEMPO DE TODO EL PERSONAL

    function graphCumpHoras(matDatos, matDatos2)
    {
      matDatos = fillMatrix( matDatos, 8, 4);
      matDatos2 = fillMatrix( matDatos2, 8, 4);
      popCanvas = document.getElementById("myChart6").getContext('2d');

      new Chart(popCanvas, 
      {
        type: 'bar', 
        data: 
        {
          labels: ["0:00-3:00", "3:01-6:00", "6:01-9:00", "9:01-12:00", "12:01-15:00", "15:01-18:00", "18:01-21:00", "21:01-00:00"],
          datasets: [{
            label: 'Porcentaje de Cumplimiento en hrs',
            fontFamily: " 'Helvetica Neue', 'Arial'",
            borderWidth: 2,
            data: [matDatos[0][2] / matDatos2[0][2] * 100 , matDatos[1][2] / matDatos2[1][2] * 100, matDatos[2][2] / matDatos2[2][2] * 100, matDatos[3][2] / matDatos2[3][2] * 100,
                matDatos[4][2] / matDatos2[4][2] * 100,
                matDatos[5][2] / matDatos2[5][2] * 100,
                matDatos[6][2] / matDatos2[6][2] * 100,
                matDatos[7][2] / matDatos2[7][2] * 100],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)'
            ]
          }]
        },
          options:{
          legend:{
            display:false
          },
          scales:{
            yAxes:[{
              type: 'linear',
                ticks:{
                max:100,
                    min:0,
                    stepsize: 1.0
                }
            }]
          }
          }
      });
    }

//====================================================================================================================  
//CUMPLIMIENTO POR DURACION EN CUARTOS
    /*

    function graphCumpDurCuartos(matDatos, matDatos2)
    {
      matDatos = fillMatrix( matDatos, 5, 4);
      matDatos2 = fillMatrix( matDatos2, 5, 4);
      popCanvas = document.getElementById("myChart7").getContext('2d');

        var densityData = {
          label: 'Porcentaje de cumplimiento por duracion en cuartos',
          data: [matDatos[0][3] / matDatos2[0][3] * 100 , matDatos[1][3] / matDatos2[1][3] * 100 , matDatos[2][3] / matDatos2[2][3] * 100 , matDatos[3][3] / matDatos2[3][3] * 100 , matDatos[4][3] / matDatos2[4][3] * 100 ],
          backgroundColor: [
            'rgba(0, 99, 132, 0.6)',
            'rgba(120, 99, 132, 0.6)',
            'rgba(150, 99, 132, 0.6)',
            'rgba(240, 99, 132, 0.6)',
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)'
          ],
          borderColor: [
            'rgba(0, 99, 132, 1)',
            'rgba(90, 99, 132, 1)',
            'rgba(120, 99, 132, 1)',
            'rgba(240, 99, 132, 1)',
            'rgba(0, 99, 132, 0.6)',
            'rgba(120, 99, 132, 0.6)',
            'rgba(150, 99, 132, 0.6)',
            'rgba(240, 99, 132, 0.6)',
          ],
          borderWidth: 2,
          hoverBorderWidth: 0
        };

        var chartOptions = {
          scales: {
            yAxes: [{
              barPercentage: 0.5
            }]
          },
          elements: {
            rectangle: {
              borderSkipped: 'left',
            }
          }
        };

        new Chart(popCanvas, 
        {
          type: 'horizontalBar',
          data: {
            labels:["20-..", "15-20", "10-15", "5-10", "1-5"],
            datasets: [densityData],
          },
          options: chartOptions
        });
    }
*/

//====================================================================================================================  

function showSlides() 
{
    var i;
    var slides = document.getElementsByClassName("graphTable");
    for (i = 0; i < slides.length; i++) 
    {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "inline";  
    setTimeout(showSlides, 7000); // Change image every 2 seconds
}

function plusSlides(n) {
  showSlides2(slideIndex += n);
}

function currentSlide(n) {
  showSlides2(slideIndex = n);
}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("graphTable");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "inline";  
}
function refreashAt(hours, minutes, seconds) {

    var now = new Date();
    var then = new Date();

    if(now.getHours() > hours ||
       (now.getHours() == hours && now.getMinutes() > minutes) ||
        now.getHours() == hours && now.getMinutes() == minutes && now.getSeconds() >= seconds) {
        then.setDate(now.getDate() + 1);
    }
    then.setHours(hours);
    then.setMinutes(minutes);
    then.setSeconds(seconds);

    var timeout = (then.getTime() - now.getTime());
    setTimeout(function() { window.location.reload(true); }, timeout);
}

    refreashAt(01,0,0);

});

