
// Init weather object
const weather = new Weather('London','uk');
// Init UI object
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded',getWeather);

// weather.changeLocation

function getWeather(){
    weather.getWeather()
    .then(results => {
        ui.paint(results);
        console.log(results);
    })
    .catch(err => console.log(err));
}
