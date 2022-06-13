
const { Plane } = require("./plane")

class Airport {
  // create class constructor
  constructor() { };


  landPlane = (plane) => {
    // create an outcome value that can track whether the landPlane function reached a successful or unsuccessful conclusion.
    let outcome = ``;
    // Check that the function has received a valid Plane object. Without a valid Plane object their will be nothing to instruct to land so the function must return an error. 
    if (plane.constructor.name != "Plane") {
      return 'Error: no Plane provided';
    } else {
      outcome = plane.land();   //call the land() function within the plane which will manage the plane's change of state to landed. Store the return of this function as an outcome so landPlane() can know whether the plane successfully landed.
    }

    return outcome === "plane landed" ? 'success' : 'failure'; //If the outcome of plane.land() was successful then return success, else return 'failure'
  };

}


module.exports = {
  Airport: Airport
}
