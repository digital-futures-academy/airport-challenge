const Weather = require('../src/weather');

describe("Weather", function() {
  let weather;

  beforeEach(function() {
    weather = new Weather();
  });

  it("should generate a random weather condition", function() {
    const weatherCondition = weather.randomWeather();
    expect(weather.weatherConditions).toContain(weatherCondition);
  });
});
