class Weather {
    constructor() {
      this.weatherConditions = ["sunny", "rainy", "stormy"];
    }
  
    randomWeather() {
      const randomIndex = Math.floor(Math.random() * this.weatherConditions.length);
      return this.weatherConditions[randomIndex];
    }
  }
  
  module.exports = Weather;
  