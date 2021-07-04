class Airport {
    constructor(capacity=50){
        this.parkedPlanes = []
        this.capacity = capacity
    }
    askToLand(plane,number){
        if(this.isParkedHere(plane)){
            console.log(`${plane} cannot land since it is already parked here`)
            return false
        }
        if(!(this.isThereCapacity())){
            console.log(`${plane} cannot land, there is no space`)
            return this.parkedPlanes
        }
        if(this.isStormy(number)){
            console.log(`${plane} cannot land since it is stormy`)
            return false
        }
        console.log(`Get down here ${plane}`);
        this.parkedPlanes.push(plane);
        return this.parkedPlanes
    }
    askToTakeOff(plane,number){
        if(!(this.isParkedHere(plane))){
            console.log(`${plane} cannot take off since it isnt parked here`)
            return false  
        }
        if(this.isStormy(number)){
            console.log(`${plane} cannot take off since it is stormy`)
            return false
        } 
        console.log(`Get up there ${plane}`)
        this.parkedPlanes.splice(this.parkedPlanes.indexOf(plane),1)
        console.log(this.parkedPlanes)
        return this.parkedPlanes
    }
    isThereCapacity(){
        return this.parkedPlanes.length < this.capacity
    }
    isParkedHere(plane){
        return this.parkedPlanes.includes(plane)
    }
    isStormy(number){
        return number > 0.9
        // return Math.random() > 0.9
    }
}

module.exports = Airport;
