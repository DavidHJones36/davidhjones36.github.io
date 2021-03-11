class Latlng {
  constructor() {
    this.apiKey = '3a2e6b8f62670c89d9f639e1ca7628a7';
  }

  async getLatLng(zip) {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${zip}&appid=${this.apiKey}`);

    const responseData = await response.json();

    return responseData;
  }
}