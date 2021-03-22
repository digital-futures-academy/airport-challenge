class airport{
    constructor(){
        this.hanger = ['bowing 43-80'];
        this._stormy = Math.floor(Math.random() * 100);
        this.capacity = 3;
    }

    get maxplanes(){
        return this.hanger.length;
    }
    get viewplanes(){
        return this.hanger;
    }
    airportstatus(){
        return `there are currently ${this.hanger.length} planes at the airport`;
    }
    stormy(weather){
        if (typeof weather === 'number'){
            this._stormy = weather;
            return 'weather status set';
        } else {
            return'stormy must be a number';
        }
    }
    setcapacity(max){
        this.capacity = max;
        return `the max capacity of the airport has been set to ${max}`;
    }
    maxcapacity(){
        return this.hanger.length  >= this.capacity;
    }


    land(plane){
        if(this.maxcapacity()){
            return 'the airport is at max capacity, no planes can land';
        }
        if(this._stormy > 80){
            return `${plane} cannot land as the weather is stormy`;
        }
        if(this.hanger.includes(plane)){
            return 'this plane is already at the airport and so is not available to land';
        }else {
            this.hanger.push(plane);
            return `the ${plane} has success landed at this airport`;
        }
    }
   
    
    
    takeoff(plane){
        if(this._stormy > 80){
            return `${plane} cannot take off as the weather is stormy`;
        }
        let pos = this.hanger.indexOf(plane);
        if(pos === -1){
            return 'there is no such plane at this airport and so cannot take off';
        }else{
            this.hanger.splice[pos,1] = 0;
            return `${plane} has taken off successfully and is no longer in the airport`;
        }
    }
    
}
    
module.exports = airport;
    