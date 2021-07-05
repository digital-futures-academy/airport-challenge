const Airport = require ("./../src/airport.js");
const assertEquals = require("./../assertEquals.js");
const Airplane = require("./../src/airplane.js");

let airport = new Airport();

let input = true;
let expectedOutput = "Plane has landed";

console.log(`When the ATC says: ${input}, the expected output should be: ${expectedOutput}`);

//Execute

let result = airport.canPlaneLand(input);

 //Verify
console.log(assertEquals(result, expectedOutput));


airport = new Airport();

input = 5000;
expectedOutput = 5000;

console.log(`The capacity should be changed to ${input}, the expected output should be: ${expectedOutput}`);

//Execute
airport.setMaxCapacity(input);
result = airport.maxCapactiy;


 //Verify
console.log(assertEquals(result, expectedOutput));

airport = new Airport();

input ="Plane cannot Land";
expectedOutput = "Plane cannot land";

airport.setMaxCapacity(3000);
airport.setCurrentCapacity(3100);

console.log();
console.log(assertEquals(airport.canPlaneLand(), expectedOutput));

airport = new Airport();
airplane = new Airplane();

// airplane.planeInAir = true;
expectedOutput = "Plane has landed.";
airplane.planeInAir = true;


console.log(assertEquals(airport.canPlaneLand(airplane), expectedOutput));

