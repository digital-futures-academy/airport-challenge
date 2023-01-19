const Plane = require(`./Plane`);


class Airport 
{
    airportRunway = [];
    airportCapacity=Math.floor(Math.random() * 100); // Returns a random integer from 0 to 99:
    maxCapacity=Math.max(this.airportCapacity);//to set maximum capacity
    airportData=[];
    airportplaneCount=0;
    
    
    
    planeLanded = (plane,weather) => 
    {
        if (weather!==0 && plane instanceof Plane && ((this.airportCapacity!=0)||(this.airportCapacity===true))) 
        {this.airportRunway.push(Plane);
        this.airportplaneCount+=1};
        return `${this.airportplaneCount} plane landed`;
    }
    
    isRunwayFull= (plane) => {if (this.airportRunway===this.maxCapacity) return Plane.landingGear===false;}
    
    planeTakingOff=(plane,weather)=>
    {
        if (weather===0)  return  'Bad weather';
        else {
              const indexOfItemInAirportRunway= this.airportRunway.findIndex(airportPlane=>airportPlane.id === Plane.id);
            if (indexOfItemInAirportRunway > -1) 
                {
                    this.airportRunway.splice(indexOfItemInAirportRunway, 1);
                console.log(`airport capacity before taking off: ${this.airportCapacity}`)
                console.log(`airport capacity after taking off: ${this.airportCapacity-=1}`)
               }
            }    
        return 'Weather was suitable for take off';    
        }
    
    findPlane=(plane)=>
    {
        if (this.airportplaneCount>0) this.airportData=[1];//1 or landing
        
        const indexOfItemInAirportRunway = this.airportRunway.findIndex(airportPlane=>airportPlane.id === Plane.id);
        if(indexOfItemInAirportRunway<=-1) this.airportData.push(0);//0 for takeoff
        
        return this.airportData;
    }   
    }

module.exports = Airport;


