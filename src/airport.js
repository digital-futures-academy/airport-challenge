class Airport {
  planesAtAirport = [];
  capacity = [];

  landPlane(plane) {
    this.planesAtAirport.push(plane) //this adds the plane to planesAtAirport this: directing to specific airport
    console.log(`Plane ID: ${plane.id} has landed.`)
  }

  overrideCapacity(airport) {
    this.capacity.push(airport)
    console.log(`Airport capacity has been overridden from ${airport.defaultCapacity} to ${airport.newCapacity}.`)
  }

  airportFull(spaces) {
    let capacity = ``;
    let i = 0;
    while (i > this.spaces) {
      console.log(this.landPlane(spaces)); i++;
      if (capacity <= spaces)
        console.log(`Plane cannot land: airport full`)
      else {
        return false
      }
      break;
    }
    //for (let undefineds of this.planesAtAirport) {
    //  if (undefineds === undefined) {
    //    spaces++
    //  }
    //  else if (capacity <= spaces) {
    //    console.log(`Plane cannot land: airport full`)
    //  }
    //}
  }

}

module.exports = Airport;


//inside class don't need 'let'