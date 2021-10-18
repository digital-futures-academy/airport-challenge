const test=require(`../test-framework.js`)
const Airport=require(`../src/airport.js`)
const Plane=require(`../src/plane.js`)

console.log("Check the Airport")

test.it("plane can't land in two airports at the same time",function(){
    
    let terminal1=new Airport()
	let terminal2=new Airport()
	let plane1={}
	let plane2={}
	let goodResult=terminal1.land(plane1).toString
	let result=terminal2.land(plane1).toString
    //console.log(goodResult)
	//console.log(result)

    test.assertEquals(result,goodResult)//checking the number of planes landed in Airport
})