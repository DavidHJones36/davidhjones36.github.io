const weather = new Weather,
store = new Store,
ui = new UI,
latlng = new Latlng,
changeBtn = document.getElementById('change-btn')
zip = document.getElementById('zip').value;

document.addEventListener('DOMContentLoaded', getWeather(zip));

function getWeather(zip){

  if(zip.length<5 || isNaN(zip)){
    //Alert
  } else {
    latlng.getLatLng(zip)
    .then(latlngdata => {
      let city = latlngdata.results[0].address_components[1].short_name,
      state = latlngdata.results[0].address_components[3].short_name;
      weather.getWeather(latlngdata)
      .then(weatherData => {
        ui.paint(weatherData, city, state);
      })
    }
      );
    
  }
}

changeBtn.addEventListener('click', (e) => {
  
});