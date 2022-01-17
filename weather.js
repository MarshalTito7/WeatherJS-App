class Weather{
    constructor(city,state){
        this.apiKey = '2bcc6c84463c97914136dd98b300bb35';
        this.city = city;
        this.state = state;

    }

    // Fetch weather from api
    async getWeather(){
        const response = await fetch(`api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`);

        const responseData = await response.json();

        return responseData;
    }

    

}