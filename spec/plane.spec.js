import Plane from "../src/Plane.js";

describe("Plane Tests: ", () => {
    it("Tests that plane has an id.", () => {
        // Arrange
        const plane = new Plane(1);
        // Act
        const actual = plane.getId();
        // Assert
        expect(actual).toEqual(1);
    })
})