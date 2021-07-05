const Plane = require('../src/plane');
const Weather = require('../src/weather');

class Airport {
    constructor(capacity) {
        this.landedPlane = ['plane 1'];
        this.capacity = capacity;
    }

    //this function changes the isflying parameter in the plane class to false, adds the plane to the landed array and returns the list of landed planes
    landPlane(planeName) {
        let weather = new Weather();
        let checkIfFull = this.isFull();
        let checkWeather = weather.checkIfStormy();
        //if statement to check if weather is strormy 
        if(checkWeather){
            return `The weather is stormy hence, ${planeName} cannot land`;
        }
        //else statement for if the weather is not stormy
        else{
            //if statement to check if plane has landed 
            if (this.landedPlane.includes(planeName)) {
                return `${planeName} has already landed`;
            } 
            //else statement for if plane has not landed 
            else {
                // if statement to check if airport is full
                if (checkIfFull) {
                    return 'plane cannot land yet, the landing area is full';
                } 
                //else statement fot is the airport is not full
                else {
                    let plane = new Plane(planeName);
                    plane.isFlying = false;
                    this.landedPlane.push(planeName);
                    console.log(`it is ${plane.isFlying} that the plane is flying`);
                    console.log(`${plane.name} has successfully landed`);
                    return this.landedPlane;
                }
            }
        }
    }

    //this function check if the capacity passed in is an int and a positive number
    getCapacity() {
        if (Number.isInteger(this.capacity) && this.capacity > 0) {
            return `current capacity is ${this.capacity}`;
        } else {
            return 'you have entered a wrong capacity';
        }
    }

    //this function check if the length of landed plane has exceeded the allowed capacity
    isFull() {
        console.log(`current capacity is ${this.capacity}`);
        console.log(`current number of plane landed is ${this.landedPlane.length}`);
        if (this.landedPlane.length >= this.capacity) {
            return true;
        } else {
            return false;
        }
    }

    //this function checks if the plane is in landed list, if not it pops the name of the plane from the landedplane arrays and changes the isflying to true, if yes it returns an error
    takeOff(planeName){
        let weather = new Weather();
        let checkWeather = weather.checkIfStormy();
        //if statement to check if weather is strormy 
        if(checkWeather){
            return `The weather is stormy hence, ${planeName} cannot takeoff`;
        }
        else{
            let plane = new Plane(planeName);
            // console.log(this.landedPlane.includes(planeName));
            if (this.landedPlane.includes(planeName)){
                plane.isFlying = true;
                this.landedPlane.pop(planeName);
                return `${planeName} has successfully taken off`;
            }
            else{
                return `${planeName} is already flying`;
            
            }
        }
    }

    countPlanes(){
        return this.landedPlane.length();
    }
}

// let airport = new Airport(1);

// airport = airport.takeOff('plane 2');
// console.log(airport);


module.exports = Airport;
