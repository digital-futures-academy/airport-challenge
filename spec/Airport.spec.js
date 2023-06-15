import Airport from '../src/airport.js';

describe('Airport', () => {
    describe('landPlane', () => {
        /*
            // test landPlane
            let ap = new Airport();
            let mockPlane1 = {};
            let mockPlane2 = {};
            expect(ap.planesOnGround).toHaveSize(0);
            ap.landPlane(mockPlane1);
            expect(ap.planesOnGround).toHaveSize(1);
            expect(ap.planesOnGround[0]).toBe(mockPlane1);
            ap.landPlane(mockPlane2);
            expect(ap.planesOnGround).toHaveSize(2);
            expect(ap.planesOnGround[0]).toBe(mockPlane1);
        expect(ap.planesOnGround[1]).toBe(mockPlane2);
        */
        let ap, mockPlane1, mockPlane2;
        beforeEach(() => {
            ap = new Airport();
            mockPlane1 = {};
            mockPlane2 = {};
        });
        it('airport should be empty for a new airport', () => { expect(ap.planesOnGround).toHaveSize(0); });
        describe('after landing one plane', () => {
            beforeEach(() => {
                ap.landPlane(mockPlane1);
            });
            it('airport should contain one plane', () => { expect(ap.planesOnGround).toHaveSize(1); });
            it('airport should contain the plane that landed', () => { expect(ap.planesOnGround[0]).toBe(mockPlane1); });
            describe('after landing a second, different, plane', () => {
                beforeEach(() => { ap.landPlane(mockPlane2); });
                it('airport should contain two aeroplanes', () => { expect(ap.planesOnGround).toHaveSize(2); });
                it('the first plane to have landed should not have been modified', () => { expect(ap.planesOnGround[0]).toBe(mockPlane1); });
                it('the second plane to have landed is the plane that we landed', () => { expect(ap.planesOnGround[1]).toBe(mockPlane2); });
            });
        });
    });

    describe('canSetCapacity', () => {
        /*
        // test canSetCapacity
        let airport = new Airport();
        expect(Number.isInteger(airport.defaultCapacity)).toBeTrue();
        expect(airport.defaultCapacity >= 0).toBeTrue();
        expect(airport.capacity).toBe(airport.defaultCapacity);
        const oldDefaultCapacity = airport.defaultCapacity;
        airport.setCapacity(3);
        expect(airport.capacity).toBe(3);
        expect(airport.defaultCapacity).toBe(oldDefaultCapacity);

        let airport = new Airport();
        const badCapacity = -3;
        const terribleCapacity1 = [];
        const terribleCapacity2 = { a: [], b: [], c: "oeun" };
        test(airport.setCapacity).given(badCapacity).throws(RangeError);
        test(airport.setCapacity).with(terribleCapacity1).throws(TypeError);
        test(airport.setCapacity).with(terribleCapacity2).throws(TypeError);
        test.showSummary();
            */

        let airport;
        beforeEach(() => {
            airport = new Airport();
        });
        it('defaultCapacity should be an integer', () => { expect(Number.isInteger(airport.defaultCapacity)).toBeTrue(); });
        it('default capacity should be non negative', () => { expect(airport.defaultCapacity).toBeGreaterThanOrEqual(0); });
        it('current capacity should be same value as the default', () => { expect(airport.capacity).toBe(airport.defaultCapacity); });
        describe('when the capacity is set to 3', () => {
            // const oldDefaultCapacity = airport.defaultCapacity; // doesn't work presumably because js is compiled
            let oldDefaultCapacity;
            beforeEach(() => {
                oldDefaultCapacity = airport.defaultCapacity;
                airport.setCapacity(3);
            });
            it('capacity should be 3', () => { expect(airport.capacity).toBe(3); });
            it('default capacity shouldn\'t change', () => { expect(airport.defaultCapacity).toBe(oldDefaultCapacity); });

        });
        describe('when the capacity is set to a bad value', () => {
            const badCapacity = -3;
            const terribleCapacity1 = [];
            const terribleCapacity2 = { a: [], b: [], c: "oeun" };
            it('should throw range error on bad numeric value', () => { expect(() => { airport.setCapacity(badCapacity) }).toThrowError(RangeError); });

            /*Is the following an acceptable unit test? 
    
    For context this method (setCapacity) usually expects a non negative integer and I have already tested the case where you pass in a negative integer separately. 
    I'm now adding some tests to check that this function throws the correct error with other values (things like an empty array and an object with a few hard coded properties). I have two cases to test, but they both run the same code and test for the same thing, just using a different parameter. Given that these tests both test for the same thing (that this function throws a TypeError when given very bad input) and should fail for the same reason (the function doesn't throw this error when given said bad input) am I allowed to use multiple asserts within the same `it` statement? If I wanted to split this into two tests I would use the same test description both times (as I don't care about the specific object that I'm passing in, just the fact that it's a bad value), which I think would defeat the point of splitting the test up. I also do want both test cases because I think that javascript might act irrationally with some of these objects and I'd like the sanity check.
    
    Any thoughts? */
            it('should throw type error on meaningless values', () => {
                expect(() => {
                    airport.setCapacity(terribleCapacity1);
                }).toThrowError(TypeError);
                expect(() => {
                    airport.setCapacity(terribleCapacity2);
                }).toThrowError(TypeError);
            });
        });
    });

    describe('checkCanLand', () => {
        /*
        // test checkCanLand
        const { test } = require("./testSuit");
    const { Airport } = require("../src/airport");
    let airport = new Airport();

    test(airport.capacity === undefined).isFalse();
    test(airport.planesOnGround === undefined).isFalse();
    airport.capacity = 4;
    airport.planesOnGround = [{}, {}, {}, {}];
    test(airport.canLand()).isFalse();
    airport.capacity = 0;
    test(airport.canLand()).isFalse();
    airport.capacity = 10;
    airport.planesOnGround = [{
        callSign: "G-RUT",
        dest: "LAX",
    },
    {
        callSign: "G-WTR",
        dest: "LUT",
    }];
    test(airport.canLand()).isTrue();
    test.showSummary();
        */
        let airport;
        beforeEach(() => {
            airport = new Airport();
        });
        it('new airport should have a defined capacity', () => { expect(airport.capacity).not.toBeUndefined(); });
        it('new airport should have a defined planesOnGround object', () => { expect(airport.planesOnGround).not.toBeUndefined(); });
        describe('after setting the capacity to 4 with four plans on ground', () => {
            beforeEach(() => {
                airport.capacity = 4;
                airport.planesOnGround = [{}, {}, {}, {}];
            });
            it('can land should be false', () => { expect(airport.canLand()).toBeFalse(); });
            describe('after resetting capacity to 0', () => {
                beforeEach(() => {
                    airport.capacity = 0;
                });
                it('can Land should still be false', () => { expect(airport.canLand()).toBeFalse(); });
                describe('and then setting it back to 10, with two planes on the ground', () => {
                    beforeEach(() => {
                        airport.capacity = 10;
                        airport.planesOnGround = [{
                            callSign: "G-RUT",
                            dest: "LAX",
                        },
                        {
                            callSign: "G-WTR",
                            dest: "LUT",
                        }];
                    });
                    it('canLand should be true', () => { expect(airport.canLand()).toBeTrue(); });
                });
            });
        });
    });

    describe('letTakeOffAndConfirm', () => {
        /*
        // test takeOff
        let airport = new Airport();
    const examplePlane = { id: "plane1" };
    const differentPlane = { id: "plane2" };
    airport.planesOnGround = [examplePlane, { id: "ground vec 1" }];
    test(airport.takeOff(examplePlane)).isTrue();
    test(airport.planesOnGround.includes(examplePlane)).isFalse();
    test(airport.takeOff(differentPlane)).isFalse();
    test(airport.planesOnGround[0].id).equals("ground vec 1");

    test(airport.takeOff(examplePlane)).isFalse(); // this plane has already taken off

    test.showSummary();
        */
        let airport, examplePlane, differentPlane;
        beforeEach(() => {
            airport = new Airport();
            examplePlane = { id: "plane1" };
            differentPlane = { id: "plane2" };
            airport.planesOnGround = [examplePlane, { id: "ground vec 1" }];
        });
        it('plane currently on ground should be able to take off', () => { expect(airport.takeOff(examplePlane)).toBeTrue(); });
        describe('after one plane has taken off', () => {
            beforeEach(() => {
                airport.takeOff(examplePlane);
            });
            it('plane that has taken off should no longer be in the airport', () => {
                expect(airport.planesOnGround).not.toContain(examplePlane);
            });
            it('shouldn\'t be able to take off a plane that is not on the ground', () => {
                expect(airport.takeOff(differentPlane)).toBeFalse();
            });
            it('planes that were previously on the ground should still be on the ground', () => {
                expect(airport.planesOnGround[0].id).toBe("ground vec 1");
            });
            it('can\' launch the same plane twice', () => {
                expect(airport.takeOff(examplePlane)).toBeFalse();
            });
        })

    });

    describe('letTakeOffAndConfirm multiple', () => {
        /*
        let airport = new Airport();
    const standardPlane = { make: "cessna 172" };
    airport.planesOnGround = [standardPlane, standardPlane, standardPlane];
    test(airport.takeOff.bind(airport)).with(standardPlane).equals(true); // questionable testing syntax, would be better without needing bind. Can't currently see a way out of this though.
    test(airport.takeOff.bind(airport)).with(standardPlane).equals(true);
    test(airport.takeOff.bind(airport)).with(standardPlane).equals(true);
    test(airport.takeOff.bind(airport)).with(standardPlane).equals(false);
    test.showSummary()
        */
        let airport, standardPlane;
        beforeEach(() => {
            airport = new Airport();
            standardPlane = { make: "cessna 172" };
            airport.planesOnGround = [standardPlane, standardPlane, standardPlane];
        });
        it('should be able to launch one plane', () => {
            expect(airport.takeOff(standardPlane)).toBeTrue();
        });
        describe('after lanching one plane', () => {
            beforeEach(() => {
                airport.takeOff(standardPlane);
            });
            it('should be able to launch a second plane', () => { expect(airport.takeOff(standardPlane)); });
            describe('after launching a second plane', () => {
                beforeEach(() => {
                    airport.takeOff(standardPlane);
                });
                it('should be able to launch a third plane', () => { expect(airport.takeOff(standardPlane)).toBeTrue(); });
                describe('after launching a third plane', () => {
                    beforeEach(() => {
                        airport.takeOff(standardPlane);
                    });
                    it('should not be able to launch a fourth plane (as there were only three planes on the ground to start with)', () => {
                        expect(airport.takeOff(standardPlane)).toBeFalse();
                    });
                });
            });
        });
    });

    describe('preventConfusion', () => {
        /*
        let airport = new Airport;
        const planeNotInAirport = {id: "BA234"};
        const planeInAirportOnce = {id: "KL900"};
        airport.planesOnGround = [planeInAirportOnce];
        test(airport.takeOff.bind(airport)).with(planeNotInAirport).throws(Error("Plane not in airport"));
        test(airport.takeOff.bind(airport)).with(planeInAirportOnce).equals(true);
        airport.landPlane(planeNotInAirport)
        test(airport.landPlane.bind(airport)).with(planeNotInAirport);
        */
        let airport, planeNotInAirport, planeInAirportOnce;
        beforeEach(() => {
            airport = new Airport();
            planeNotInAirport = { id: "BA234" };
            planeInAirportOnce = { id: "KL900" };
            airport.planesOnGround = [planeInAirportOnce];
        });
        it('should be able to land plane not currently on ground', () => { expect(() => { airport.landPlane(planeNotInAirport) }).not.toThrow(); });

        it('should not be able to land a plane currently on the ground', () => { expect(() => { airport.landPlane(planeInAirportOnce) }).toThrowError("Plane already in airport"); });

        it('should be able to take off a plane currently on the ground', () => { expect(airport.takeOff(planeInAirportOnce)).toBeTrue(); });

        it('should not be able to take off a plane currently not on the ground', () => { expect(airport.takeOff(planeNotInAirport)).toBeFalse(); });

    });

    describe('landPlane with full capacity', () => {
        let airport;
        beforeEach(() => {
            airport = new Airport();
            airport.setCapacity(2);
            airport.planesOnGround = [{ id: "BA999" }, { id: "EXP45GB" }];
        });
        it('should fail to land a new plane when capacity is full', () => { expect(() => { airport.landPlane({ id: "newPlane" }) }).toThrowError("Airport full"); });
    });
});