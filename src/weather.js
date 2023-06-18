class Weather {
  #currentWeather;

  constructor(weather) {
    this.currentWeather = weather ? weather : this.generateWeather();
  }

  get currentWeather() {
    return this.#currentWeather;
  }

  set currentWeather(weather) {
    this.#currentWeather = weather;
  }

  generateWeather() {
    const chance = Math.random() * 100;

    if (chance < 20) {
      return "STORMY";
    }
    return "SUNNY";
  }

  allowLanding() {
    switch (this.currentWeather) {
      case "STORMY":
        return false;
      case "SUNNY":
        return true;
      default:
        throw new Error("Could not determine weather.");
    }
  }

  allowTakeOff() {
    switch (this.currentWeather) {
      case "STORMY":
        return false;
      case "SUNNY":
        return true;
      default:
        throw new Error("Could not determine weather.");
    }
  }
}

export default Weather;
