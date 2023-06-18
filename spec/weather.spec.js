import Weather from "../src/weather.js";

describe("Weather Class Tests", function () {
  let weather;

  describe("when weather is stormy", function () {
    beforeEach(function () {
      weather = new Weather("STORMY");
    });

    it("should not allow plane to take off", function () {
      expect(weather.allowTakeOff()).toBeFalse();
    });

    it("should not allow plane to land", function () {
      //   const _ = spyOnProperty(weather, "currentWeather").and.returnValue(
      //     "STORMY"
      //   );
      expect(weather.allowLanding()).toBeFalse();
    });
  });

  describe("when weather is sunny", function () {
    beforeEach(function () {
      weather = new Weather("SUNNY");
    });

    it("should allow plane to take off", function () {
      expect(weather.allowTakeOff()).toBeTrue();
    });

    it("should allow plane to land", function () {
      expect(weather.allowLanding()).toBeTrue();
    });
  });
});
