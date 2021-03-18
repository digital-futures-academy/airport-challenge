class Airport {
    constructor(name, maxCapacity=5){
        this.name=name
        this._hanger=[]
        this._maxCapacity=maxCapacity
    }

    hangerFull(){
        return this._maxCapacity===this._hanger.length
    }

    get maxCapacity(){
        return this._maxCapacity
    }

    setMaxCapacity(input){
        if (typeof(input)=='number'){
            this._maxCapacity=input
            return `Maximum airport capacity updated to ${this.maxCapacity}.`
        } else {
            return 'Maximum capacity not updated. Please input an integer.'
        }
    }

    get hanger(){
        return this._hanger
    }

    landing(plane){
        if (!this.hangerFull()){
            this._hanger.push(plane)
            return `${plane.model} landed at airport.`
        } else {
            return `${plane.model} could not land, maximum airport capacity reached.`
        }
    }

   takeOff(plane){
        let index=this._hanger.indexOf(plane)
        if (index!==-1){
            this._hanger.splice(index,1)
        } else {
            return `${plane.model} not in hanger.`
        }
   }
}

module.exports = Airport;
