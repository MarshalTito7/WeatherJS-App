
// Init weather object
const weather = new Weather('Boston','US');
// Init UI object
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded',getWeather);

// Change Location event
document.getElementById('w-change-btn').addEventListener('click',(e) => {

});

function getWeather(){
    weather.getWeather()
    .then(results => {
        ui.paint(results);
        console.log(results);
    })
    .catch(err => console.log(err));
}
