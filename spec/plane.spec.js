import Plane from "../src/plane.js";

describe("Plane Tests: ", () => {
    // User story 1 test 1.
    it("Tests that plane has an id.", () => {
        // Given that
        const plane = new Plane(1);
        // When this happens
        const actual = plane.getId();
        // expect this
        expect(actual).toEqual(1);
    })
})