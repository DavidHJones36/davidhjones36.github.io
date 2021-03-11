const weather = new Weather(),
  storage = new Storage(),
  ui = new UI(),
  latlng = new Latlng(),
  uiZip = document.getElementById('zip'),
  changeBtn = document.getElementById("change-btn"),
  changeForm = document.getElementById('w-form'),
  closeBtn = document.getElementById("close-btn"),
  zipAlert = document.querySelector(".alert"),
  contentCol = document.getElementById("content-col");
  let uiZipValue = '',
  storedZip = '';

document.addEventListener("DOMContentLoaded", getWeather);

function getWeather() {
  storedZip = storage.getLocationData();
  if (storedZip === null || storedZip.length < 5 || isNaN(storedZip)) {
    $("#locModal").modal("show");
    return;
  } else {
    $("#locModal").modal("hide");
  }
  latlng.getLatLng(storedZip).then((latlngdata) => {
    let city = latlngdata.name;
    //   state = latlngdata.results[0].address_components[3].short_name;
    weather.getWeather(latlngdata).then((weatherData) => {
      ui.paint(weatherData, city);
    });
  });
  contentCol.style.display = "block";
}

changeForm.addEventListener("submit", (e) => {
  uiZipValue = document.getElementById('zip').value;
  storage.setLocationData(uiZipValue);
  getWeather();
  e.preventDefault();
});

uiZip.addEventListener('keyup', (e) => {
  if(e.target.value.length < 5 || isNaN(e.target.value)){
    zipAlert.classList.remove("d-none");
  } else {
    zipAlert.classList.add("d-none");
  }
});
