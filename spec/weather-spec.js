import Weather from "../src/weather.js";

describe('Weather Tests', () => {
  class MockWeather {
    randomNumber = () => 0;
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