class Airport {
    constructor(name, maxCapacity=5){
        this._hanger=[]
        this.name=name
        this._maxCapacity=maxCapacity
    }
    isFull(){
        return this.maxCapacity===this._hanger.length
    }
    get maxCapacity(){
        return this._maxCapacity
    }

    get hanger(){
        return this._hanger
    }
    addPlane(plane){
        if (!this.isFull()){
            this._hanger.push(plane)
        }
    }
    removePlane(plane){
        let index=this._hanger.indexOf(plane)
        if (index!==-1){
            this._hanger.splice(index,1)
        } else{return 'plane not in hanger'}
     }
}

module.exports = Airport;
