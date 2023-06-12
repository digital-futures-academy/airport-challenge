import Airport from '../src/airport.js';
import Plane from '../src/plane.js'
let airport;
let plane;

describe("Airport", () => {
  it('returns [] for empty airport', () => {
    airport = new Airport('', '');
    expect(airport.landedPlanes).toEqual([]);
  });

  it('lands one plane in the airport', () => {
    airport = new Airport();
    plane = new Plane('G-XLEE', 'departed');
    airport.landPlane(plane);
    expect(airport.landedPlanes[0].aircraftId).toEqual('G-XLEE');
    expect(airport.landedPlanes[0].aircraftStatus).toEqual('landed');
    expect(airport.landedPlanes.length).toEqual(1);
  });

  it('lands a plane with id `G-XLEE` in the airport', () => {
    airport = new Airport();
    plane = new Plane('G-XLEE', 'departed');
    airport.landPlane(plane);
    expect(airport.landedPlanes[0].aircraftId).toBe('G-XLEE');
    expect(airport.landedPlanes[0].aircraftStatus).toBe('landed');
  });

  it('overrides airport capacity', () => {
    airport = new Airport('');
    airport.overrideAirportCapacity(1490);
    expect(airport.maxAirportCapacity).toEqual(1500);
    airport.overrideAirportCapacity(-500);
    expect(airport.maxAirportCapacity).toEqual(1000);
  });

  it('informs if airport is full', () => {
    airport = new Airport('');
    plane = new Plane('G-XLEE', 'departed');
    airport.landPlane(plane);
    expect(airport.isFull()).toEqual(false);
    airport.overrideAirportCapacity(1490);
    airport.overrideAirportCapacity(-1499);
    expect(airport.landedPlanes.length).toEqual(1);
    expect(airport.isFull()).toEqual(true);
  });
  
  it('confirms plane took off', () => {
    airport = new Airport('');
    const plane1 = new Plane('G-XLEE', 'departed');
    const plane2 = new Plane('G-KELS', 'departed');
    const plane3 = new Plane('G-BETI', 'departed');
    airport.landPlane(plane1);
    airport.landPlane(plane2);
    airport.landPlane(plane3);
    const message = airport.planeTakeOff('G-XLEE');
    expect(message).toBe(`G-XLEE took off from airport`);
    expect(airport.landedPlanes.length).toEqual(2);
    expect(airport.landedPlanes[0].aircraftStatus).toBe('landed');
  })
});