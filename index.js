var today = moment().format('DD-MM-YYYY')
var currentLocation = document.querySelector('.currentloc');
var date = document.querySelector('.date');
var windspeed = document.querySelector('.windspeed');
var temperature = document.querySelector('.temperature');
var humidity = document.querySelector('.humidity');
var uvIndex = document.querySelector('.uvIndex');

var location ='';
var newLocLat = '';
var newLocLong = '';
var newReqURL ='';

var topbar = document.querySelector('.topbar');
var search = document.querySelector('.search');
var recentSearches = document.querySelector('#recent');

var forecastWeekDisplay = document.querySelector('#cardContainer');

for( var i=0; i<5; i++){}

search.addEventListener('click', function(){
    recentSearches = input.value;
    currentLocation.textContent = 'Current Location:' + location;
    var newsearch = document.createElement('p');
    newsearch.setAttribute('id', 'recent');
    newsearch.textContent = cityname;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'cee5c004ccmshe9babc939ca48e8p1c5ff6jsn0a46f2c2e51c',
                'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
            }
        };
        
        fetch('https://open-weather13.p.rapidapi.com/city/fivedaysforcast/30.438/-89.1028', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    })
    .then(function(data){
        console.log(data)
        displayWeather(data)
    })

    var displayWeather = function(data){
        newLocLat = data[0].coordinates.latitude;
        newLocLong = data[0].coordinates.longitude;
        console.log(newLocLat)
        console.log(newLocLong)
        newReqURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + newLocLat + '&lon=' + newLocLong + '&units=imperial&appid=d5b94023e51e40b99d8629839fd2a07e';

        fetch(newReqURL)
        .then(function(response){
            return response.json();
            console.log(response);
        })
        .then(function(data){
            console.log(data);
            displayCurrentLoc(data.current);
            displayForecastPost(data.daily);
        })};
    
var requestURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.448376&lon=-112.074036&units=imperial&appid=d5b94023e51e40b99d8629839fd2a07e';

fetch(requestURL)
.then(function (response){
    return response.json()
    console.log(response);
})
.then(function (data) {
    console.log(data);
    displayCurrent(data.current);
    displayForecast(data.daily); 
});
var displayCurrent = function(current){
    temperature.textContent ='Current temperature ' + current.temp + " degrees";
    windspeed.textContent = 'Current wind speeds: ' + current.wind_speed + ' mph';
    humidity.textContent = 'Current humidity ' + current.humidity + ' percent';
    uvIndex.textContent = 'Current UV Index ' + current.uvi;
    date.textContent = 'Current time: ' + moment().format('h:mm a');
};

var displayForecast = function(daily){
    for (var i=1; i< 6; i++){
        var forecastSection = document.createElement("section");
        var forecastDate = document.createElement("p");
        var forecastTemperature = document.createElement("p");
        var forecastWindSpeed = document.createElement("p");
        var forecastHumidity = document.createElement("p");

        forecastSection.setAttribute('id', 'forecastWeekDisplay');

        forecastWeekDisplay.appendChild(forecastSection);
        forecastSection.appendChild(forecastDate);
        forecastSection.appendChild(forecastTemperature);
        forecastSection.appendChild(forecastWindSpeed);
        forecastSection.appendChild(forecastHumidity);

            forecastDate.innerHTML = 'Norristown' + 'Date: ' + moment().add(i, 'd').format('DD-MM-YYYY');
            forecastTemperature.innerHTML = 'Temperature: ' + daily[i].temp.day;
            forecastHumidity.innerHTML = 'Wind Speed: '+ daily[i].wind_speed;
    }
};

var displayForecastPost = function(daily){
    for (var i=1; i< 6; i++){
        document.getElementById('forecastWeekDisplay').style.display ='';
        
        forecastWeekDisplay.appendChild(forecastSection);
        forecastSection.appendChild(forecastDate);
        forecastSection.appendChild(forecastTemperature);
        forecastSection.appendChild(forecastWindSpeed);
        forecastSection.appendChild(forecastHumidity);

        forecastDate.innerHTML = 'Norristown' + 'Date: ' + moment().add(i, 'd').format('DD-MM-YYYY');
        forecastTemperature.innerHTML = 'Temperature: ' + daily[i].temp.day;
        forecastHumidity.innerHTML = 'Wind Speed: '+ daily[i].wind_speed;
    }
}