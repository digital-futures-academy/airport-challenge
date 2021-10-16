
class Airport {
  // here's a starting point for you
  airportName;
  capacity;
  currentNoOfPlanes;
  isFull;
  planeList;

  constructor(airportName = 'Earth', capacity = 1, currentNoOfPlanes = 0, isFull = false, planeList = []) {
    this.airportName = airportName;
    this.capacity = capacity;
    this.isFull = isFull;
    this.planeList = planeList;
    this.currentNoOfPlanes = planeList.length;
  }

  landPlane(plane, weather) {

    let index = this.planeList.indexOf(plane);

    if (index === -1 && weather.weatherReport === 'sunny') {

      if (!this.isFull) {

        //console.log(weather.weatherReport);

        this.planeList.push(plane);
        this.currentNoOfPlanes = this.planeList.length;
        plane.currentLocation = this.airportName;

        this.checkIsFull();

        return 'Plane has landed';

      } else {

        if (this.isFull) {

          return 'Plane cannot land, airport is full';

        }

      }
    } else {

      if (index !== -1) {

        return 'Plane is already at airport';

      } else if (weather.weatherReport === 'stormy') {

        return 'Plane cannot land, weather is stormy';

      }
    }
  }

  takeOff(plane, weather) {

    if (this.currentNoOfPlanes > 0 && weather.weatherReport === 'sunny') {

      let planeIndex = this.planeList.indexOf(plane);

      if (planeIndex > -1) {

        this.planeList.splice(planeIndex, 1);
        this.currentNoOfPlanes = this.planeList.length;
        plane.currentLocation = 'flying';

        this.checkIsFull();

        return 'Plane took off successfully';

      } else {
        return 'Plane is not at airport';
      }
    } else {

      if (weather.weatherReport === 'stormy') {
        return 'Plane cannot take off, weather is stormy';
      } else {
        return 'Plane cannot take off, airport is empty';
      }
    }

  }

  checkIsFull() {
    if (this.currentNoOfPlanes >= this.capacity) {
      this.isFull = true;
    } else {
      this.isFull = false;
    }
  }

  // To refactor checking if planes are at an airport
  checkIsAtAirport () {}
}

module.exports = Airport;
