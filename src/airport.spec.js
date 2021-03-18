const Airport = require("./airport.js")
const check = require('./test-framework.js')

//TEST CASE 1
console.log('Checks if the toLand() method works')
//1.Setup
let airport = new Airport()
airport.toLand('plane1')
let expected = 2
//2.Execute
let actual = airport.toLand('plane2')
//3.Verify
let result = check(expected, actual)
console.log(result)



//TEST CASE 2
console.log('Checks if the toTakeOff() method works')
//1.Setup
airport = new Airport()
airport.toLand('plane1')
airport.toLand('plane2')
expected = 1
//2.Execute
actual = airport.toTakeOff('plane1')
//3.Verify
result = check(expected, actual)
console.log(result)


//TEST CASE 3 
console.log('Checks if the plane is at the airport')
//1.Setup
airport = new Airport()
airport.toLand('plane1')
airport.toLand('plane2')
expected = 'This plane has already landed'
//2.Execute
actual = airport.toLand('plane2')
console.log(actual)
//3.Verify
result = check(expected, actual)
console.log(result)


//TEST CASE 4
console.log('Checks if the plane is at the airport')
//1.Setup
airport = new Airport()
airport.toLand('plane1')
airport.toLand('plane2')
expected = 'The plane is not at this airport'
//2.Execute
actual = airport.toTakeOff('plane3')
//3. Verify
result = check(expected, actual)
console.log(result)


//TEST CASE 5 
console.log('Checks if airport is full')
//1.Setup
airport = new Airport()
airport.toLand('plane1')
airport.toLand('plane2')
airport.toLand('plane3')
airport.toLand('plane4')
expected = 'The airport is full'
//2.Execute
actual = airport.toLand('plane5')
//3.Verify
result = check(expected, actual)
console.log(result)


