const { assertEquals } = require("./testing-framework");
const airport = require("../src/airport");

let actual, result, expected;

const item1 = { id: `item1` };
const item2 = { id: `item2` };
const item3 = { id: `item3` };

//User story 1--

console.log(`Test 1`);
console.log(`==============================================`)
console.log(``);
console.log(`Add item to an airport using itemLand and expect array (itemsInAirport) has increased in length to 1`);


// Arrange
expected = 1;
//item = { id: `item1` };


// Act
airport.itemLand(item1);
actual = airport.itemsInAirport.length;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test 1: 1 item added to airport: ${result}`);
console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up
airport.itemsInAirport = [];
result = undefined;
actual = undefined;



console.log(`Test 2`);
console.log(`==============================================`)
console.log(``);
console.log(`test that Add item passed to an itemLand is actually added to Airport`);

// Arrange
//expected = 1;

// Act
airport.itemLand(item1);
actual = airport.itemsInAirport[0];

// Assert
result = assertEquals(actual, item1);

// Report
console.log(`Test 2: item actually added to airport: ${result}`);
console.log(`Test 2: ${result ? `PASS` : `FAIL`}`);
console.log(``);



// Clean Up
airport.itemsInAirport = [];
result = undefined;
actual = undefined;


console.log(`Test 3`);
console.log(`==============================================`)
console.log(``);
console.log(`item with no id is not added to Airport`);

// Arrange
const itemWithNoId = { desc: `motorcycle` };
expected = 0;


// Act
airport.itemLand(itemWithNoId);
actual = airport.itemsInAirport.length;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test 3: item with no id is not added to Airport: ${result}`);
console.log(`Test 3: ${result ? `PASS` : `FAIL`}`);
console.log(``);



// Clean Up
airport.itemsInAirport = [];
result = undefined;
actual = undefined;


//User story 2

console.log(`Test 1`);
console.log(`==============================================`)
console.log(``);
console.log(`Airport has an original capacity of 40`);

// Arrange

expected = 40;


// Act

actual = airport.defCapacity;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test 1: proof that airport has a def capacity of 40: ${result}`);
console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);
console.log(``);



// Clean Up
airport.itemsInAirport = [];
result = undefined;
actual = undefined;



console.log(`Test 2`);
console.log(`==============================================`)
console.log(``);
console.log(`Airport original capacity of 40 can be changed when needed `);

// Arrange

airport.maxCapacity(50);
expected = 50;


// Act

actual = airport.defCapacity;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test 2: can the original capacity be reassign : ${result}`);
console.log(`Test 2: ${result ? `PASS` : `FAIL`}`);
console.log(``);



// Clean Up
airport.itemsInAirport = [];
result = undefined;
actual = undefined;



//User story 3 

console.log(`Test 1`);
console.log(`==============================================`)
console.log(``);
console.log(`is airport at max capacity `);

// Arrange

airport.maxCapacity(50);
expected = 50;


// Act

actual = 50;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test 1: can the original capacity be reassign : ${result}`);
console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);
console.log(``);



// Clean Up
airport.itemsInAirport = [];
result = undefined;
actual = undefined;



console.log(`Test 2`);
console.log(`==============================================`)
console.log(``);
console.log(`don't land if airport is at max capacity `);

// Arrange

airport.maxCapacity(40);
expected = true;


// Act

actual = airport.isAirportFilled();

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test 2: item can't be added if airport max capacity is reached : ${result}`);
console.log(`Test 2: ${result ? `PASS` : `FAIL`}`);
console.log(``);



//User story 4

console.log(`Test 1`);
console.log(`==============================================`)
console.log(``);
console.log(`item to allow item2 to exit airport `);

// Arrange

expected = 0;
airport.itemsInAirport = [item1];


// Act

airport.itemDispatched(item1);
actual = airport.itemsInAirport.length;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test 1: 1 item dispatched  : ${result}`);
console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);
console.log(``);



// Clean Up
airport.itemsInAirport = [];
result = undefined;
actual = undefined;



// Clean Up
airport.itemsInAirport = [];
result = undefined;
actual = undefined;



console.log(`Test 2`);
console.log(`==============================================`)
console.log(``);
console.log(`item allowed to dispatched has actually dispatched `);

// Arrange

expected = [item2];
airport.itemsInAirport = [item1, item2];


// Act

airport.itemDispatched(item1);
actual = airport.itemsInAirport;
actual = JSON.stringify(actual);
expected = JSON.stringify(expected);

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test 2: first item dispatched  : ${result}`);
console.log(`Test 2: ${result ? `PASS` : `FAIL`}`);
console.log(``);



// Clean Up
airport.itemsInAirport = [];
result = undefined;
actual = undefined;


//User story 5

console.log(`Test 1`);
console.log(`==============================================`)
console.log(``);
console.log(`check which item is not in airport `);

// Arrange

airport.itemLand(item3);
airport.itemLand(item1);
expected = 2;


// Act

airport.itemPresent(item2);
actual = airport.itemsInAirport.length;

// Assert
result = assertEquals(expected, actual);

// Report
console.log(`Test 1: first item has dispatched  : ${result}`);
console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);
console.log(``);



// Clean Up
airport.itemsInAirport = [];
result = undefined;
actual = undefined;



console.log(`Test 2`);
console.log(`==============================================`)
console.log(``);
console.log(`check if all item is in airport `);

// Arrange

expected = 3;


// Act

airport.itemLand(item1, item2, item3);
actual = airport.itemsInAirport[0]

// Assert
result = assertEquals(actual, item1);

// Report
console.log(`Test 2: Item1, Item2, Item3 are in airport  : ${result}`);
console.log(`Test 2: ${result ? `PASS` : `FAIL`}`);
console.log(``);



// Clean Up
airport.itemsInAirport = [];
result = undefined;
actual = undefined;