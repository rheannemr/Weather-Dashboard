// Write a function that takes the API response and grabs the values for temperature, humidity, wind speed, and UV index and prints them to page
// Write a function that takes the API response from the 5 day forecast that displays the temperature, humidity, and icon
// Allow user to type in a city and from the onlick of the search button, it will call these two functions and pass in the name of city the user enters
// When clicking search button, push city name to an array and set to local storage

function searchWeather(searchValue) {
    var searchValue = $(".searchBar").val();
    queryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=976e997bd52dd1c4e4ea450f0adad5d6`;
    $.ajax({
        url: queryUrl,
        method: "GET"
      }).then(function(response) { 
        console.log(response);
        uvSearch(response.coord.lat, response.coord.lon);
        var tempFar = (response.main.temp - 273.15) * 1.80 + 32;
        $('.temp').text('Temperature(F): ' + tempFar.toFixed(2) + '\u00B0');
        // Display humidity
        $('.humidity').text('Humidity: ' + response.main.humidity + '%');
        // Display wind speed
        $('.wind').text('Wind Speed: ' + response.wind.speed + ' MPS');
      });
}
$("#searchBtn").on("click", searchWeather)

function uvSearch(lat, lon) {
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=976e997bd52dd1c4e4ea450f0adad5d6`,
        method: "GET"
      }).then(function(response) { 
        console.log(response);
        $('.uv-index').text('UV Index: ' + response.current.uvi);
      
      if (response.current.uvi <= 2) {
      $('.uv-index').addClass("low")
      } else if (uvIndex > 2 && uvIndex <= 7.99) {
      $('.uv-index').addClass("moderate")
      } else if (uvIndex >= 8) {
      $('.uv-index').addClass("high")
    }
  });

};

function fiveDayForecast(searchValue) {
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&appid=976e997bd52dd1c4e4ea450f0adad5d6&units=imperial`,
        method: "GET"
      }).then(function(response) { 
        for (i = 0; i < 6; i ++) {
          const unixTime = response.daily[i].dt;
          const date = new Date(unixTime*1000);
          console.log(date.toLocaleDateString("en-US"));
        }
        console.log(response); // Target elements on the page to display HTML with specific info from API
        $
      });
}
$("#searchBtn").on("click", fiveDayForecast)