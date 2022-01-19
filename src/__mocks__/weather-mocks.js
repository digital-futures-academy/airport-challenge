class MockWeather {
    constructor(result) {
        this.forecast = () => result;
    }
}

const StormyWeather = new MockWeather('stormy');

const SunnyWeather = new MockWeather('sunny');

module.exports = { StormyWeather, SunnyWeather };
