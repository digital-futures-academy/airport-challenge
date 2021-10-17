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

let planeList = ['plane1', 'plane2', 'plane3']
let pos = planeList.indexOf('plane1');

console.log(pos, planeList[pos])




