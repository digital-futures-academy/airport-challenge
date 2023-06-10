import Airport from '../src/airport.js';
import Plane from '../src/plane.js'
let airport;
let plane;

describe("Airport", () => {
  it('returns [] for empty airport', () => {
    airport = new Airport('');
    expect(airport.landedPlanes).toEqual([]);
  });

  it('lands one plane in the airport', () => {
    airport = new Airport();
    plane = new Plane('Boeing 777');
    airport.landPlane(plane);
    expect(airport.landedPlanes).toEqual([plane]);
    expect(airport.landedPlanes.length).toEqual(1);
  });

  it('lands a plane with name `Boeing 777` in the airport', () => {
    airport = new Airport();
    plane = new Plane('Boeing 777');
    airport.landPlane(plane);
    expect(airport.landedPlanes[0].name).toBe('Boeing 777');
  });

  it('overrides airport capacity', () => {
    airport = new Airport('');
    airport.overrideAirportCapacity(1500);
    expect(airport.maxAirportCapacity).toEqual(1500);
    airport.overrideAirportCapacity(-500);
    expect(airport.maxAirportCapacity).toEqual(1000);
  });

    it('informs if airport is full', () => {
      airport = new Airport('');
      plane = new Plane('Boeing 777');
      airport.landPlane(plane);
      airport.overrideAirportCapacity(1500);
      expect(airport.isFull()).toEqual(false);
      airport.overrideAirportCapacity(-1499);
      expect(airport.landedPlanes.length).toEqual(1);
      expect(airport.isFull()).toEqual(true);
  });

});