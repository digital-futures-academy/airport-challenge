import Airport from "./airport.js";
import Instruction from "./instruction.js";
import Plane from "./plane.js";
const purple = "\x1b[35m"
const green = "\x1b[32m"
const reset = "\x1b[0m"

// A scenario that incorporates most user stories. Disclaimer: results will differ on every run due to the random weather generator. However, the weather has been kept consistent for the tests.

console.log('---'.repeat(10));
console.log('Instructing the airport to land a plane:');
console.log('---'.repeat(10));

const Heathrow = new Airport('Heathrow');
const MardelAir = new Plane('FL001')
const Instruction001 = new Instruction('001', Heathrow, MardelAir);

console.log(`Air traffic control have just received an instruction to land flight number${purple} ${MardelAir.flightNumber}${reset} at${purple} ${Heathrow.name} ${reset}airport.`);

console.log('\nChecking weather....\n');

try {
    Instruction001.landPlane();
    console.log(`Landing flight ${purple}${MardelAir.flightNumber}${reset} was ${green}successful!${reset}`);
} catch (error) {
    if (error.message === `Too stormy to land / take-off`) {
        console.log(`Plane cannot be landed at this time. Reason: ${error.message}`);
    } else if (error.message === `Airport is full`) {
        console.log(`Plane cannot be landed at this time. Reason: ${error.message}`);
    } else if (error.message === `Plane already at airport.`) {
        console.log(`Plane cannot be landed at this time. Reason: ${error.message}`);
    }
}
console.log(`---`.repeat(10));

// Setting the airport capacity
let capacity = 1;
try {
    console.log(`Landing a plane while airport is full:`);
    console.log(`Setting the ${purple}${Heathrow.name}${reset} airport capacity to ${purple}${capacity}...${reset}`);
    Heathrow.setAirportCapacity(capacity);
    console.log(`\nThe capacity for ${Heathrow.name} is now: ${purple}${Heathrow.getAirportCapacity()}${reset}!`);
} catch (error) {
    console.log(error.message);
}
console.log(`---`.repeat(10));

// Landing a new plane at Heathrow
const EdAirways = new Plane(`FL002`);
const Instruction002 = new Instruction(`002`, Heathrow, EdAirways);

try {
    Instruction002.landPlane();
    console.log(`Landing flight ${purple}${EdAirways.flightNumber}${reset} was ${green}successful!${reset}`);
} catch (error) {
    if (error.message === `Too stormy to land / take-off`) {
        console.log(`Plane cannot be landed at this time. Reason: ${error.message}`);
    } else if (error.message === `Airport is full`) {
        console.log(`Plane cannot be landed at this time. Reason: ${error.message}`);
    } else if (error.message === `Plane already at airport.`) {
        console.log(`Plane cannot be landed at this time. Reason: ${error.message}`);
    }
}
console.log(`---`.repeat(10));

// Try landing EdAirways when it is already at the airport
console.log(`Attempting to land ${purple}${EdAirways.flightNumber}${reset} while it is already at the airport:\n`);
capacity = 10
try {
    Heathrow.setAirportCapacity(capacity);
    console.log(`The capacity of ${purple}${Heathrow.name}${reset} is now: ${purple}${Heathrow.getAirportCapacity()}${reset}!`);
    Instruction002.landPlane(); // Calling landPlane multiple times due to the random nature of the storm
    Instruction002.landPlane();
    Instruction002.landPlane();
    Instruction002.landPlane();
    console.log(`Landing flight ${purple}${EdAirways.flightNumber}${reset} was ${green}successful!${reset}`);
} catch (error) {
    if (error.message === `Cannot have negative or no capacity.`) {
        console.log(`Airport capacity cannot be changed at this time. Reason: ${error.message}`);
    }
    if (error.message === `Too stormy to land / take-off`) {
        console.log(`Plane cannot be landed at this time. Reason: ${error.message}`);
    } else if (error.message === `Airport is full`) {
        console.log(`Plane cannot be landed at this time. Reason: ${error.message}`);
    } else if (error.message === `Plane already at airport.`) {
        console.log(`Plane cannot be landed at this time. Reason: ${error.message}`);
    }
}

// Take-off Planes
console.log(``);
console.log(`--`.repeat(10));
console.log(`Attempting to take-off flight: ${purple}${EdAirways.flightNumber}${reset}:`);
console.log(`--`.repeat(10));
try {
    Instruction002.takeOffPlane();
    console.log(`Flight ${purple}${EdAirways.flightNumber}${reset} ${green}successfully${reset} taken-off!`);
} catch (error) {
    if (error.message === `Too stormy to land / take-off`) {
        console.log(`Plane cannot take-off at this time. Reason: ${error.message}`);
    } else if (error.message === `Plane not at airport.`) {
        console.log(`${error.message}`);
    }
}
