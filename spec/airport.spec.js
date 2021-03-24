const Airport = require('./../src/airport.js')

let plane1, plane2, plane3, airport, weather


describe('Check functionality of Airport Class', function(){
    describe('Check conditions for landing plane at airport', function(){
        it('Check that plane lands at airport', function(){
            //SETUP
            weather = {_isStormy:false}
            plane1 = {model: 'Boeing 747', _isFlying:true}
            airport = new Airport('Heathrow', 2)

            //EXECUTE
            airport.landing(plane1, weather)

            //VERIFY
            expect(airport._hanger[0]).toBe(plane1)

        })
        it('Check that hanger cannot be overfilled', function(){
            //SETUP
            weather = {_isStormy:false}
            plane1 = {model: 'Boeing 747', _isFlying:true}
            plane2 = {model: 'Concorde', _isFlying:true}
            plane3 = {model: 'Lancaster Bomber', _isFlying:true}
            airport = new Airport('Heathrow', 2)

            //EXECUTE
            airport.landing(plane1, weather)
            airport.landing(plane2, weather)

            //VERIFY
            expect(() => airport.landing(plane3, weather)).toThrow(new Error('Plane could not land, hanger is full.'))
        })
        it('Check that stormy weather prevents landing', function(){
            //SETUP
            weather = {_isStormy:true}
            plane1 = {model: 'Boeing 747', _isFlying:true}
            airport = new Airport('Heathrow', 2)

            //EXECUTE

            //VERIFY
            expect(() => airport.landing(plane1, weather)).toThrow(new Error('Plane could not land due to stormy weather.'))
        })
        it('Check that plane cannot land if already on the ground', function(){
            //SETUP
            weather = {_isStormy:false}
            plane1 = {model: 'Boeing 747', _isFlying:false}
            airport = new Airport('Heathrow', 2)

            //EXECUTE

            //VERIFY
            expect(() => airport.landing(plane1, weather)).toThrow(new Error('Plane is already on the ground.'))
        })
    })

    describe('Check conditions for departing airport', function(){
        it('Check that plane departs airport', function(){
            //SETUP
            weather = {_isStormy:false}
            plane1 = {model: 'Boeing 747', _isFlying:true}
            plane2 = {model: 'Concorde', _isFlying:true}
            airport = new Airport('Heathrow', 2)

            //EXECUTE
            airport.landing(plane1, weather)
            airport.landing(plane2, weather)
            airport.takeOff(plane1, weather)

            //VERIFY
            expect(airport._hanger[0]).toBe(plane2)
            expect(airport._hanger.length).toBe(1)

        })
        it('Check that plane is at airport before departure', function(){
            //SETUP
            weather = {_isStormy:false}
            plane1 = {model: 'Boeing 747', _isFlying:false}
            airport = new Airport('Heathrow', 2)

            //EXECUTE

            //VERIFY
            expect(() => airport.takeOff(plane1, weather)).toThrow(new Error('Plane not in hanger.'))

        })
         it('Check that stormy weather prevents departure', function(){
            //SETUP
            weather = {_isStormy:false}
            plane1 = {model: 'Boeing 747', _isFlying:true}
            airport = new Airport('Heathrow', 3)
            airport.landing(plane1,weather)
            weather._isStormy=true

            //EXECUTE

            //VERIFY
            expect(() => airport.takeOff(plane1, weather)).toThrow(new Error('Plane could not take off due to stormy weather.'))

        })
        it('Check that plane already flying cannot depart', function(){
            //SETUP
            weather = {_isStormy:false}
            plane1 = {model: 'Boeing 747', _isFlying:true}
            airport = new Airport('Heathrow', 2)

            //EXECUTE

            //VERIFY
            expect(() => airport.takeOff(plane1, weather)).toThrow(new Error('Plane is already flying.'))

        })
    })
     describe('Check airport capacity', function(){
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