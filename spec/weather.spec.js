const Weather=require('./../src/weather.js')

let weather

describe('Check functionality of Weather Class', function(){
    it('Check that class is created with correct weather status', function(){
        weather=new Weather(true)
        expect(weather._isStormy).toBeTrue()
    })
    it('Check that weather status can be updated', function(){
        weather=new Weather(true)
        weather.setIsStormy(false)
        expect(weather._isStormy).toBeFalse()
    })
})
