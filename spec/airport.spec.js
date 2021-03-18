const test=require('./../test.js')
const Airport = require('./../src/airport.js')
const Plane = require('./../src/plane.js')

var plane1, plane2, plane3, airport


test.it('Check that planes lands at airport.', function(){
    //SETUP
    plane1= new Plane('Boeing 747')
    airport = new Airport('Heathrow', 4)

    //EXECUTE
    console.log(airport.landing(plane1))

    //VERIFY
    test.assertEquals(airport.hanger[0], plane1)
})


test.it('Check that maximum airport capacity can be updated.', function(){
    //SETUP

    //EXECUTE
    console.log(airport.setMaxCapacity(2))

    //VERIFY
    test.assertEquals(2, airport.maxCapacity)
})

test.it('Check that plane cannot land when airport is at maximum capacity', function(){
    //SETUP
    plane2=new Plane ('Concorde')
    plane3=new Plane ('Lancaster Bomber')

    //EXECUTE
    console.log(airport.landing(plane2))
    console.log(airport.landing(plane3))

    //VERIFY
    test.assertEquals(airport.hanger.length, 2)
})

test.it('Check that plane departs airport.', function(){
    //SETUP

    //EXECUTE
    airport.takeOff(plane1)

    //VERIFY
    test.assertEquals(airport.hanger[0], plane2 )
    test.assertEquals(airport.hanger.length, 1 )
})

test.it('Check that a plane is present at the airport before departure', function(){
    //SETUP

    //EXECUTE
    let result=airport.takeOff(plane3)
    console.log(result)

    //VERIFY
    test.assertEquals('Lancaster Bomber not in hanger.', result)

})



