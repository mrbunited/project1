

function renderSearch() {
    $("#searchArea").empty;
    var searchBar = $("#searchArea");
        //adds the search bar bootstrap html
        // searchBar.html("<input type='text' id='userSearch' class='form-control'>");
        searchBar.html("<form class='form-inline'><label class='sr-only' for='inlineSearch'>Name</label><input type='text' class='form-control mb-2 mr-sm-2' id='inlineSearch' placeholder='Choose a City'><button type='submit' class='btn btn-primary mb-2'>Submit</button></form>");
    $("#searchArea").append(searchBar)
    
}




$(document).ready(function () {
    renderSearch();
})

var cityName = "";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchQ + "&units=imperial&appid=17d594f0d627f8656d2fab0b960e2a20";

// Here we run our AJAX call to the OpenWeatherMap API
$.ajax({
url: queryURL,
method: "GET"
})
// We store all of the retrieved data inside of an object called "response"
.then(function(response) {

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