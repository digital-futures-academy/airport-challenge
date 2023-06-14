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
});