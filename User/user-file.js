const Airport = require('../src/airport');

//Creating your airport. Please change values below to your desired properties. 

const capacity = 10
const airspace = ['AH574']
const airplanesAtAirport = ['HE654']
const randomWeatherToggle = true

let airport = new Airport(capacity, airspace, airplanesAtAirport, randomWeatherToggle)
console.log(`Airport has been created`)

const Land = tailNumber => {
    console.log(airport.land(tailNumber))
}

const TakeOff = tailNumber => {
    console.log(airport.takeOff(tailNumber))
}

const Override = newCapacity => {
    console.log(airport.override(newCapacity))
}

//Performing action. Please change tailNumber and newCapacity to desired values

const tailNumber = 'AH574'
const newCapacity = 5

Land(tailNumber)
TakeOff(tailNumber)
Override(newCapacity)
