import Airport from '../src/airport.js';
import Plane from '../src/plane.js'
let airport;
let plane;

describe("Airport", () => {
  it('returns [] for empty airport', () => {
    airport = new Airport('');
    expect(airport.planes).toEqual([]);
  });

  it('lands one plane in the airport', () => {
    airport = new Airport();
    plane = new Plane('Boeing 777');
    airport.landPlane(plane);
    expect(airport.planes).toEqual([plane]);
    expect(airport.planes.length).toEqual(1);
  });

  it('lands a plane with name `Boeing 777` in the airport', () => {
    airport = new Airport();
    plane = new Plane('Boeing 777');
    airport.landPlane(plane);
    expect(airport.planes[0].name).toBe('Boeing 777');
  });

  it('overrides airport capacity', () => {
    airport = new Airport('');
    airport.overrideAirportCapacity(1500);
    expect(airport.capacity).toEqual(1500);
    airport.overrideAirportCapacity(-500);
    expect(airport.capacity).toEqual(1000);
  });

});