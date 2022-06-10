// class Airport {
//   // here's a starting point for you

// }

// To land a plane, I want to add said plane to the array landedPlanes.
let landedPlanes = [];
const landPlane = inputPlane => {
  landedPlanes.push(inputPlane);
  return landedPlanes
};
// console.log(landPlane(`plane1`));

module.exports = {
  // Airport,
  landPlane
}


