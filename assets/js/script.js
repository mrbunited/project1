$(".btn").on("click", function (event) {
  event.preventDefault();
  var searchQ = $("#pac-input").val().trim();
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


//  Pixabay api for background image
//     var imageURL = "https://pixabay.com/api/?key=9553787-ed488c9c5fa27a900f35fb4af&q=city+"+ searchQ +"&image_type=photo&safesearch=true&min_width=2000&min_height=1335";

//     $.ajax({
//       url: imageURL,
//       method: "GET"
//     })

//       .then(function (responseImage) {
//         console.log(imageURL);
//         console.log(responseImage.hits[0].largeImageURL);
// //         var oDiv = document.getElementById("#main");
// // oDiv.style.removeProperty("background-image");
//         // $('body').css('background-image', none);
//         $("body").css("background-image","url(" + responseImage.hits[0].largeImageURL + ")");

//       });


















































































































































































































})


$("#fave-btn").on("click", function (event) {
  event.preventDefault();
    // databse strats here
      var config = {
        apiKey: "AIzaSyCZzfdRrhwJAeF05SkN8G2kjiFLvE8HIHk",
        authDomain: "project-1-travel.firebaseapp.com",
        databaseURL: "https://project-1-travel.firebaseio.com",
        projectId: "project-1-travel",
        storageBucket: "project-1-travel.appspot.com",
        messagingSenderId: "798853647697"
      };

    firebase.initializeApp(config);

    var database = firebase.database();
    console.log(database);

    var faveCity = "";


    faveCity = $("#searchInput").val().trim();

        // Change what is saved in firebase, only save if the input is correct
        database.ref().push({
            faveCity: faveCity,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });
  
     database.ref().on("child_added", function (snapshot) {
      // var faveDisplay = (snapshot.val().faveCity);
      // console.log(faveDisplay);
      var newDiv = $("<div>").addClass('recent-view').text(snapshot.val().faveCity);
      // $("recent-div").text("Recently Searched Cities : " + recentCity);
      $("#recent-div").append(newDiv);
 }) 
 firebase.app().delete().then(function() {
  console.log("[DEFAULT] App is Gone Now");
});
  })