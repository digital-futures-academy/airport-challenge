class Airport {
    constructor(name, capacity = 3){
        this.name = name;
        this.hangar = [];
        this._capacity = capacity;
        this.isFull = false;
    }

    get capacity() {
        return this._capacity;
    }

    checkIfFull(){
        if(this.hangar.length >= this._capacity){
            this.isFull = true;
        }
        return this.isFull;
    }

    landPlane(plane, weather){
        if(weather.generateWeather() === 'Sunny') {
            if(this.hangar.includes(plane)){
                return `${plane} has already landed`;
            }
            if(!plane.flying){
                return `Can not land ${plane.name} as it has already landed at a different airport`;
            }
            if(this.checkIfFull()){
                return `Sorry, ${plane.name} unable to land as airport is full`;
            }
            this.hangar.push(plane);
            plane.land();
            return this.hangar;
        } else {
            return `${plane.name} can not land because weather is stormy`;
        }
    }

    takeOff(plane, weather){
        if(weather.generateWeather() === 'Sunny') {
            if(plane.flying){
                return `Can not take off, ${plane.name} is already in the air`;
            }
            if(this.hangar.includes(plane)){
                this.hangar.splice(this.hangar.indexOf(plane), 1);
                plane.takeOff();
                return `Plane ${plane.name} has departed.`;
            } else {
                return `Plane ${plane.name} is not in the aiport`;
            }
        } else {
            return `${plane.name} can not take off because weather is stormy`;
        }
    }

}

module.exports = Airport;
