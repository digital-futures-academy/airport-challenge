const Plane = require("./Plane");
const weatherArray = ["sunny", "stormy"];
class Airport {
  landedPlanes = [];

  constructor(airportCap) {
    this.airportCap = airportCap;
  }
  landPlane = (plane, weather) => {
    if (
      plane instanceof Plane &&
      this.landedPlanes.length < this.airportCap &&
      weather === "sunny"
    ) {
      this.landedPlanes.push(plane);
    }
  };
  increaseAirportCapacityTo = (newCap) => {
    this.airportCap = newCap;
  };
  letPlaneTakeOff = (plane_id, weather) => {
    if (weather === "sunny") {
      let planeIndex = this.landedPlanes.findIndex(
        (plane) => plane_id === plane.id
      );
      if (planeIndex === -1) {
        console.log("Plane you are looking for is not at the airport");
      } else {
        this.landedPlanes.splice(planeIndex, 1);
        console.log("Plane left the airport.");
      }
    }
  };

  planeIsAtTheAirport = (plane) => {
    if (this.landedPlanes.includes(plane)) {
      return true;
    } else {
      return false;
    }
  };
  checkWeather = () => {
    var randomNumber = Math.floor(Math.random() * weatherArray.length);
    return weatherArray[randomNumber];
  };
}
module.exports = Airport;
