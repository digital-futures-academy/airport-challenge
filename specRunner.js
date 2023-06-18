const Jasmine = require('jasmine');
const jasmine = new Jasmine();

console.log('RUNNING ALL TESTS');
console.log('=================');
console.log('');

jasmine.loadConfig({
    spec_dir: 'spec',
    spec_files: [
        'airportSpec.js',
        'planeSpec.js',
        'weatherSpec.js'
    ]
});

jasmine.execute();
