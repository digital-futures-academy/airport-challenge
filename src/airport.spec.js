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


