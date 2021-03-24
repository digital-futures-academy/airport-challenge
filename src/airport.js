const Plane = require('./plane.js');
const Weather = require('./weather.js');

class Airport {
    constructor(capacity= 3){
        this.hangar = [];
        this.capacity = capacity; 
    }

    toLand(plane, weather){
        if(weather.status == 'sunny')
            if (!this.hangar.includes(plane)){
                if (!this.isFull()){
                    if(plane.intheAir){
                        this.hangar.push(plane);
                        plane.toLand();
                        return `This ${plane} has landed at this aiport.`;
                    }
                    else{
                        return `This ${plane} is already at another aiport.`;
                    }
                }
                else {
                    return 'You cannot land. This airport is full.';
                }
    
            }
            else{
                return `Sorry, this ${plane} is already at the airport.`;
            }
        else {
            return 'The plane cannot land because the weather is stormy.';
        }
    }

    toTakeOff(plane, weather){
        if(weather.status == 'sunny'){
            if(this.hangar.includes(plane)){
                plane.toTakeOff();
                const index = this.hangar.indexOf(plane);
                this.hangar.splice(index, 1);
                return `This ${plane} has taken off from this aiport.`;
            }
            else {
                return `This ${plane} is not at the airport.`;
            }
        }
        else { return 'The plane cannot take off because the weather is stormy.';}
    }


    isFull(){
        return this.hangar.length >= this.capacity;
    }
}
module.exports = Airport;
