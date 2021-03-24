
class Airport {
    constructor(name, maxCapacity=5){
        this._name=name
        this._hanger=[]
        this._maxCapacity=maxCapacity
    }

    isFull(){
        return this._maxCapacity===this._hanger.length
    }

    setMaxCapacity(input){
        if (typeof(input)==='number'){
            this._maxCapacity=input
    }
    }

    landing(plane, weather){
        if (!plane._isFlying) {
            throw new Error('Plane is already landed.')
        } else if (weather._isStormy){
            throw new Error('Plane could not land due to stormy weather.')
        } else {
            if (!this.isFull()){
                this._hanger.push(plane)
                plane._isFlying=false
                return this._hanger
            } else {
                throw new Error('Plane could not land, hanger is full.')
            }
        }
    }

    takeOff(plane, weather){
        if (plane._isFlying) {
            throw new Error('Plane is already flying.')
        } else if (weather._isStormy){
            throw new Error('Plane could not take off due to stormy weather.')
        } else {
            let index=this._hanger.indexOf(plane)
            if (index!==-1){
                 this._hanger.splice(index,1)
                 plane._isFlying=true
                 return this._hanger
            } else {
                throw new Error('Plane not in hanger.')
        }
    }
}}



module.exports = Airport;
