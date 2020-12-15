// Write a function that takes the API response and grabs the values for temperature, humidity, wind speed, and UV index and prints them to page
// Write a function that takes the API response from the 5 day forecast that displays the temperature, humidity, and icon
// Allow user to type in a city and from the onlick of the search button, it will call these two functions and pass in the name of city the user enters
// When clicking search button, push city name to an array and set to local storage

function searchWeather(searchValue) {
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=imperial&appid=976e997bd52dd1c4e4ea450f0adad5d6`,
        method: "GET"
      }).then(function(response) { 
        console.log(response); // Target elements on the page to display HTML with specific info from API
        uvSearch(response.coord.lat, response.coord.lon);
      });
}
function uvSearch(lat, lon) {
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=976e997bd52dd1c4e4ea450f0adad5d6`,
        method: "GET"
      }).then(function(response) { 
        console.log(response); // Target elements on the page to display HTML with specific info from API
      });
}
function fiveDayForecast(searchValue) {
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&appid=976e997bd52dd1c4e4ea450f0adad5d6`,
        method: "GET"
      }).then(function(response) { 
        for (i = 0; i < response.list.length; i += 8) {
            // Grab value and list to page
        }
        console.log(response); // Target elements on the page to display HTML with specific info from API
      });
}
fiveDayForecast("Portland");