const Test = require('./test-framework');

const Airport = require('../src/Airport');
const Plane = require('../src/Plane');

const test = Test.describe('Airport', (suite) => {
    suite.it('Has a default capacity.', (test) => {
        const airport = new Airport();
        const expected = 10;

        const actual = airport.capacity;

        test.expect(expected).toEqual(actual);
    });

    suite.it('Default capacity can be overridden.', (test) => {
        const airport = new Airport(100);
        const expected = 100;

        const actual = airport.capacity;

        test.expect(expected).toEqual(actual);
    });

    suite.it('Can store a Plane on arrival.', (test) => {
        const plane = new Plane('1');
        plane._status = 'arriving';
        const airport = new Airport();
        const expected = 1;

        airport.arrive(plane);
        const actual = airport.planes.length;

        test.expect(expected).toEqual(actual);
    });

    suite.it('Cannot store a Plane which is not arriving.', (test) => {
        const plane = new Plane('1');
        const airport = new Airport();

        test.expect(() => airport.arrive(plane)).toThrow();
    });

    suite.it('Can check if capacity is full.', (test) => {
        const airport = new Airport();
        const expected = false;

        const actual = airport.isFull();

        test.expect(expected).toEqual(actual);
    });

    suite.it('Cannot store a Plane if capacity is full.', (test) => {
        const plane = new Plane('1');
        plane._status = 'arriving';
        const airport = new Airport(0);

        test.expect(() => airport.arrive(plane)).toThrow();
    });

    suite.it('Can remove a Plane on departure.', (test) => {
        const plane = new Plane('1');
        const airport = new Airport();
        plane.land(airport);
        plane._status = 'departing';
        const expected = 0;

        airport.depart(plane);
        const actual = airport.planes.length;

        test.expect(expected).toEqual(actual);
    });

    suite.it('Cannot remove a Plane which is not departing.', (test) => {
        const plane = new Plane('1');
        const airport = new Airport();
        plane.land(airport);

        test.expect(() => airport.depart(plane)).toThrow();
    });

    suite.it('Can check for the presence of a Plane.', (test) => {
        const plane = new Plane('1');
        const airport = new Airport();
        plane.land(airport);
        const expected = true;

        const actual = airport.hasPlane(plane);

        test.expect(expected).toEqual(actual);
    });
});

module.exports = test;
