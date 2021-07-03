const assertEquals = require("../testing-framework.js")
const Plane = require("../src/plane.js");

require("../src/plane.js");

console.log("\x1b[35m"," --- Start of Plane Class Tests --- ");
console.log("\x1b[0m","Initialisation Test");

let plane 

// Setup 
plane = new Plane('American','flying');
// Execute 

// Verify
console.log(`Name initialised correctly: ${assertEquals(plane.name,'American')}`); 
console.log(`Flying status assigned correctly: ${assertEquals(plane.flyingStatus, 'flying')}`);

console.log("\x1b[35m", " --- End of Plane Class Tests --- ");
console.log("\x1b[0m",'')