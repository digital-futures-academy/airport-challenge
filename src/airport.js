addPlane = 1

class Airport {
  constructor(airport, planes, capacity) {
    this._planes = 0;
    this._capacity = 10;
  }
  get airport() {
    return this._airport;
  }
  get plane() {
    return this._plane;
  }
  newCapacity(addPlane) {
    this._capacity -= addPlane;
  }
}
console.log('There are now ' + newCapacity + ' spaces for planes')





module.exports = Airport;


//Array for checking if plane is at airport

let airport = ['plane1', 'plane2', 'plane3']
let pos = airport.indexOf('plane1');

console.log(pos, airport[pos])



