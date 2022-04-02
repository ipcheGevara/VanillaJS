class Weather {
    constructor(city, state) {
        this.apiKey = '6854706f8abd4a8c94706f8abd8a8c7d';
        this.city = city;
        this.state = state;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);

        const responseData = await response.json();

        return responseData.current_observation;
    }


}