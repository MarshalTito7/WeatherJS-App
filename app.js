
// Init weather object
const weather = new Weather('Boston','US');
// Init UI object
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded',getWeather);

// Change Location event
document.getElementById('w-change-btn').addEventListener('click',(e) => {
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;

    // console.log(city,country);
    weather.changeLocation(city,country);

    // Get and display weather
    getWeather();

    // Close modal
    $('#locModal').modal('hide');
    // document.getElementById("locModal").style.display = "none";
});

function getWeather(){
    weather.getWeather()
    .then(results => {
        ui.paint(results);
        console.log(results);
    })
    .catch(err => console.log(err));
}
