const Plane = require(`./Plane`);

class Airport {
  airportPlanes = [];
  capacity = 3;
  addPlane = plane => {

    if (
      this.airportPlanes.includes(plane)
    ) {
      return `Plane already landed`
    };

    if (
      this.airportPlanes.length >= this.capacity
    ) {
      return `Airport is full`
    };
    if (plane instanceof Plane) this.airportPlanes.push(plane);



  };

  removePlane = plane => {

    if (!this.airportPlanes.includes(plane)) {
      return `Plane not in airport`
    };

    if (this.airportPlanes.findIndex(airportPlane => airportPlane.id === plane.id)) {
      this.airportPlanes.splice(this.airportPlanes.findIndex(airportPlane => airportPlane.id === plane.id), 1);
    }
  };

  setCapacity = newCapacity => {
    if (
      typeof newCapacity !== `number`
    ) {
      return `Value not number`
    };


    return this.capacity = newCapacity




  };



}

module.exports = Airport;
