const Jasmine = require('jasmine');
// import Jasmine from 'jasmine';
const jasmine = new Jasmine();

jasmine.loadConfigFile('jasmine.json');

jasmine.execute();
// module.export = jasmine;
// require('./airport.spec');
