console.log('Normal TDD testing for Airport')
console.log('==========================')

const runTests = require('./spec/airport.spec');

console.log('==========================')
console.log('Decoupled testing for Plane and airport')
console.log('==========================')

const decoupledTests = require('./spec/DeCoupledPlane.spec')

