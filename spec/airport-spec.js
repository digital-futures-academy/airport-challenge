import Airport from '../src/airport.js';
// import Plane from '../src/plane.js'
let airport;
let plane;
class MockPlane {
  aircraftId = '';
  aircraftStatus = '';
}

describe("Airport", () => {
  beforeEach(() => {
    plane = new MockPlane();
    airport = new Airport();
  });
  afterEach(() => {
    plane = undefined;
    airport = undefined;
  });

  it('returns [] for empty airport', () => {
    //assert
    expect(airport.landedPlanes).toEqual([]);
  });

  it('lands one plane in the airport', () => {
    //arrange
    plane.aircraftId = 'G-XLEE';
    plane.aircraftStatus = 'departed';

    //act
    airport.landPlane(plane);

    //assert
    expect(airport.landedPlanes.length).toEqual(1);
  });

  it('lands a plane with id `G-XLEE` in the airport', () => {
    //arrange
    plane.aircraftId = 'G-XLEE';
    plane.aircraftStatus = 'departed';

    //act
    airport.landPlane(plane);
    expect(airport.landedPlanes[0].aircraftId).toBe('G-XLEE');
  });

  it(' does not land plane without id in the airport', () => {
    //arrange
    plane.aircraftId = '';
    plane.aircraftStatus = 'departed';
    const plane2 = new MockPlane();
    plane2.aircraftId = 'G-KELS';
    plane2.aircraftStatus = 'departed';

    //act
    airport.landPlane(plane);
    airport.landPlane(plane2);
    expect(airport.landedPlanes.length).toBe(1);
  });

    it('lands 3 planes with in the airport', () => {
    //arrange
    plane.aircraftId = 'G-XLEE';
    plane.aircraftStatus = 'departed';
    const plane2 = new MockPlane();
    plane2.aircraftId = 'G-KELS';
    plane2.aircraftStatus = 'departed';
    const plane3 = new MockPlane();
    plane3.aircraftId = 'G-BETI';
    plane3.aircraftStatus = 'departed';

    //act
    airport.landPlane(plane);
    airport.landPlane(plane2); 
      airport.landPlane(plane3); 
    //assert
    expect(airport.landedPlanes.length).toBe(3);
  });
    it('changes plane status from `departed` to `landed` once it lands in the airport', () => {
    //arrange
    plane.aircraftId = 'G-XLEE';
    plane.aircraftStatus = 'departed';

    //act
      airport.landPlane(plane); 
    
    //assert
    expect(airport.landedPlanes[0].aircraftStatus).toBe('landed');
  });

  it('overrides airport capacity from 10 to 1500', () => {
    //act
    airport.overrideAirportCapacity(1490);
    //assert
    expect(airport.maxAirportCapacity).toEqual(1500);
  });

    it('overrides airport capacity from 1500 to 1000', () => {
    //act
      airport.overrideAirportCapacity(1490);
      airport.overrideAirportCapacity(-500);
    //assert
    expect(airport.maxAirportCapacity).toEqual(1000);
    });
  
  it('informs if airport is not full if there is 1 plane in the airport', () => {
    //arrange
    plane.aircraftId = 'G-XLEE';
    plane.aircraftStatus = 'departed';

    //act
    airport.landPlane(plane); 

    //assert
    expect(airport.isFull()).toEqual(false);
  });

  it('informs if airport is full if there are 3 planes in the airport', () => {
    //arrange
    plane.aircraftId = 'G-XLEE';
    plane.aircraftStatus = 'departed';
    const plane2 = new MockPlane();
    plane2.aircraftId = 'G-KELS';
    plane2.aircraftStatus = 'departed';
    const plane3 = new MockPlane();
    plane3.aircraftId = 'G-BETI';
    plane3.aircraftStatus = 'departed';

    //act
    airport.overrideAirportCapacity(-7);
    airport.landPlane(plane); 
    airport.landPlane(plane2); 
    airport.landPlane(plane3); 
  
    //assert
    expect(airport.isFull()).toEqual(true);
  });
  
  it('confirms plane with id of G-XLEE took off with message: `G-XLEE took off from airport` ', () => {
    //arrange
    plane.aircraftId = 'G-XLEE';
    plane.aircraftStatus = 'departed';

    //act
    airport.landPlane(plane); 
  
  //assert
    const message = airport.planeTakeOff('G-XLEE');
    expect(message).toBe(`G-XLEE took off from airport`);
  })
});