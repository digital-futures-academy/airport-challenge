import Weather from "../src/weather.js";

describe('Weather Tests', () => {
  class MockWeather {
    getCurrentWeather = () => 'stormy';
  }
  let weather = new MockWeather();
    it('should return the current weather when calling getCurrentWether', () => {
      //arrange
      //act
      //assert
      expect(weather.getCurrentWeather()).toBe('stormy');
    });
});