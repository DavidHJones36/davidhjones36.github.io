class Latlng {
  constructor() {
    this.apiKey = '';
  }

  async getLatLng(zip) {
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?&components=postal_code:${zip}&key=${this.apiKey}`);

    const responseData = await response.json();

    return responseData;
  }
}
