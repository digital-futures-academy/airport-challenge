import Weather from "./weather.js";
import Plane from "./plane.js";
import Airport from "./airport.js";

console.log(
  "Initialize KNO airport with capacity of 2, random weather, and 3 in flight plane."
);
const weather = new Weather();
const planeAR = new Plane("AR3826");
const planeGR = new Plane("GR0193");
const planePW = new Plane("PW4785");
let airportKNO = new Airport(2, "KNO", new Weather());

console.log(`The weather is currently: ${weather.currentWeather}\n`);

airportKNO.landPlane(planeGR);
console.log(
  `${planeGR.getId()} managed to land at KNO airport: ${airportKNO.hasPlane(
    planeGR
  )}`
);

airportKNO.landPlane(planePW);
console.log(
  `${planePW.getId()} managed to land at KNO airport: ${airportKNO.hasPlane(
    planePW
  )}`
);

if (weather.currentWeather === "SUNNY") {
  airportKNO.landPlane(planeAR);
  console.log();
  console.log(
    `The airport is at max capacity of ${
      airportKNO.capacity
    }, ${planeAR.getId()} tries to land and succeeded: ${airportKNO.hasPlane(
      planeAR
    )}`
  );

  console.log(`Airport KNO instructs ${planeGR.getId()} to take off`);
  airportKNO.takeOffPlane(planeGR);

  console.log(`${planeAR.getId()} prepares for landing.`);
  airportKNO.landPlane(planeAR);

  console.log(
    `${planeAR.getId()} managed to land: ${airportKNO.hasPlane(planeAR)}`
  );
}

if (airportKNO.hasPlane(planeGR)) {
  airportKNO.takeOffPlane(planeGR);
  console.log(`The ${planeGR.getId()} has taken off from KNO airport!`);
}
