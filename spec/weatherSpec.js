const Weather = require('../src/weather');

describe("Weather", function() {
  let weather;

  beforeEach(function() {
    weather = new Weather('sunny');
  });

  it("should be able to check the weather", function() {
    expect(weather.checkWeather()).toEqual('sunny');
  });
});
