const Airport = require("./Airport");

// Set your airport name, capacity, and current landed planes
const area51 = new Airport();
area51.setCapacity(9);
area51.planes = [`F-15B`];
console.log(`Fighters already at the airport include: ${area51.planes}`);

// List of flights under control
const fighter1 = `F-14`;
const fighter2 = `F-15A`;
const fighter3 = `F-15B`;
const fighter4 = `F-15C`;
const fighter5 = `F-15D`;
const fighter6 = `F-15E`;
const fighter7 = `F-18`;
const fighter8 = `F-22`;
const fighter9 = `F-35`;
const fighter10 = `F-16`;

// Requirements to land or takeoff specific flights
area51.land(fighter1);
area51.land(fighter2);
area51.takeOff(fighter2);
area51.land(fighter3);
area51.land(fighter3);
area51.land(fighter4);
area51.land(fighter5);
area51.takeOff(fighter6);
area51.land(fighter6);
area51.land(fighter7);
area51.land(fighter8);
area51.land(fighter9);
area51.land(fighter1);
area51.land(fighter10);

// Report about the flow of flights at the airport
const date = new Date();
console.log(`\n----------------------------------------- `);
console.log(`Attention: Aircraft Status Report`);
console.log(`----------------------------------------- `);
console.log(`Date: ${date.toLocaleDateString()}`);
console.log(`Time: ${date.toLocaleTimeString()}`);
console.log(`Weather: ${area51.weather.description}`);
console.log(`----------------------------------------- `);
console.log(`The operational status of Area 51's fleet:`);
console.log(`-----------------------------------------`);
console.log(`Total Aircraft: ${area51.planes.length}`);
console.log(`-----------------------------------------`);
console.log(`List of Aircraft:`);
for (let i = 0; i < area51.planes.length; i++) {
    console.log(`${i + 1}. ${area51.planes[i]}`);
}
console.log(`-----------------------------------------`);
console.log(`End of Report`);
console.log(`-----------------------------------------`);