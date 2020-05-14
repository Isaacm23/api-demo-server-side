$(document).ready(function () {
  $(".submit").click(function () {
    event.preventDefault();
    return getWeather();
  });
});

function getWeather() {
  var val = $("#city").val();

  
    $.ajax({
      url:
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        val +
        "&appid=dff0a319051040d9ba1c7ea38abb997d&units=imperial",
      method: "GET",
    }).then(function (response) {
      console.log(response);
     
      var cityName = results(response);
      
      $("#name").html(cityName);
      
    });
  
  
    
  $.ajax({
    url:
      "https://api.openweathermap.org/data/2.5/forecast?q="+
      val +
      "&appid=dff0a319051040d9ba1c7ea38abb997d&units=imperial",
    method: "GET",
  }).then(function (data) {
    console.log(data);
    var one = dayOne(data);
    var two = dayTwo(data);
    var three = dayThree(data);
    var four = dayFour(data);
    var five = dayFive(data);
    $(".dayOne").html(one);
    $(".dayTwo").html(two);
    $(".dayThree").html(three);
    $(".dayFour").html(four);
    $(".dayFive").html(five);
  });

function results(response) {
  return (
    "<p>" +
    response.name +
    "<p>" +
    "<p> Temperature:" +
    response.main.temp +
    "&deg;F<p>" +
    "<p> With a high of:" +
    response.main.temp_max + "<p>"+
    "<p> With a Low of:" +
    response.main.temp_min +
    "<p>"
  );
}};
var iconcode = a.weather[0].icon;
var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
function dayOne(data){
  return (
    "<p> Day "+ data.list[0].dt_txt +"</p>" +
    "<p> Temperature-High "+ data.list[0].main.temp_max + "&deg;F</p>"+
    "<p> Temperature-Min "+ data.list[0].main.temp_min + "&deg;F</p>" +
    "<p>"+ data.list[0].weather[0] + "<p>"+
   "<p>" + $('#wicon').attr('src', iconurl) +"<p>"
  );
  
};
function dayTwo(data){
  return (
    "<p> Day "+ data.list[7].dt_txt +"</p>" +
    "<p> Temperature-High "+ data.list[7].main.temp_max + "&deg;F</p>"+
    "<p> Temperature-Min "+ data.list[7].main.temp_min + "&deg;F</p>" 
    
  );
  
};
function dayThree(data){
  return (
    "<p> Day "+ data.list[15].dt_txt +"</p>" +
    "<p> Temperature-High "+ data.list[15].main.temp_max + "&deg;F</p>"+
    "<p> Temperature-Min "+ data.list[15].main.temp_min + "&deg;F</p>" +
    "<p>"+ data.list[15].weather+ "<p>"
  );
  
};
function dayFour(data){
  return (
    "<p> Day "+ data.list[23].dt_txt +"</p>" +
    "<p> Temperature-High "+ data.list[23].main.temp_max + "&deg;F</p>"+
    "<p> Temperature-Min "+ data.list[23].main.temp_min + "&deg;F</p>" +
    "<p>"+ data.list[23].weather + "<p>"
  );
  
};
function dayFive(data){
  return (
    "<p> Day "+ data.list[31].dt_txt +"</p>" +
    "<p> Temperature-High "+ data.list[31].main.temp_max + "&deg;F</p>"+
    "<p> Temperature-Min "+ data.list[31].main.temp_min + "&deg;F</p>" +
    "<p>"+ data.list[31] + "<p>"
  );
  
};