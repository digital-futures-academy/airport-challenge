const Weather = require('../src/weather');

describe('Weather', () => {
  let weather;

  beforeEach(() => {
    weather = new Weather();
  });

  describe('isStormy', () => {
    it('should return true when the weather is stormy', () => {
      // Testing the random number generation to always return 9 (stormy weather)
      spyOn(Math, 'random').and.returnValue(0.9);

      const isStormy = weather.isStormy();

      expect(isStormy).toBe(true);
    });

    it('should return false when the weather is not stormy', () => {
      // Testing the random number generation to always return 1 (not stormy weather)
      spyOn(Math, 'random').and.returnValue(0.1);

      const isStormy = weather.isStormy();

      expect(isStormy).toBe(false);
    });
  });
});