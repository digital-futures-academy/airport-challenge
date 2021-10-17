const Airport = require(`./src/airport`);



// Test 1
console.log('Land a plane:')
let airport = new Airport(10)

airport.land('plane', 'sunny')

// Test 2
console.log('Change airport capacity: ')
airport = new Airport(8);

console.log('Airport capacity is : ' + airport.capacity)

// Test 3
console.log('Prevent landing when airport is full:')
airport = new Airport(10)

airport.land('plane1', 'sunny')
airport.land('plane2', 'sunny')
airport.land('plane3', 'sunny')
airport.land('plane4', 'sunny')
airport.land('plane5', 'sunny')
airport.land('plane6', 'sunny')
airport.land('plane7', 'sunny')
airport.land('plane8', 'sunny')
airport.land('plane9', 'sunny')
airport.land('plane10', 'sunny')
airport.land('plane11', 'sunny')


// Test 4
console.log('Let a plane take off and confirm that it;s no longer in the airport')
airport = new Airport(10)
airport.takeoff('plane', 'sunny')

// Test 5
console.log('Prevent planes from taking off which aren;t at the airport, or from landing a plane that;s already landed')
airport = new Airport(10)
airport.takeoff('plane1', 'sunny')
airport.takeoff('plane1', 'sunny')
airport = new Airport(10)
airport.land('plane1', 'sunny')
airport.land('plane1', 'sunny')

// Test 6
console.log('Prevent plane from landing when weather is stormy')

airport = new Airport(10)
airport.land('plane', 'stormy')

// Test 7
console.log('Prevent plane from taking off when weather is stormy')
airport = new Airport(10)
airport.takeoff('plane', 'stormy')


// Test 8
console.log('Planes that have landed must be at an airport')
airport = new Airport(10)
airport.land('plane', 'sunny')
airport.land('plane1', 'sunny')
console.log('The number of planes that have landed at the airport are: ' + airport.planes.length)