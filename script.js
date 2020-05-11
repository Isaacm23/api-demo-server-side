
// var main = document.querySelector('#name');
// var temp = document.querySelector('.temp');
// var desc = document.querySelector('.desc');
// var clouds = document.querySelector('.clouds');
// var button= document.querySelector('.submit');

// var queryURL = 

$(document).ready(function(){

  $(".submit").click((function () { return getWeather();
  }));

function getWeather() {
  var val = $('.city').val();

  if (val != ''){
$.ajax({
  url: 'https://api.openweathermap.org/data/2.5/weather?q='+val+'&appid=dff0a319051040d9ba1c7ea38abb997d',
  method: "GET",
}).then(function(response) {
  
  console.log(response);

  console.log(val)
 
  })}}
  
});