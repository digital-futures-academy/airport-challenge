const Plane=require('./../src/plane.js')

let plane

describe('Suite to check functionality of Plane class', function(){
    it('Check that class is created with correct flying status.', function(){
        plane=new Plane('Lancaster Bomber', true)
        expect(plane._isFlying).toBeTrue()
    })
    it('Check that flying status can be updated', function(){
        plane=new Plane('Lancaster Bomber', true)
        plane.setIsFlying(false)
        expect(plane._isFlying).toBeFalse()
    })
})

