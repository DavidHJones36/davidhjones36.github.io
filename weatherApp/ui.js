class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.icon = document.getElementById('w-icon');
    this.details = document.getElementById('w-details');
    this.humidity = document.getElementById('w-humidity');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.feelsLike = document.getElementById('w-feels-like');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather, city) {
    this.location.textContent = `${city}`;
    this.desc.textContent = weather.current.weather[0].main;
    this.string.textContent = `${weather.current.temp} ºF`;
    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`);
    // this.details 
    this.humidity.textContent = `Relative Humidity : ${weather.current.humidity}`;
    this.dewpoint.textContent = `Dew Point : ${weather.current.dew_point}`;
    this.feelsLike.textContent = `Feels Like : ${weather.current.feels_like}`;
    this.wind.textContent = `Wind : ${weather.current.wind_speed} MPH`;
    document.getElementById('weather-info').style.display = "block";
  }
}

