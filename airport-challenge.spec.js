const test=require(`../test-framework.js`)
const Airport=require(`../src/airport.js`)
const Plane=require(`../src/plane.js`)


console.log("new Airport()")
test.it("Default Capacity is 2",function(){
    let airport=new Airport()

    test.assertEquals(airport.capacity,2)//checking the default capacity of Airport
})

test.it("Capacity less than Default Capacity-Overriden ",function(){
    let airport=new Airport(1)

    test.assertEquals(airport.capacity,1)//checking the less than the default capacity of Airport-Overridden
})

console.log("Airport@land()")
test.it("returns an planes array of length 1",function(){
    let plane={}
    let airport=new Airport()
    let result=airport.land(plane)//first plane landed

    test.assertEquals(result.length,1)//checking the number of planes landed in Airport
})

test.it("returns an planes array including plane",function(){
    let plane={}
    let airport=new Airport()
    let result=airport.land(plane)//first plane landed

    test.assertEquals(result.includes(plane), true)//checking the first plane landed is in Airport
})

test.it("returns an planes array including all planes",function(){
    let plane=[]
    let plane2=[]
    let airport=new Airport()
    airport.land(plane)//plane2 landed
    let result=airport.land(plane)

    test.assertEquals(result.includes(plane),true)//checking the first plane landed is  in Airport
    test.assertEquals(result.includes(plane2),true)//checking the second plane landed is in Airport

})

test.it("Prevent Landing when Airport is Full",function(){
    let plane1='1'
    let plane2='2'
	expectedOutput=2
    let airport=new Airport//default capacity 2 overridden to 1
    //airport.land(plane)//first plane landed
    let result=(airport.land(plane2),airport.land(plane1)).length//second plane landed
     console.log(result)
    test.assertEquals(result,expectedOutput)//checking Airport is Full    
})

test.it("Prevent Landing when plane already landed",function(){
    let plane={}
    let airport=new Airport()//default capacity 2 overridden to 1
    airport.land(plane)//fist plane landed
    let result=airport.land(plane)//second plane landed

    test.assertEquals(result,"Plane already Landed")//checking Airport is Full
})

console.log("Airport@takeOff()")
test.it("returns an planes array of length 1",function(){
    let plane={}
    let airport=new Airport()
    airport.land(plane)//first flight landed
    let result=airport.takeoff(plane)//first flight takeoff

    test.assertEquals(result.length,0)//checking the number of planes landed in Airport
})

test.it("returns an planes array without plane that took off",function(){
    let plane={}
    let airport=new Airport()
    airport.land(plane)//first flight landed
    let result=airport.takeoff(plane)//first flight takeoff

    test.assertEquals(result.includes(plane),false)//checking the plane tookoff is not in Airport
})


