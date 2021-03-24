const Airport = require('./../src/airport.js')
const Plane = require('./../src/plane.js')
const Weather = require('./../src/weather.js')

let plane1, plane2, plane3, airport, weather


describe('Testing Airport Class', function(){
    describe('Landing plane at airport', function(){
        it('Check that plane lands at airport.', function(){
            //SETUP
            weather= new Weather(false)
            plane1= new Plane('Boeing 747', true)
            airport = new Airport('Heathrow', 3)

            //EXECUTE
            airport.landing(plane1, weather)

            //VERIFY
            expect(airport._hanger[0]).toBe(plane1)

        })
        it('Check that hanger cannot be overfilled.', function(){
            //SETUP
            weather= new Weather(false)
            plane1= new Plane('Boeing 747', true)
            plane2= new Plane('Lancaster Bomber', true)
            plane3= new Plane('Concorde', true)
            airport = new Airport('Heathrow', 2)

            //EXECUTE
            airport.landing(plane1, weather)
            airport.landing(plane2, weather)

            //VERIFY
            expect(() => airport.landing(plane3, weather)).toThrow(new Error('Plane could not land, hanger is full.'))
        })
        it('Check that stormy weather prevents landing.', function(){
            //SETUP
            weather= new Weather(true)
            plane1= new Plane('Boeing 747', true)
            airport = new Airport('Heathrow', 2)

            //EXECUTE

            //VERIFY
            expect(() => airport.landing(plane1, weather)).toThrow(new Error('Plane could not land due to stormy weather.'))
        })
        it('Check that plane cannot land if already landed.', function(){
            //SETUP
            weather= new Weather(true)
            plane1= new Plane('Boeing 747', false)
            airport = new Airport('Heathrow', 2)

            //EXECUTE

            //VERIFY
            expect(() => airport.landing(plane1, weather)).toThrow(new Error('Plane is already landed.'))
        })
    })

    describe('Plane Departing from Airport', function(){
        it('Check that plane departs from airport.', function(){
            //SETUP
            weather= new Weather(false)
            plane1= new Plane('Boeing 747', true)
            plane2= new Plane('Lancaster Bomber', true)
            airport = new Airport('Heathrow', 3)

            //EXECUTE
            airport.landing(plane1, weather)
            airport.landing(plane2, weather)
            airport.takeOff(plane1, weather)

            //VERIFY
            expect(airport._hanger[0]).toBe(plane2)
            expect(airport._hanger.length).toBe(1)

        })
        it('Check that plane not in airport cannot depart.', function(){
            //SETUP
            weather= new Weather(false)
            plane2= new Plane('Lancaster Bomber', false)
            airport = new Airport('Heathrow', 3)

            //EXECUTE

            //VERIFY
            expect(() => airport.takeOff(plane2, weather)).toThrow(new Error('Plane not in hanger.'))

        })
         it('Check that stormy weather prevents departure.', function(){
            //SETUP
            weather= new Weather(false)
            plane2= new Plane('Lancaster Bomber', true)
            airport = new Airport('Heathrow', 3)
            airport.landing(plane2,weather)
            weather._isStormy=true

            //EXECUTE

            //VERIFY
            expect(() => airport.takeOff(plane2, weather)).toThrow(new Error('Plane could not take off due to stormy weather.'))

        })
        it('Check that plane already flying cannot depart.', function(){
            //SETUP
            weather= new Weather(false)
            plane2= new Plane('Lancaster Bomber', true)
            airport = new Airport('Heathrow', 3)

            //EXECUTE

            //VERIFY
            expect(() => airport.takeOff(plane2, weather)).toThrow(new Error('Plane is already flying.'))

        })
    })
     describe('Airport max capactiy', function(){
        it('Check that max capacity can be overwritten.', function(){
            //SETUP
            airport = new Airport('Heathrow', 3)

            //EXECUTE
            airport.setMaxCapacity(2)

            //VERIFY
            expect(airport._maxCapacity).toBe(2)

        })
})
})