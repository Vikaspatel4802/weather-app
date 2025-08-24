const api_key = "bcd42148963e9ab887effbb1df49c927";
const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const SearchBox = document.querySelector(".search input");
const SearchBtn = document.querySelector(".Search_button");
const WeatherIcon = document.querySelector(".weather_icon");
const Current = document.querySelector(".Curr_weather");

async function checkWeather(city) {
  const response = await fetch(api_url + city + `&appid=${api_key}`);
  if (response.status == 404) {
    console.log('error')
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    alert("Invalid City Name.");

  } else {
    let data = await response.json();
    console.log(data);
    const temperature = Math.round(data.main.temp);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = `${temperature}°C`;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = `${data.wind.speed} Km/hr`;

    if (data.weather[0].main == "Clouds") {
      WeatherIcon.src = "Images/clouds.png";
      Current.innerHTML = "Mausam : " + data.weather[0].main;
    }
    if (data.weather[0].main == "Rain") {
      WeatherIcon.src = "Images/rain.png";
      Current.innerHTML = "Mausam : " + data.weather[0].main;
    }
    if (data.weather[0].main == "Drizzle") {
      WeatherIcon.src = "Images/drizzle.png";
      Current.innerHTML = "Mausam : " + data.weather[0].main;
    }
    if (data.weather[0].main == "Thunderstorm") {
      WeatherIcon.src = "Images/thunderstorm.png";
      Current.innerHTML = "Mausam : " + data.weather[0].main;
    }
    if (data.weather[0].main == "Mist") {
      WeatherIcon.src = "Images/mist.png";
      Current.innerHTML = "Mausam : " + data.weather[0].main;
    }
    if (data.weather[0].main == "Sunny") {
      WeatherIcon.src = "Images/sunny.png";
      Current.innerHTML = "Mausam : " + data.weather[0].main;
    }
    document.querySelector(".weather").style.display = "block";
  }
}

SearchBtn.addEventListener("click", () => {
  checkWeather(SearchBox.value);
   document.querySelector(".error").style.display = "none";
});
SearchBox.addEventListener("keydown", (event) => {
  if(event.key === "Enter"){
checkWeather(SearchBox.value);
   document.querySelector(".error").style.display = "none";
  }
});
