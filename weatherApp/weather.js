class Weather {
  constructor() {
    this.apiKey = '3a2e6b8f62670c89d9f639e1ca7628a7';
  }

  async getWeather(data) {
    const lat = data.results[0].geometry.location.lat,
    lng = data.results[0].geometry.location.lng;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=imperial&appid=${this.apiKey}`);

    const responseData = await response.json();

    return responseData;
  }
}