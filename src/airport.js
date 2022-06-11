
const { Plane } = require("./plane")

class Airport {
  // create class constructor
  constructor() { };


  landPlane = (plane) => {
    if (plane.constructor.name != "Plane") {
      return 'Error: no Plane provided';
    }
    return 'success';
  };

}


module.exports = {
  Airport: Airport
}
