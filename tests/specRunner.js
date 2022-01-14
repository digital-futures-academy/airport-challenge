const airportTests = require('./airport.spec');

Object.keys(airportTests).forEach((k) => airportTests[k]());
