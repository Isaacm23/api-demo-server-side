$(document).ready(function () {
  $(".submit").click(function () {
    event.preventDefault();
    return getWeather();
    
  });
});

function getWeather() {
  var val = $("#city").val();
  
  localStorage.setItem("city",val);
  
  function history(){
  var history = localStorage.getItem(val);
    
    return(
    "<p> Recent Searches: " + history  +
        "</p>" )
    };
    
     var historyInput = history()
     $("#history").html(historyInput)
     
      
  
  
  
  

  $.ajax({
    url:
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      val +
      "&appid=dff0a319051040d9ba1c7ea38abb997d&units=imperial",
    method: "GET",
  }).then(function (response) {
    console.log(response)
   
    var cityName = results(response);
    
    console.log(response.coord.lat)

    $("#name").html(cityName);
    
  $.ajax({
    url:
      "http://api.openweathermap.org/data/2.5/uvi?" +
      "&appid=dff0a319051040d9ba1c7ea38abb997d" +
      "&lat="+response.coord.lat+"&lon=" +response.coord.lon,
    method: "GET",
  }).then(function (uv) {
    console.log(uv);
    var cityIndex = cityIndex(uv)
$(".index").html(cityIndex)

function cityIndex(uv){
  return(
  "<p> Index: " +
      uv.value +
      "</p>"
  )
}

  $.ajax({
    url:
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      val +
      "&appid=dff0a319051040d9ba1c7ea38abb997d&units=imperial",
    method: "GET",
  }).then(function (data) {
    console.log(data)
   
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
  });
});
  function results(response) {
    
    return (
      "<p>" +
      response.name +
      "<p>" +
      "<p> Temperature: " +
      response.main.temp +
      "&deg;F<p>" +
      "<p> High: " +
      response.main.temp_max +
      "<p>" +
      "&deg;F<p> Low: " +
      response.main.temp_min +
      "&deg;F<p>" +
      "<p>  <img src= http://openweathermap.org/img/wn/" +
      response.weather[0].icon +
      ".png>" +
      "</p>" +
      "<p>" +
      response.weather[0].description +
      "</p>"+
      "<p>" +
      response.main[0].humidity +
      "</p>"
      
    
    )};

function dayOne(data) {
  return (
    "<p> Day " +
    data.list[0].dt_txt +
    "</p>" +
    "<p> High " +
    data.list[0].main.temp_max +
    "&deg;F</p>" +
    "<p> Low " +
    data.list[0].main.temp_min +
    "&deg;F</p>" +
    "<p>  <img src= http://openweathermap.org/img/wn/" +
    data.list[0].weather[0].icon +
    ".png>" +
    "</p>" +
    "<p>" +
    data.list[0].weather[0].description +
    "</p>"
  );
}
function dayTwo(data) {
  return (
    "<p> Day " +
    data.list[7].dt_txt +
    "</p>" +
    "<p> High " +
    data.list[7].main.temp_max +
    "&deg;F</p>" +
    "<p> Low " +
    data.list[7].main.temp_min +
    "&deg;F</p>" +
    "<p>  <img src= http://openweathermap.org/img/wn/" +
    data.list[7].weather[0].icon +
    ".png>" +
    "</p>" +
    "<p>" +
    data.list[0].weather[0].description +
    "</p>"
  );
}
function dayThree(data) {
  return (
    "<p> Day " +
    data.list[15].dt_txt +
    "</p>" +
    "<p> High " +
    data.list[15].main.temp_max +
    "&deg;F</p>" +
    "<p> Low " +
    data.list[15].main.temp_min +
    "&deg;F</p>" +
    "<p>  <img src= http://openweathermap.org/img/wn/" +
    data.list[15].weather[0].icon +
    ".png>" +
    "</p>" +
    "<p>" +
    data.list[0].weather[0].description +
    "</p>"
  );
}
function dayFour(data) {
  return (
    "<p> Day " +
    data.list[23].dt_txt +
    "</p>" +
    "<p> High " +
    data.list[23].main.temp_max +
    "&deg;F</p>" +
    "<p> Low " +
    data.list[23].main.temp_min +
    "&deg;F</p>" +
    "<p>  <img src= http://openweathermap.org/img/wn/" +
    data.list[23].weather[0].icon +
    ".png>" +
    "</p>" +
    "<p>" +
    data.list[0].weather[0].description +
    "</p>"
  );
}
function dayFive(data) {
  return (
    "<p> Day " +
    data.list[31].dt_txt +
    "</p>" +
    "<p> High " +
    data.list[31].main.temp_max +
    "&deg;F</p>" +
    "<p> Low " +
    data.list[31].main.temp_min +
    "&deg;F</p>" +
    "<p>  <img src= http://openweathermap.org/img/wn/" +
    data.list[31].weather[0].icon +
    ".png>" +
    "</p>" +
    "<p>" +
    data.list[0].weather[0].description +
    "</p>"
  );
}};

