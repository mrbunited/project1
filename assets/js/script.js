$(".btn").on("click", function (event) {
  event.preventDefault();
  var searchQ = $("#searchInput").val().trim();
  console.log("Searched: " + searchQ);


// Weather API
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchQ + "&units=imperial&appid=17d594f0d627f8656d2fab0b960e2a20";

  // Here we run our AJAX call to the OpenWeatherMap API
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // We store all of the retrieved data inside of an object called "response"
    .then(function (response) {

      // Log the queryURL
      console.log(queryURL);

      // Log the resulting object
      console.log(response);

      // Transfer content to HTML
      //   $(".city").html("<h1>" + response.name + " Weather Details</h1>");
      //   $(".wind").text("Wind Speed: " + response.wind.speed);
      //   $(".humidity").text("Humidity: " + response.main.humidity);
      //   $(".temp").text("Temperature (F) " + response.main.temp);
      // var windSpeedAndDeg = JSON.parse(response.wind)
      // console.log(windSpeedAndDeg);
      // Log the data in the console as well
      console.log("Wind Speed: " + response.wind);
      console.log("Humidity: " + response.main.humidity);
      console.log("Temperature (F): " + response.main.temp);
    });
































































});

var map;
var service;
var infowindow;
  
function initMap() {
  
  // map options
  var options = {
    zoom:12,
    center:{lat:41.8781, lng:-87.6298}
  }
  infoWindow = new google.maps.InfoWindow;
  //map
  var map = new google.maps.Map(document.getElementById("map"), options);

  //add marker
  var marker = new google.maps.Marker({
    position:{lat:21.8789, lng:-87.6359},
    map:map
  });
}






























































































































































