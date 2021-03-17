class Airport {
    constructor(name, maxCapacity=5){
        this._hanger=[]
        this.name=name
        this.maxCapacity=maxCapacity
    }
    isFull(){
        return this.maxCapacity===this._hanger.length
    }

    get hanger(){
        return this._hanger
    }
    addPlane(plane){
        if (!this.isFull()){
            this._hanger.push(plane)
        }
    }
}

module.exports = Airport;
