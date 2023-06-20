import Plane from "../src/plane.js";

describe('Plane instantiation tests', () => {

  let plane = new Plane();
    
    it('should set landed airport to be LHR on the plane object', () => {
      //arrange
      class MockAirport {
        getAirportName = () => 'LHR'
      }
      const airport = new MockAirport();
      //act
      plane.setLandedAtAirport(airport);
      //assert
      expect(plane.getAirportName()).toBe('LHR');
    });
  
});