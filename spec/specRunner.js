const assertEquals = require('../test-framework')
// const result = require('../test-framework')
let Airport = require('../src/airport')
let Plane = require('../src/plane')

console.log('Test0 - to land plane')
 // T setup
let airport = new Airport()
 // T execute
let outcome = airport.land('plane')
 // T verify
assertEquals(outcome.length, 1)


console.log('Test1 - check plane is the same plane wanting to land')
// T1 setup
let airport1 = new Airport()
 // T1 execute
let outcome1 = airport1.land('plane1')
// T1 verify 
assertEquals(outcome1.includes('plane1'), true)

console.log('Test2 - to check airport capacity is full')
 // T2 setup
 let airport2 = new Airport()
 // T2 execute
 airport2.land('plane1')
 airport2.land('plane2')
 airport2.land('plane3')
 // T2 verify
assertEquals(airport2.isFull(), true)

console.log('Test3 - to check airport capacity is not full')
 // T3 setup
 let airport3 = new Airport()
 // T3 execute
 airport3.land('plane1')
 // T3 verify
assertEquals(airport3.isFull(), false)

console.log('Test4 - to check plane has left airport')
// T4 setup
let airport4 = new Airport()
// T4 execute 
airport.land('plane1')
airport4.remove('plane1')
let outcome3 = airport4.remove('plane1')
// T4 verify
assertEquals(outcome3.includes('plane3'), false)

/* console.log('Test5- check the plane that has taken off has left airport')
// T5 setup
let airport5 = new Airport()
 // T5 execute
 airport.remove('plane1')
 let outcome4 = airport5.remove('plane1')
// T5 verify 
assertEquals(outcome4.includes('plane1'), false) */ 