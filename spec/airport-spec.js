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
    expect(airport.landedPlanes[0].name).toEqual('Boeing 777');
    expect(airport.landedPlanes[0].status).toEqual('landed');
    expect(airport.landedPlanes.length).toEqual(1);
  });

  it('lands a plane with name `Boeing 777` in the airport', () => {
    airport = new Airport();
    plane = new Plane('Boeing 777');
    airport.landPlane(plane);
    expect(airport.landedPlanes[0].name).toBe('Boeing 777');
    expect(airport.landedPlanes[0].status).toBe('landed');
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
  
  it('confirms plane took off', () => {
    airport = new Airport('');
    const plane1 = new Plane('Boeing 777');
    const plane2 = new Plane('Airbus A380');
    const plane3 = new Plane('Airbus A340');
    airport.landPlane(plane1);
    airport.landPlane(plane2);
    airport.landPlane(plane3);
    const message = airport.planeTakeOff('Boeing 777');
    expect(message).toBe(`Boeing 777 took off from airport`);
    expect(airport.landedPlanes.length).toEqual(2);
    expect(airport.landedPlanes[0].status).toBe('landed');
  })
});