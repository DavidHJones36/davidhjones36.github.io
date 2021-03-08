class Latlng {
  constructor() {
    this.apiKey = 'AIzaSyC3yKBcvr6V6dwfY1PY2139VYXCcGaNTuA';
  }

  async getLatLng(zip) {
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?&components=postal_code:${zip}&key=${this.apiKey}`);

    const responseData = await response.json();

    return responseData;
  }
}